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
      data-oid="xiz38iz"
    >
      <CardHeader data-oid="aj:x_ca">
        <div className="flex items-center justify-between" data-oid="a:y15zc">
          <CardTitle className="text-xl" data-oid="dl-nac.">
            {tier.name}
          </CardTitle>
          {isPopular && (
            <Badge variant="secondary" className="ml-2" data-oid="cxxk0gj">
              Most Popular
            </Badge>
          )}
        </div>
        <CardDescription className="pt-1.5" data-oid="_94ng2n">
          {tier.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow" data-oid="zs981kk">
        <div className="mb-4" data-oid="09j5jxc">
          <span className="text-3xl font-bold" data-oid="o7ol05.">
            {formatPrice(tier.price, tier.currency)}
          </span>
          <span className="text-muted-foreground" data-oid="bpf_46z">
            /{tier.interval}
          </span>
        </div>

        <div className="space-y-2 text-sm" data-oid="nl_9aon">
          {tier.features.map((feature, index) => (
            <div key={index} className="flex items-center" data-oid="27uy5du">
              <Icons.check
                className="mr-2 h-4 w-4 text-green-500"
                data-oid="k0dkm.8"
              />

              <span data-oid="gjgxl6s">{feature}</span>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="pt-4 pb-6" data-oid="5qk:rx-">
        {isCurrentPlan ? (
          <div
            className="w-full rounded-md bg-primary/10 p-2 text-center text-sm font-medium text-primary"
            data-oid="vrorh9g"
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
            data-oid="-ycy25v"
          >
            {isPopular ? "Subscribe Now" : "Choose Plan"}
          </CheckoutButton>
        )}
      </CardFooter>
    </Card>
  );
}
