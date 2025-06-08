"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/components/ui/use-toast";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import {
  formatPrice,
  getPriceTierById,
  PriceTier,
  SubscriptionStatus,
} from "@/lib/stripe";

interface SubscriptionData {
  id: string;
  customerId: string;
  status: SubscriptionStatus;
  priceTierId: string;
  currentPeriodEnd: string;
  cancelAtPeriodEnd: boolean;
  createdAt: string;
  productLimit: number;
  paymentMethod?: {
    card?: {
      brand: string;
      last4: string;
      expiryMonth: number;
      expiryYear: number;
    };
  };
}

interface SubscriptionManagementProps {
  /**
   * User subscription data
   */
  subscription?: SubscriptionData | null;
  /**
   * Whether subscription data is loading
   */
  isLoading?: boolean;
  /**
   * User ID
   */
  userId: string;
  /**
   * User email
   */
  email: string;
}

/**
 * Component for managing existing Stripe subscriptions
 */
export function SubscriptionManagement({
  subscription,
  isLoading = false,
  userId,
  email,
}: SubscriptionManagementProps) {
  const [isPortalLoading, setIsPortalLoading] = useState(false);
  const [isCancelLoading, setIsCancelLoading] = useState(false);
  const router = useRouter();

  // Get price tier details if subscription exists
  const priceTier = subscription
    ? getPriceTierById(subscription.priceTierId)
    : undefined;

  // Format subscription dates
  const formatDate = (dateString: string) => {
    return format(new Date(dateString), "MMMM d, yyyy");
  };

  // Handle customer portal access
  const handleCustomerPortal = async () => {
    if (!subscription?.customerId) return;

    try {
      setIsPortalLoading(true);

      const response = await fetch("/api/stripe/customer-portal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customerId: subscription.customerId,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to access customer portal");
      }

      const { url } = await response.json();

      // Redirect to Stripe Customer Portal
      window.location.href = url;
    } catch (error) {
      console.error("Customer portal error:", error);
      toast({
        title: "Error",
        description:
          error instanceof Error
            ? error.message
            : "Failed to access billing portal",
        variant: "destructive",
      });
    } finally {
      setIsPortalLoading(false);
    }
  };

  // Handle subscription cancellation
  const handleCancelSubscription = async () => {
    if (!subscription?.id) return;

    if (
      !confirm(
        "Are you sure you want to cancel your subscription? You'll still have access until the end of your billing period.",
      )
    ) {
      return;
    }

    try {
      setIsCancelLoading(true);

      const response = await fetch(
        `/api/stripe/subscriptions/${subscription.id}/cancel`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to cancel subscription");
      }

      toast({
        title: "Subscription Canceled",
        description:
          "Your subscription has been canceled and will end on your current billing period.",
      });

      // Refresh the page to show updated subscription status
      router.refresh();
    } catch (error) {
      console.error("Cancellation error:", error);
      toast({
        title: "Error",
        description:
          error instanceof Error
            ? error.message
            : "Failed to cancel subscription",
        variant: "destructive",
      });
    } finally {
      setIsCancelLoading(false);
    }
  };

  // Get status badge variant based on subscription status
  const getStatusBadgeVariant = (status: SubscriptionStatus) => {
    switch (status) {
      case "active":
        return "success";
      case "trialing":
        return "info";
      case "canceled":
      case "incomplete_expired":
        return "destructive";
      case "past_due":
      case "unpaid":
        return "warning";
      default:
        return "secondary";
    }
  };

  // Format subscription status for display
  const formatStatus = (status: SubscriptionStatus) => {
    return status.charAt(0).toUpperCase() + status.slice(1).replace("_", " ");
  };

  // Render loading state
  if (isLoading) {
    return (
      <Card data-oid="etrtq--">
        <CardHeader data-oid="ixz3sw3">
          <CardTitle data-oid="2.a1g56">Subscription</CardTitle>
          <CardDescription data-oid="edt4vhz">
            Loading your subscription details...
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center py-8" data-oid="ha7.x7y">
          <Icons.spinner
            className="h-8 w-8 animate-spin text-muted-foreground"
            data-oid="_chjdt7"
          />
        </CardContent>
      </Card>
    );
  }

  // Render no subscription state
  if (!subscription) {
    return (
      <Card data-oid="a07jgtl">
        <CardHeader data-oid="qyrx7t9">
          <CardTitle data-oid="3mltnhx">Subscription</CardTitle>
          <CardDescription data-oid="0x3.vw2">
            You don't have an active subscription
          </CardDescription>
        </CardHeader>
        <CardContent data-oid="sp-a-9j">
          <Alert data-oid="5tgagum">
            <Icons.info className="h-4 w-4" data-oid="1gcj7s-" />
            <AlertTitle data-oid="t4.v9my">No subscription found</AlertTitle>
            <AlertDescription data-oid="jp2x3:e">
              Subscribe to a plan to access all TradeNavigatorPro features.
            </AlertDescription>
          </Alert>
        </CardContent>
        <CardFooter data-oid="_v_zss2">
          <Button onClick={() => router.push("/pricing")} data-oid=".5ga4j7">
            View Plans
          </Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card data-oid="mp3--cb">
      <CardHeader data-oid="i3t81ej">
        <div className="flex items-center justify-between" data-oid="opmjbra">
          <div data-oid="9lrpfjq">
            <CardTitle data-oid="97pdrpk">Subscription</CardTitle>
            <CardDescription data-oid=".mxefxh">
              Manage your subscription and billing
            </CardDescription>
          </div>
          <Badge
            variant={getStatusBadgeVariant(subscription.status) as any}
            data-oid="uxebbav"
          >
            {formatStatus(subscription.status)}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6" data-oid="g4ds.6m">
        {/* Plan details */}
        <div className="space-y-2" data-oid=".n_sb91">
          <h3
            className="text-sm font-medium text-muted-foreground"
            data-oid="4_r4qqr"
          >
            Plan
          </h3>
          <div className="flex items-center justify-between" data-oid="eb9v.ve">
            <div data-oid="n5binqa">
              <p className="font-medium" data-oid="ou931b0">
                {priceTier?.name || "Unknown Plan"}
              </p>
              <p className="text-sm text-muted-foreground" data-oid="6.tsh6v">
                {priceTier
                  ? `${formatPrice(priceTier.price, priceTier.currency)}/${priceTier.interval}`
                  : ""}
              </p>
            </div>
            {subscription.cancelAtPeriodEnd && (
              <Badge
                variant="outline"
                className="bg-amber-100 text-amber-700 border-amber-200"
                data-oid="we5c_16"
              >
                Cancels on {formatDate(subscription.currentPeriodEnd)}
              </Badge>
            )}
          </div>
        </div>

        <Separator data-oid="z4vh.q_" />

        {/* Product limits */}
        <div className="space-y-2" data-oid="fhgx7q9">
          <h3
            className="text-sm font-medium text-muted-foreground"
            data-oid="xvk6uj:"
          >
            Product Limits
          </h3>
          <p className="font-medium" data-oid="_am31r1">
            {subscription.productLimit === Infinity
              ? "Unlimited products"
              : `${subscription.productLimit.toLocaleString()} products`}
          </p>
        </div>

        <Separator data-oid="-_enta3" />

        {/* Billing details */}
        <div className="space-y-2" data-oid="3_9k:27">
          <h3
            className="text-sm font-medium text-muted-foreground"
            data-oid="-ba0gee"
          >
            Billing Details
          </h3>
          <div className="space-y-1" data-oid="wiln.-c">
            <div className="flex justify-between" data-oid="t3qpv9:">
              <p className="text-sm" data-oid="9zdb_9y">
                Current period ends
              </p>
              <p className="text-sm font-medium" data-oid=".2g07gc">
                {formatDate(subscription.currentPeriodEnd)}
              </p>
            </div>
            <div className="flex justify-between" data-oid="v3614qb">
              <p className="text-sm" data-oid="v5k2oql">
                Subscription started
              </p>
              <p className="text-sm font-medium" data-oid="mgpg3w9">
                {formatDate(subscription.createdAt)}
              </p>
            </div>
            {subscription.paymentMethod?.card && (
              <div className="flex justify-between" data-oid="50t-.10">
                <p className="text-sm" data-oid=".486yy6">
                  Payment method
                </p>
                <p className="text-sm font-medium" data-oid="b-4yt41">
                  {subscription.paymentMethod.card.brand.toUpperCase()} ending
                  in {subscription.paymentMethod.card.last4}
                  {" • "}
                  Expires {subscription.paymentMethod.card.expiryMonth}/
                  {subscription.paymentMethod.card.expiryYear}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Subscription management */}
        {subscription.status === "active" &&
          !subscription.cancelAtPeriodEnd && (
            <>
              <Separator data-oid="cue6wcr" />
              <div className="space-y-2" data-oid="h_o5w97">
                <h3
                  className="text-sm font-medium text-muted-foreground"
                  data-oid="28bjdas"
                >
                  Manage Subscription
                </h3>
                <p className="text-sm text-muted-foreground" data-oid="jk13js4">
                  You can manage your subscription, update payment methods, or
                  view billing history through the customer portal.
                </p>
              </div>
            </>
          )}
      </CardContent>
      <CardFooter
        className="flex flex-col space-y-2 sm:flex-row sm:justify-between sm:space-x-2 sm:space-y-0"
        data-oid="9vd8h8_"
      >
        <Button
          variant="default"
          onClick={handleCustomerPortal}
          disabled={isPortalLoading}
          className="w-full sm:w-auto"
          data-oid="pgdwwga"
        >
          {isPortalLoading ? (
            <>
              <Icons.spinner
                className="mr-2 h-4 w-4 animate-spin"
                data-oid="u:pt8o_"
              />
              Loading...
            </>
          ) : (
            <>
              <Icons.creditCard className="mr-2 h-4 w-4" data-oid=":s1sgel" />
              Billing Portal
            </>
          )}
        </Button>

        {subscription.status === "active" &&
          !subscription.cancelAtPeriodEnd && (
            <Button
              variant="outline"
              onClick={handleCancelSubscription}
              disabled={isCancelLoading}
              className="w-full sm:w-auto"
              data-oid="q5y0akc"
            >
              {isCancelLoading ? (
                <>
                  <Icons.spinner
                    className="mr-2 h-4 w-4 animate-spin"
                    data-oid="tx71bdf"
                  />
                  Processing...
                </>
              ) : (
                <>
                  <Icons.x className="mr-2 h-4 w-4" data-oid="fp1d38z" />
                  Cancel Subscription
                </>
              )}
            </Button>
          )}
      </CardFooter>
    </Card>
  );
}
