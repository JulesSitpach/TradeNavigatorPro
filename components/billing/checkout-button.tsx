"use client";

import { useState } from "react";
import { Button, ButtonProps } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { useRouter } from "next/navigation";
import { toast } from "@/components/ui/use-toast";
import { PriceTier } from "@/lib/stripe";

interface CheckoutButtonProps extends ButtonProps {
  /**
   * Price tier for the subscription
   */
  priceTier: PriceTier;
  /**
   * User ID for the customer
   */
  userId: string;
  /**
   * User email for the customer
   */
  email: string;
  /**
   * Optional existing Stripe customer ID
   */
  customerId?: string;
  /**
   * Optional callback after successful checkout creation
   */
  onCheckoutCreated?: (sessionId: string, sessionUrl: string) => void;
}

/**
 * Button component that initiates the Stripe checkout process
 */
export function CheckoutButton({
  priceTier,
  userId,
  email,
  customerId,
  onCheckoutCreated,
  children,
  ...props
}: CheckoutButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleCheckout = async () => {
    try {
      setIsLoading(true);

      // Call API route to create checkout session
      const response = await fetch("/api/stripe/create-checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          priceId: priceTier.stripePriceId,
          userId,
          email,
          customerId,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to create checkout session");
      }

      const { sessionId, sessionUrl } = await response.json();

      // Call optional callback if provided
      if (onCheckoutCreated) {
        onCheckoutCreated(sessionId, sessionUrl);
      }

      // Redirect to Stripe Checkout
      router.push(sessionUrl);
    } catch (error) {
      console.error("Checkout error:", error);
      toast({
        title: "Checkout Error",
        description:
          error instanceof Error
            ? error.message
            : "Failed to start checkout process",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      onClick={handleCheckout}
      disabled={isLoading}
      {...props}
      data-oid="m7bf:zm"
    >
      {isLoading ? (
        <>
          <Icons.spinner
            className="mr-2 h-4 w-4 animate-spin"
            data-oid="q-hh91d"
          />
          Processing...
        </>
      ) : (
        children || `Subscribe to ${priceTier.name}`
      )}
    </Button>
  );
}
