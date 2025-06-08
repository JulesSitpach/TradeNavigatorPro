import { NextRequest, NextResponse } from "next/server";
import { createCustomerPortalSession } from "@/lib/stripe";
import { auth } from "@/lib/auth";

/**
 * API route handler for creating a Stripe customer portal session
 * 
 * POST /api/stripe/customer-portal
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
    const { customerId } = body;

    // Validate required fields
    if (!customerId) {
      return NextResponse.json(
        { message: "Customer ID is required" },
        { status: 400 }
      );
    }

    // Create customer portal session
    const portalSession = await createCustomerPortalSession(customerId);

    // Return session URL
    return NextResponse.json({
      url: portalSession.url
    });
  } catch (error) {
    console.error("Error creating customer portal session:", error);
    
    return NextResponse.json(
      { 
        message: "Failed to create customer portal session",
        error: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    );
  }
}
