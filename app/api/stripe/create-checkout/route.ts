import { NextRequest, NextResponse } from "next/server";
import { createCheckoutSession } from "@/lib/stripe";
import { getCustomerByEmail } from "@/lib/stripe";
import { getPriceTierByPriceId } from "@/lib/stripe";
import { auth } from "@/lib/auth";

/**
 * API route handler for creating a Stripe checkout session
 * 
 * POST /api/stripe/create-checkout
 */
export async function POST(req: NextRequest) {
  try {
    // Verify authentication
    const session = await auth();
    if (!session || !session.user) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    // Parse request body
    const body = await req.json();
    const { priceId, userId, email, customerId } = body;

    // Validate required fields
    if (!priceId) {
      return NextResponse.json(
        { message: "Price ID is required" },
        { status: 400 }
      );
    }

    if (!userId) {
      return NextResponse.json(
        { message: "User ID is required" },
        { status: 400 }
      );
    }

    if (!email) {
      return NextResponse.json(
        { message: "Email is required" },
        { status: 400 }
      );
    }

    // Verify the price ID is valid
    const priceTier = getPriceTierByPriceId(priceId);
    if (!priceTier) {
      return NextResponse.json(
        { message: "Invalid price ID" },
        { status: 400 }
      );
    }

    // If no customerId provided, try to find existing customer by email
    let stripeCustomerId = customerId;
    if (!stripeCustomerId) {
      const customer = await getCustomerByEmail(email);
      if (customer) {
        stripeCustomerId = customer.id;
      }
    }

    // Create checkout session
    const checkoutSession = await createCheckoutSession({
      customerId: stripeCustomerId,
      priceId,
      userId,
      email
    });

    // Return session details
    return NextResponse.json({
      sessionId: checkoutSession.id,
      sessionUrl: checkoutSession.url
    });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    
    return NextResponse.json(
      { 
        message: "Failed to create checkout session",
        error: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    );
  }
}
