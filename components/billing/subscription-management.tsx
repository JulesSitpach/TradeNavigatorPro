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
      <Card data-oid="uqm9rl_">
        <CardHeader data-oid="ksk42i4">
          <CardTitle data-oid="zlunyx8">Subscription</CardTitle>
          <CardDescription data-oid="._2avfm">
            Loading your subscription details...
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center py-8" data-oid="fe21518">
          <Icons.spinner
            className="h-8 w-8 animate-spin text-muted-foreground"
            data-oid="j-.hg6j"
          />
        </CardContent>
      </Card>
    );
  }

  // Render no subscription state
  if (!subscription) {
    return (
      <Card data-oid="kgb35p:">
        <CardHeader data-oid="_haz6ov">
          <CardTitle data-oid="o83nlf9">Subscription</CardTitle>
          <CardDescription data-oid="1wr3sm8">
            You don't have an active subscription
          </CardDescription>
        </CardHeader>
        <CardContent data-oid="r_0ivhc">
          <Alert data-oid="bodvxan">
            <Icons.info className="h-4 w-4" data-oid="np4eow2" />
            <AlertTitle data-oid="4h0ucxj">No subscription found</AlertTitle>
            <AlertDescription data-oid="_1v:tqf">
              Subscribe to a plan to access all TradeNavigatorPro features.
            </AlertDescription>
          </Alert>
        </CardContent>
        <CardFooter data-oid="v:h815q">
          <Button onClick={() => router.push("/pricing")} data-oid="9my-.4x">
            View Plans
          </Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card data-oid="e7i45kx">
      <CardHeader data-oid="kqxf-3e">
        <div className="flex items-center justify-between" data-oid="f_-ak4.">
          <div data-oid=":scoj2j">
            <CardTitle data-oid="fc5h7mc">Subscription</CardTitle>
            <CardDescription data-oid="yq8_nbo">
              Manage your subscription and billing
            </CardDescription>
          </div>
          <Badge
            variant={getStatusBadgeVariant(subscription.status) as any}
            data-oid="1pi_5ao"
          >
            {formatStatus(subscription.status)}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6" data-oid="b6_5-np">
        {/* Plan details */}
        <div className="space-y-2" data-oid="ices49v">
          <h3
            className="text-sm font-medium text-muted-foreground"
            data-oid="vfygeyt"
          >
            Plan
          </h3>
          <div className="flex items-center justify-between" data-oid=".9to.0j">
            <div data-oid="yp7r1r9">
              <p className="font-medium" data-oid="h-75tk9">
                {priceTier?.name || "Unknown Plan"}
              </p>
              <p className="text-sm text-muted-foreground" data-oid="jy6m9qx">
                {priceTier
                  ? `${formatPrice(priceTier.price, priceTier.currency)}/${priceTier.interval}`
                  : ""}
              </p>
            </div>
            {subscription.cancelAtPeriodEnd && (
              <Badge
                variant="outline"
                className="bg-amber-100 text-amber-700 border-amber-200"
                data-oid="vxi6:a9"
              >
                Cancels on {formatDate(subscription.currentPeriodEnd)}
              </Badge>
            )}
          </div>
        </div>

        <Separator data-oid="nje7se-" />

        {/* Product limits */}
        <div className="space-y-2" data-oid="n:i8.oq">
          <h3
            className="text-sm font-medium text-muted-foreground"
            data-oid="2-fo8hh"
          >
            Product Limits
          </h3>
          <p className="font-medium" data-oid="jbz5icz">
            {subscription.productLimit === Infinity
              ? "Unlimited products"
              : `${subscription.productLimit.toLocaleString()} products`}
          </p>
        </div>

        <Separator data-oid="y07resa" />

        {/* Billing details */}
        <div className="space-y-2" data-oid="3.sy2pr">
          <h3
            className="text-sm font-medium text-muted-foreground"
            data-oid="_wpx:5w"
          >
            Billing Details
          </h3>
          <div className="space-y-1" data-oid="5axwvba">
            <div className="flex justify-between" data-oid="po95dqr">
              <p className="text-sm" data-oid="j4368hm">
                Current period ends
              </p>
              <p className="text-sm font-medium" data-oid="f5_7_2e">
                {formatDate(subscription.currentPeriodEnd)}
              </p>
            </div>
            <div className="flex justify-between" data-oid="a0ric9o">
              <p className="text-sm" data-oid="blr6yc_">
                Subscription started
              </p>
              <p className="text-sm font-medium" data-oid="_grtwaz">
                {formatDate(subscription.createdAt)}
              </p>
            </div>
            {subscription.paymentMethod?.card && (
              <div className="flex justify-between" data-oid="g8.bkww">
                <p className="text-sm" data-oid="uedu117">
                  Payment method
                </p>
                <p className="text-sm font-medium" data-oid="860dxrg">
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
              <Separator data-oid="8gdplg8" />
              <div className="space-y-2" data-oid="1uk_e65">
                <h3
                  className="text-sm font-medium text-muted-foreground"
                  data-oid="zri7fek"
                >
                  Manage Subscription
                </h3>
                <p className="text-sm text-muted-foreground" data-oid="2-xm6nm">
                  You can manage your subscription, update payment methods, or
                  view billing history through the customer portal.
                </p>
              </div>
            </>
          )}
      </CardContent>
      <CardFooter
        className="flex flex-col space-y-2 sm:flex-row sm:justify-between sm:space-x-2 sm:space-y-0"
        data-oid="-xw9w7q"
      >
        <Button
          variant="default"
          onClick={handleCustomerPortal}
          disabled={isPortalLoading}
          className="w-full sm:w-auto"
          data-oid="y866ezs"
        >
          {isPortalLoading ? (
            <>
              <Icons.spinner
                className="mr-2 h-4 w-4 animate-spin"
                data-oid="px0-xhk"
              />
              Loading...
            </>
          ) : (
            <>
              <Icons.creditCard className="mr-2 h-4 w-4" data-oid="6:e84jq" />
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
              data-oid="g8f7lmx"
            >
              {isCancelLoading ? (
                <>
                  <Icons.spinner
                    className="mr-2 h-4 w-4 animate-spin"
                    data-oid="_hxsgdq"
                  />
                  Processing...
                </>
              ) : (
                <>
                  <Icons.x className="mr-2 h-4 w-4" data-oid="zy.ige2" />
                  Cancel Subscription
                </>
              )}
            </Button>
          )}
      </CardFooter>
    </Card>
  );
}
