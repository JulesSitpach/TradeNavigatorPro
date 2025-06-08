"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Icons } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import { PriceTier, formatPrice } from "@/lib/stripe";
import { CheckoutButton } from "./checkout-button";

interface PricingCardProps {
  /**
   * Price tier data
   */
  tier: PriceTier;
  /**
   * Whether this is the most popular plan
   */
  isPopular?: boolean;
  /**
   * Whether the user is currently subscribed to this plan
   */
  isCurrentPlan?: boolean;
  /**
   * User ID for checkout
   */
  userId: string;
  /**
   * User email for checkout
   */
  email: string;
  /**
   * Optional existing Stripe customer ID
   */
  customerId?: string;
  /**
   * Custom CSS class names
   */
  className?: string;
  /**
   * Optional callback after successful checkout creation
   */
  onCheckoutCreated?: (sessionId: string, sessionUrl: string) => void;
}

/**
 * Component for displaying a pricing tier card with subscription details
 */
export function PricingCard({
  tier,
  isPopular = false,
  isCurrentPlan = false,
  userId,
  email,
  customerId,
  className,
  onCheckoutCreated,
}: PricingCardProps) {
  return (
    <Card
      className={cn(
        "flex flex-col",
        isPopular && "border-primary shadow-lg",
        className,
      )}
      data-oid="0so33fv"
    >
      <CardHeader data-oid="_d2k6re">
        <div className="flex items-center justify-between" data-oid="sj:kxsw">
          <CardTitle className="text-xl" data-oid="4t.lpc3">
            {tier.name}
          </CardTitle>
          {isPopular && (
            <Badge variant="secondary" className="ml-2" data-oid="5_3o1f3">
              Most Popular
            </Badge>
          )}
        </div>
        <CardDescription className="pt-1.5" data-oid="n9y9n7t">
          {tier.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow" data-oid="y6ioleq">
        <div className="mb-4" data-oid="t8tr6fu">
          <span className="text-3xl font-bold" data-oid="nw6qv4x">
            {formatPrice(tier.price, tier.currency)}
          </span>
          <span className="text-muted-foreground" data-oid="pa2:b2r">
            /{tier.interval}
          </span>
        </div>

        <div className="space-y-2 text-sm" data-oid="h3bti76">
          {tier.features.map((feature, index) => (
            <div key={index} className="flex items-center" data-oid="ysg.oi5">
              <Icons.check
                className="mr-2 h-4 w-4 text-green-500"
                data-oid="5u9i8xa"
              />

              <span data-oid="o7y8ox2">{feature}</span>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="pt-4 pb-6" data-oid="rmt66_l">
        {isCurrentPlan ? (
          <div
            className="w-full rounded-md bg-primary/10 p-2 text-center text-sm font-medium text-primary"
            data-oid="z97mlzf"
          >
            Your Current Plan
          </div>
        ) : (
          <CheckoutButton
            priceTier={tier}
            userId={userId}
            email={email}
            customerId={customerId}
            onCheckoutCreated={onCheckoutCreated}
            className="w-full"
            variant={isPopular ? "default" : "outline"}
            data-oid="-7cro89"
          >
            {isPopular ? "Subscribe Now" : "Choose Plan"}
          </CheckoutButton>
        )}
      </CardFooter>
    </Card>
  );
}
