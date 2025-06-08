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
      <Card data-oid="a02bf9e">
        <CardHeader data-oid="cy088uv">
          <CardTitle data-oid="k8sqxl-">Subscription</CardTitle>
          <CardDescription data-oid="rj.8wpk">
            Loading your subscription details...
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center py-8" data-oid="_m3xatf">
          <Icons.spinner
            className="h-8 w-8 animate-spin text-muted-foreground"
            data-oid="rzxh1ks"
          />
        </CardContent>
      </Card>
    );
  }

  // Render no subscription state
  if (!subscription) {
    return (
      <Card data-oid="65cblpd">
        <CardHeader data-oid="hl8899v">
          <CardTitle data-oid="92zgrt_">Subscription</CardTitle>
          <CardDescription data-oid="655_t53">
            You don't have an active subscription
          </CardDescription>
        </CardHeader>
        <CardContent data-oid="ht_e._p">
          <Alert data-oid="2u26nc0">
            <Icons.info className="h-4 w-4" data-oid="843yac5" />
            <AlertTitle data-oid="g2m-51i">No subscription found</AlertTitle>
            <AlertDescription data-oid="jsz4l78">
              Subscribe to a plan to access all TradeNavigatorPro features.
            </AlertDescription>
          </Alert>
        </CardContent>
        <CardFooter data-oid="v2_f5at">
          <Button onClick={() => router.push("/pricing")} data-oid="jy:cznt">
            View Plans
          </Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card data-oid="3mk8u6o">
      <CardHeader data-oid="zzdq5pj">
        <div className="flex items-center justify-between" data-oid="5btuhvx">
          <div data-oid="8i6hvmv">
            <CardTitle data-oid="a3en.0c">Subscription</CardTitle>
            <CardDescription data-oid="6rogadb">
              Manage your subscription and billing
            </CardDescription>
          </div>
          <Badge
            variant={getStatusBadgeVariant(subscription.status) as any}
            data-oid="8ltg9l1"
          >
            {formatStatus(subscription.status)}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6" data-oid="kngohuj">
        {/* Plan details */}
        <div className="space-y-2" data-oid="nno.fl5">
          <h3
            className="text-sm font-medium text-muted-foreground"
            data-oid="bc3xam_"
          >
            Plan
          </h3>
          <div className="flex items-center justify-between" data-oid="6g5ook1">
            <div data-oid="2nip_3a">
              <p className="font-medium" data-oid="-txb76s">
                {priceTier?.name || "Unknown Plan"}
              </p>
              <p className="text-sm text-muted-foreground" data-oid="up-l.vb">
                {priceTier
                  ? `${formatPrice(priceTier.price, priceTier.currency)}/${priceTier.interval}`
                  : ""}
              </p>
            </div>
            {subscription.cancelAtPeriodEnd && (
              <Badge
                variant="outline"
                className="bg-amber-100 text-amber-700 border-amber-200"
                data-oid="1l.-pt9"
              >
                Cancels on {formatDate(subscription.currentPeriodEnd)}
              </Badge>
            )}
          </div>
        </div>

        <Separator data-oid="95ub8tg" />

        {/* Product limits */}
        <div className="space-y-2" data-oid="w9sol8x">
          <h3
            className="text-sm font-medium text-muted-foreground"
            data-oid="_ydoiir"
          >
            Product Limits
          </h3>
          <p className="font-medium" data-oid="t0hdi1d">
            {subscription.productLimit === Infinity
              ? "Unlimited products"
              : `${subscription.productLimit.toLocaleString()} products`}
          </p>
        </div>

        <Separator data-oid="hx8c6tw" />

        {/* Billing details */}
        <div className="space-y-2" data-oid="m.bqkzt">
          <h3
            className="text-sm font-medium text-muted-foreground"
            data-oid=".ok19g."
          >
            Billing Details
          </h3>
          <div className="space-y-1" data-oid="rh3gy14">
            <div className="flex justify-between" data-oid="mhgjwtx">
              <p className="text-sm" data-oid="ka21x2-">
                Current period ends
              </p>
              <p className="text-sm font-medium" data-oid="spm9.zv">
                {formatDate(subscription.currentPeriodEnd)}
              </p>
            </div>
            <div className="flex justify-between" data-oid="5_20ol3">
              <p className="text-sm" data-oid="8op3un-">
                Subscription started
              </p>
              <p className="text-sm font-medium" data-oid="ek4-::g">
                {formatDate(subscription.createdAt)}
              </p>
            </div>
            {subscription.paymentMethod?.card && (
              <div className="flex justify-between" data-oid="12sl27e">
                <p className="text-sm" data-oid="qi1hk9d">
                  Payment method
                </p>
                <p className="text-sm font-medium" data-oid="zvgrh2b">
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
              <Separator data-oid="ur:guch" />
              <div className="space-y-2" data-oid="x7k_fy:">
                <h3
                  className="text-sm font-medium text-muted-foreground"
                  data-oid="jx065av"
                >
                  Manage Subscription
                </h3>
                <p className="text-sm text-muted-foreground" data-oid="r4q0odj">
                  You can manage your subscription, update payment methods, or
                  view billing history through the customer portal.
                </p>
              </div>
            </>
          )}
      </CardContent>
      <CardFooter
        className="flex flex-col space-y-2 sm:flex-row sm:justify-between sm:space-x-2 sm:space-y-0"
        data-oid="j0eq6kg"
      >
        <Button
          variant="default"
          onClick={handleCustomerPortal}
          disabled={isPortalLoading}
          className="w-full sm:w-auto"
          data-oid="y.c:5fw"
        >
          {isPortalLoading ? (
            <>
              <Icons.spinner
                className="mr-2 h-4 w-4 animate-spin"
                data-oid="2xeo6b_"
              />
              Loading...
            </>
          ) : (
            <>
              <Icons.creditCard className="mr-2 h-4 w-4" data-oid="qthuwmy" />
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
              data-oid="8h51t9k"
            >
              {isCancelLoading ? (
                <>
                  <Icons.spinner
                    className="mr-2 h-4 w-4 animate-spin"
                    data-oid="k7tw5d0"
                  />
                  Processing...
                </>
              ) : (
                <>
                  <Icons.x className="mr-2 h-4 w-4" data-oid="ckkk7x5" />
                  Cancel Subscription
                </>
              )}
            </Button>
          )}
      </CardFooter>
    </Card>
  );
}
