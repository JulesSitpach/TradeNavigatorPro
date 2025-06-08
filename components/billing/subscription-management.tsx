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
      <Card data-oid="cwlywaa">
        <CardHeader data-oid="bkoda7l">
          <CardTitle data-oid="yl-wan5">Subscription</CardTitle>
          <CardDescription data-oid="60zg:wd">
            Loading your subscription details...
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center py-8" data-oid="fa3:_b4">
          <Icons.spinner
            className="h-8 w-8 animate-spin text-muted-foreground"
            data-oid="_jdz7kc"
          />
        </CardContent>
      </Card>
    );
  }

  // Render no subscription state
  if (!subscription) {
    return (
      <Card data-oid="-0x6_os">
        <CardHeader data-oid="p.mdtwg">
          <CardTitle data-oid="bn87rle">Subscription</CardTitle>
          <CardDescription data-oid="-hf5mw8">
            You don't have an active subscription
          </CardDescription>
        </CardHeader>
        <CardContent data-oid="xa-px5b">
          <Alert data-oid="e09qa3-">
            <Icons.info className="h-4 w-4" data-oid="q7j8sr7" />
            <AlertTitle data-oid="ju:sulj">No subscription found</AlertTitle>
            <AlertDescription data-oid="rssirs_">
              Subscribe to a plan to access all TradeNavigatorPro features.
            </AlertDescription>
          </Alert>
        </CardContent>
        <CardFooter data-oid="oo.gau8">
          <Button onClick={() => router.push("/pricing")} data-oid="0:tqk-v">
            View Plans
          </Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card data-oid="e0x:zdw">
      <CardHeader data-oid="qhbgd7u">
        <div className="flex items-center justify-between" data-oid="zw26svw">
          <div data-oid="l:3yrtd">
            <CardTitle data-oid=":.rx9wc">Subscription</CardTitle>
            <CardDescription data-oid="w_6klo2">
              Manage your subscription and billing
            </CardDescription>
          </div>
          <Badge
            variant={getStatusBadgeVariant(subscription.status) as any}
            data-oid="1:z_nr_"
          >
            {formatStatus(subscription.status)}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6" data-oid="nkvixq_">
        {/* Plan details */}
        <div className="space-y-2" data-oid="2r7f3ri">
          <h3
            className="text-sm font-medium text-muted-foreground"
            data-oid="3d4vpn:"
          >
            Plan
          </h3>
          <div className="flex items-center justify-between" data-oid="cfo4d42">
            <div data-oid="_kcya00">
              <p className="font-medium" data-oid="v5ocwfo">
                {priceTier?.name || "Unknown Plan"}
              </p>
              <p className="text-sm text-muted-foreground" data-oid=":z7q78z">
                {priceTier
                  ? `${formatPrice(priceTier.price, priceTier.currency)}/${priceTier.interval}`
                  : ""}
              </p>
            </div>
            {subscription.cancelAtPeriodEnd && (
              <Badge
                variant="outline"
                className="bg-amber-100 text-amber-700 border-amber-200"
                data-oid="gr4uhot"
              >
                Cancels on {formatDate(subscription.currentPeriodEnd)}
              </Badge>
            )}
          </div>
        </div>

        <Separator data-oid=":4c.wg:" />

        {/* Product limits */}
        <div className="space-y-2" data-oid="b-9o590">
          <h3
            className="text-sm font-medium text-muted-foreground"
            data-oid="5461p9n"
          >
            Product Limits
          </h3>
          <p className="font-medium" data-oid="az_b3rj">
            {subscription.productLimit === Infinity
              ? "Unlimited products"
              : `${subscription.productLimit.toLocaleString()} products`}
          </p>
        </div>

        <Separator data-oid="x0w:usa" />

        {/* Billing details */}
        <div className="space-y-2" data-oid="ra_e-wb">
          <h3
            className="text-sm font-medium text-muted-foreground"
            data-oid="sp3b5k_"
          >
            Billing Details
          </h3>
          <div className="space-y-1" data-oid="pupolrm">
            <div className="flex justify-between" data-oid="f.a8.lu">
              <p className="text-sm" data-oid="f89vq0d">
                Current period ends
              </p>
              <p className="text-sm font-medium" data-oid="o:lfeuw">
                {formatDate(subscription.currentPeriodEnd)}
              </p>
            </div>
            <div className="flex justify-between" data-oid="gt7jwva">
              <p className="text-sm" data-oid="wk_0oh7">
                Subscription started
              </p>
              <p className="text-sm font-medium" data-oid="-uz1:qi">
                {formatDate(subscription.createdAt)}
              </p>
            </div>
            {subscription.paymentMethod?.card && (
              <div className="flex justify-between" data-oid="nfcm:j7">
                <p className="text-sm" data-oid="7s4xc10">
                  Payment method
                </p>
                <p className="text-sm font-medium" data-oid="cf4jhna">
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
              <Separator data-oid="qr_643h" />
              <div className="space-y-2" data-oid="zp.b9ls">
                <h3
                  className="text-sm font-medium text-muted-foreground"
                  data-oid="klqtu8h"
                >
                  Manage Subscription
                </h3>
                <p className="text-sm text-muted-foreground" data-oid="vhsbms5">
                  You can manage your subscription, update payment methods, or
                  view billing history through the customer portal.
                </p>
              </div>
            </>
          )}
      </CardContent>
      <CardFooter
        className="flex flex-col space-y-2 sm:flex-row sm:justify-between sm:space-x-2 sm:space-y-0"
        data-oid="o.m1t.f"
      >
        <Button
          variant="default"
          onClick={handleCustomerPortal}
          disabled={isPortalLoading}
          className="w-full sm:w-auto"
          data-oid="9je7h3z"
        >
          {isPortalLoading ? (
            <>
              <Icons.spinner
                className="mr-2 h-4 w-4 animate-spin"
                data-oid="zbcdl57"
              />
              Loading...
            </>
          ) : (
            <>
              <Icons.creditCard className="mr-2 h-4 w-4" data-oid="x2g7f:2" />
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
              data-oid="6bk350g"
            >
              {isCancelLoading ? (
                <>
                  <Icons.spinner
                    className="mr-2 h-4 w-4 animate-spin"
                    data-oid="i_s913v"
                  />
                  Processing...
                </>
              ) : (
                <>
                  <Icons.x className="mr-2 h-4 w-4" data-oid="os.hoxx" />
                  Cancel Subscription
                </>
              )}
            </Button>
          )}
      </CardFooter>
    </Card>
  );
}
