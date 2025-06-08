import { NextRequest, NextResponse } from "next/server";
import { verifyWebhookSignature, handleSubscriptionCreated, handleSubscriptionUpdated } from "@/lib/stripe";
import { db } from "@/lib/db";
import { headers } from "next/headers";

/**
 * Stripe webhook handler
 * 
 * This endpoint receives webhook events from Stripe and processes them accordingly.
 * It handles subscription lifecycle events, payment successes/failures, and other
 * important billing events.
 * 
 * POST /api/webhooks/stripe
 */
export async function POST(req: NextRequest) {
  try {
    // Get the raw request body as text for signature verification
    const rawBody = await req.text();
    
    // Get the Stripe signature from headers
    const headersList = headers();
    const signature = headersList.get("stripe-signature");
    
    if (!signature) {
      console.error("Missing Stripe signature");
      return NextResponse.json(
        { message: "Missing stripe-signature header" },
        { status: 400 }
      );
    }

    // Verify the webhook signature
    const event = verifyWebhookSignature(rawBody, signature);

    // Process different event types
    switch (event.type) {
      case "customer.subscription.created": {
        const subscription = event.data.object;
        console.log(`Processing subscription created: ${subscription.id}`);
        
        // Extract subscription details
        const subscriptionData = await handleSubscriptionCreated(subscription);
        
        // Find the user associated with this customer
        const user = await db.user.findFirst({
          where: {
            stripeCustomerId: subscriptionData.customerId
          }
        });

        if (!user) {
          console.error(`No user found for customer: ${subscriptionData.customerId}`);
          return NextResponse.json(
            { message: "User not found" },
            { status: 404 }
          );
        }

        // Create subscription record in database
        await db.subscription.create({
          data: {
            id: subscriptionData.subscriptionId,
            userId: user.id,
            status: subscriptionData.status,
            priceId: subscriptionData.priceId,
            priceTierId: subscriptionData.priceTier || "starter",
            customerId: subscriptionData.customerId,
            currentPeriodEnd: subscriptionData.currentPeriodEnd,
            cancelAtPeriodEnd: subscriptionData.cancelAtPeriodEnd,
            productLimit: subscriptionData.productLimit,
            createdAt: new Date(),
            updatedAt: new Date()
          }
        });
        
        // Update user's subscription status
        await db.user.update({
          where: { id: user.id },
          data: {
            subscriptionStatus: subscriptionData.status,
            productLimit: subscriptionData.productLimit
          }
        });
        
        break;
      }
      
      case "customer.subscription.updated": {
        const subscription = event.data.object;
        console.log(`Processing subscription updated: ${subscription.id}`);
        
        // Extract updated subscription details
        const subscriptionData = await handleSubscriptionUpdated(subscription);
        
        // Update subscription record in database
        await db.subscription.update({
          where: { id: subscriptionData.subscriptionId },
          data: {
            status: subscriptionData.status,
            priceId: subscriptionData.priceId,
            priceTierId: subscriptionData.priceTier || "starter",
            currentPeriodEnd: subscriptionData.currentPeriodEnd,
            cancelAtPeriodEnd: subscriptionData.cancelAtPeriodEnd,
            productLimit: subscriptionData.productLimit,
            updatedAt: new Date()
          }
        });
        
        // Find the user associated with this subscription
        const userSubscription = await db.subscription.findUnique({
          where: { id: subscriptionData.subscriptionId },
          select: { userId: true }
        });
        
        if (userSubscription) {
          // Update user's subscription status
          await db.user.update({
            where: { id: userSubscription.userId },
            data: {
              subscriptionStatus: subscriptionData.status,
              productLimit: subscriptionData.productLimit
            }
          });
        }
        
        break;
      }
      
      case "customer.subscription.deleted": {
        const subscription = event.data.object;
        console.log(`Processing subscription deleted: ${subscription.id}`);
        
        // Update subscription record in database
        await db.subscription.update({
          where: { id: subscription.id },
          data: {
            status: "canceled",
            cancelAtPeriodEnd: false,
            updatedAt: new Date()
          }
        });
        
        // Find the user associated with this subscription
        const userSubscription = await db.subscription.findUnique({
          where: { id: subscription.id },
          select: { userId: true }
        });
        
        if (userSubscription) {
          // Update user's subscription status
          await db.user.update({
            where: { id: userSubscription.userId },
            data: {
              subscriptionStatus: "canceled",
              productLimit: 10 // Reset to free tier limit
            }
          });
        }
        
        break;
      }
      
      case "invoice.payment_succeeded": {
        const invoice = event.data.object;
        console.log(`Processing invoice payment succeeded: ${invoice.id}`);
        
        // If this is a subscription invoice, update the subscription
        if (invoice.subscription) {
          await db.subscription.update({
            where: { id: invoice.subscription as string },
            data: {
              status: "active",
              updatedAt: new Date()
            }
          });
          
          // Find the user associated with this subscription
          const userSubscription = await db.subscription.findUnique({
            where: { id: invoice.subscription as string },
            select: { userId: true }
          });
          
          if (userSubscription) {
            // Update user's subscription status
            await db.user.update({
              where: { id: userSubscription.userId },
              data: {
                subscriptionStatus: "active"
              }
            });
          }
        }
        
        break;
      }
      
      case "invoice.payment_failed": {
        const invoice = event.data.object;
        console.log(`Processing invoice payment failed: ${invoice.id}`);
        
        // If this is a subscription invoice, update the subscription
        if (invoice.subscription) {
          await db.subscription.update({
            where: { id: invoice.subscription as string },
            data: {
              status: "past_due",
              updatedAt: new Date()
            }
          });
          
          // Find the user associated with this subscription
          const userSubscription = await db.subscription.findUnique({
            where: { id: invoice.subscription as string },
            select: { userId: true }
          });
          
          if (userSubscription) {
            // Update user's subscription status
            await db.user.update({
              where: { id: userSubscription.userId },
              data: {
                subscriptionStatus: "past_due"
              }
            });
            
            // TODO: Send email notification about payment failure
          }
        }
        
        break;
      }
      
      case "customer.created": {
        const customer = event.data.object;
        console.log(`Customer created: ${customer.id}`);
        
        // If metadata contains userId, update the user with stripeCustomerId
        if (customer.metadata?.userId) {
          await db.user.update({
            where: { id: customer.metadata.userId },
            data: {
              stripeCustomerId: customer.id
            }
          });
        }
        
        break;
      }
      
      default:
        // Log unhandled event types for debugging
        console.log(`Unhandled event type: ${event.type}`);
    }

    // Return a 200 response to acknowledge receipt of the event
    return NextResponse.json({ received: true });
    
  } catch (error) {
    console.error("Error processing Stripe webhook:", error);
    
    // If the error is related to signature verification, return 400
    if (error instanceof Error && error.message.includes("signature")) {
      return NextResponse.json(
        { message: "Invalid signature" },
        { status: 400 }
      );
    }
    
    // For other errors, return 500
    return NextResponse.json(
      { 
        message: "Error processing webhook",
        error: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    );
  }
}

/**
 * Stripe webhooks should only accept POST requests
 */
export async function GET() {
  return NextResponse.json(
    { message: "Method not allowed" },
    { status: 405 }
  );
}
