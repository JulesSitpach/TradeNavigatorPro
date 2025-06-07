import { NextRequest, NextResponse } from "next/server";
import { cancelSubscription, getSubscription } from "@/lib/stripe";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";

/**
 * API route handler for canceling a Stripe subscription
 * 
 * POST /api/stripe/subscriptions/[id]/cancel
 */
export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Extract subscription ID from route params
    const { id } = params;
    
    if (!id) {
      return NextResponse.json(
        { message: "Subscription ID is required" },
        { status: 400 }
      );
    }

    // Verify authentication
    const session = await auth();
    if (!session || !session.user) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    // Get user ID from session
    const userId = session.user.id;

    // Verify the subscription belongs to the user
    const userSubscription = await db.subscription.findFirst({
      where: {
        id,
        userId
      }
    });

    if (!userSubscription) {
      return NextResponse.json(
        { message: "Subscription not found or doesn't belong to user" },
        { status: 404 }
      );
    }

    // Get subscription details from Stripe
    const subscription = await getSubscription(id);

    // Cancel the subscription at period end
    // This allows the user to retain access until the end of their billing period
    await cancelSubscription(id);

    // Update subscription status in database
    await db.subscription.update({
      where: { id },
      data: {
        cancelAtPeriodEnd: true,
        updatedAt: new Date()
      }
    });

    // Return success response
    return NextResponse.json({
      message: "Subscription canceled successfully",
      cancelAt: new Date(subscription.current_period_end * 1000),
      status: "canceled"
    });
  } catch (error) {
    console.error("Error canceling subscription:", error);
    
    return NextResponse.json(
      { 
        message: "Failed to cancel subscription",
        error: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    );
  }
}
