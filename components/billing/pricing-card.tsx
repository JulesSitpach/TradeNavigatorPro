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
      data-oid="cfq:3vw"
    >
      <CardHeader data-oid="prv:ris">
        <div className="flex items-center justify-between" data-oid="93gfa1e">
          <CardTitle className="text-xl" data-oid="-nttai3">
            {tier.name}
          </CardTitle>
          {isPopular && (
            <Badge variant="secondary" className="ml-2" data-oid="u43ysej">
              Most Popular
            </Badge>
          )}
        </div>
        <CardDescription className="pt-1.5" data-oid="_jvu6e1">
          {tier.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow" data-oid="4anv_2-">
        <div className="mb-4" data-oid="clmezg7">
          <span className="text-3xl font-bold" data-oid="trbhau3">
            {formatPrice(tier.price, tier.currency)}
          </span>
          <span className="text-muted-foreground" data-oid="bggu_g-">
            /{tier.interval}
          </span>
        </div>

        <div className="space-y-2 text-sm" data-oid="69qet6t">
          {tier.features.map((feature, index) => (
            <div key={index} className="flex items-center" data-oid="snet6d3">
              <Icons.check
                className="mr-2 h-4 w-4 text-green-500"
                data-oid="sjnvz3_"
              />

              <span data-oid="i1.lcxy">{feature}</span>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="pt-4 pb-6" data-oid="w9lh:nn">
        {isCurrentPlan ? (
          <div
            className="w-full rounded-md bg-primary/10 p-2 text-center text-sm font-medium text-primary"
            data-oid="hnk8lqx"
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
            data-oid="4ghh.zk"
          >
            {isPopular ? "Subscribe Now" : "Choose Plan"}
          </CheckoutButton>
        )}
      </CardFooter>
    </Card>
  );
}
