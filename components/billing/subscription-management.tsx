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
      <Card data-oid="thl5den">
        <CardHeader data-oid="k:1uoqj">
          <CardTitle data-oid="z5de-:q">Subscription</CardTitle>
          <CardDescription data-oid="y7zebak">
            Loading your subscription details...
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center py-8" data-oid="l9z.ws-">
          <Icons.spinner
            className="h-8 w-8 animate-spin text-muted-foreground"
            data-oid="s1r2.77"
          />
        </CardContent>
      </Card>
    );
  }

  // Render no subscription state
  if (!subscription) {
    return (
      <Card data-oid="eo3yjdz">
        <CardHeader data-oid="10_ygv1">
          <CardTitle data-oid="3aunrvt">Subscription</CardTitle>
          <CardDescription data-oid="a-u:eab">
            You don't have an active subscription
          </CardDescription>
        </CardHeader>
        <CardContent data-oid="48p-v8g">
          <Alert data-oid="ocw-xrh">
            <Icons.info className="h-4 w-4" data-oid="tddqetr" />
            <AlertTitle data-oid="_wtq9_.">No subscription found</AlertTitle>
            <AlertDescription data-oid="cjhixu.">
              Subscribe to a plan to access all TradeNavigatorPro features.
            </AlertDescription>
          </Alert>
        </CardContent>
        <CardFooter data-oid="rihwt_g">
          <Button onClick={() => router.push("/pricing")} data-oid="t7j17ch">
            View Plans
          </Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card data-oid="sfg7x0g">
      <CardHeader data-oid="h-74feh">
        <div className="flex items-center justify-between" data-oid="8m8yk-k">
          <div data-oid="6u3eaaz">
            <CardTitle data-oid="2fs51uv">Subscription</CardTitle>
            <CardDescription data-oid="m-d.eqy">
              Manage your subscription and billing
            </CardDescription>
          </div>
          <Badge
            variant={getStatusBadgeVariant(subscription.status) as any}
            data-oid="1h1xjc1"
          >
            {formatStatus(subscription.status)}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6" data-oid="se.nrq8">
        {/* Plan details */}
        <div className="space-y-2" data-oid=":9e.b12">
          <h3
            className="text-sm font-medium text-muted-foreground"
            data-oid="8phnaz:"
          >
            Plan
          </h3>
          <div className="flex items-center justify-between" data-oid="kxb4_3g">
            <div data-oid="kvq0wd1">
              <p className="font-medium" data-oid="v2-osew">
                {priceTier?.name || "Unknown Plan"}
              </p>
              <p className="text-sm text-muted-foreground" data-oid="mygo:u8">
                {priceTier
                  ? `${formatPrice(priceTier.price, priceTier.currency)}/${priceTier.interval}`
                  : ""}
              </p>
            </div>
            {subscription.cancelAtPeriodEnd && (
              <Badge
                variant="outline"
                className="bg-amber-100 text-amber-700 border-amber-200"
                data-oid="..wzny9"
              >
                Cancels on {formatDate(subscription.currentPeriodEnd)}
              </Badge>
            )}
          </div>
        </div>

        <Separator data-oid="tpk:.b7" />

        {/* Product limits */}
        <div className="space-y-2" data-oid="v9ezr0b">
          <h3
            className="text-sm font-medium text-muted-foreground"
            data-oid="l.-exlq"
          >
            Product Limits
          </h3>
          <p className="font-medium" data-oid="7veu_fx">
            {subscription.productLimit === Infinity
              ? "Unlimited products"
              : `${subscription.productLimit.toLocaleString()} products`}
          </p>
        </div>

        <Separator data-oid=":eps5qy" />

        {/* Billing details */}
        <div className="space-y-2" data-oid="wa19h6h">
          <h3
            className="text-sm font-medium text-muted-foreground"
            data-oid=":ouru7t"
          >
            Billing Details
          </h3>
          <div className="space-y-1" data-oid="mua_c41">
            <div className="flex justify-between" data-oid="9uv.4w0">
              <p className="text-sm" data-oid="7-k6i04">
                Current period ends
              </p>
              <p className="text-sm font-medium" data-oid="tvkndj0">
                {formatDate(subscription.currentPeriodEnd)}
              </p>
            </div>
            <div className="flex justify-between" data-oid="umn.o6w">
              <p className="text-sm" data-oid="sobuydl">
                Subscription started
              </p>
              <p className="text-sm font-medium" data-oid="-e5nl:j">
                {formatDate(subscription.createdAt)}
              </p>
            </div>
            {subscription.paymentMethod?.card && (
              <div className="flex justify-between" data-oid="4k29fiy">
                <p className="text-sm" data-oid="yesgt3y">
                  Payment method
                </p>
                <p className="text-sm font-medium" data-oid=".ocf8z4">
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
              <Separator data-oid="p-544wo" />
              <div className="space-y-2" data-oid="dzugq:1">
                <h3
                  className="text-sm font-medium text-muted-foreground"
                  data-oid="4lps.nx"
                >
                  Manage Subscription
                </h3>
                <p className="text-sm text-muted-foreground" data-oid="5p2tr0i">
                  You can manage your subscription, update payment methods, or
                  view billing history through the customer portal.
                </p>
              </div>
            </>
          )}
      </CardContent>
      <CardFooter
        className="flex flex-col space-y-2 sm:flex-row sm:justify-between sm:space-x-2 sm:space-y-0"
        data-oid="200nbhz"
      >
        <Button
          variant="default"
          onClick={handleCustomerPortal}
          disabled={isPortalLoading}
          className="w-full sm:w-auto"
          data-oid="w1ckjud"
        >
          {isPortalLoading ? (
            <>
              <Icons.spinner
                className="mr-2 h-4 w-4 animate-spin"
                data-oid="_:pwbrx"
              />
              Loading...
            </>
          ) : (
            <>
              <Icons.creditCard className="mr-2 h-4 w-4" data-oid="wltev3_" />
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
              data-oid="gnugrlw"
            >
              {isCancelLoading ? (
                <>
                  <Icons.spinner
                    className="mr-2 h-4 w-4 animate-spin"
                    data-oid="kkg6pt4"
                  />
                  Processing...
                </>
              ) : (
                <>
                  <Icons.x className="mr-2 h-4 w-4" data-oid="3b3k7_:" />
                  Cancel Subscription
                </>
              )}
            </Button>
          )}
      </CardFooter>
    </Card>
  );
}
