"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/components/ui/use-toast";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { formatPrice, getPriceTierById, PriceTier, SubscriptionStatus } from "@/lib/stripe";

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
  email
}: SubscriptionManagementProps) {
  const [isPortalLoading, setIsPortalLoading] = useState(false);
  const [isCancelLoading, setIsCancelLoading] = useState(false);
  const router = useRouter();

  // Get price tier details if subscription exists
  const priceTier = subscription ? getPriceTierById(subscription.priceTierId) : undefined;

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
        description: error instanceof Error ? error.message : "Failed to access billing portal",
        variant: "destructive",
      });
    } finally {
      setIsPortalLoading(false);
    }
  };

  // Handle subscription cancellation
  const handleCancelSubscription = async () => {
    if (!subscription?.id) return;
    
    if (!confirm("Are you sure you want to cancel your subscription? You'll still have access until the end of your billing period.")) {
      return;
    }
    
    try {
      setIsCancelLoading(true);
      
      const response = await fetch(`/api/stripe/subscriptions/${subscription.id}/cancel`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to cancel subscription");
      }

      toast({
        title: "Subscription Canceled",
        description: "Your subscription has been canceled and will end on your current billing period.",
      });
      
      // Refresh the page to show updated subscription status
      router.refresh();
      
    } catch (error) {
      console.error("Cancellation error:", error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to cancel subscription",
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
      <Card>
        <CardHeader>
          <CardTitle>Subscription</CardTitle>
          <CardDescription>Loading your subscription details...</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center py-8">
          <Icons.spinner className="h-8 w-8 animate-spin text-muted-foreground" />
        </CardContent>
      </Card>
    );
  }

  // Render no subscription state
  if (!subscription) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Subscription</CardTitle>
          <CardDescription>You don't have an active subscription</CardDescription>
        </CardHeader>
        <CardContent>
          <Alert>
            <Icons.info className="h-4 w-4" />
            <AlertTitle>No subscription found</AlertTitle>
            <AlertDescription>
              Subscribe to a plan to access all TradeNavigatorPro features.
            </AlertDescription>
          </Alert>
        </CardContent>
        <CardFooter>
          <Button onClick={() => router.push("/pricing")}>View Plans</Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Subscription</CardTitle>
            <CardDescription>Manage your subscription and billing</CardDescription>
          </div>
          <Badge variant={getStatusBadgeVariant(subscription.status) as any}>
            {formatStatus(subscription.status)}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Plan details */}
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-muted-foreground">Plan</h3>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">{priceTier?.name || "Unknown Plan"}</p>
              <p className="text-sm text-muted-foreground">
                {priceTier ? `${formatPrice(priceTier.price, priceTier.currency)}/${priceTier.interval}` : ""}
              </p>
            </div>
            {subscription.cancelAtPeriodEnd && (
              <Badge variant="outline" className="bg-amber-100 text-amber-700 border-amber-200">
                Cancels on {formatDate(subscription.currentPeriodEnd)}
              </Badge>
            )}
          </div>
        </div>

        <Separator />

        {/* Product limits */}
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-muted-foreground">Product Limits</h3>
          <p className="font-medium">
            {subscription.productLimit === Infinity ? "Unlimited products" : `${subscription.productLimit.toLocaleString()} products`}
          </p>
        </div>

        <Separator />

        {/* Billing details */}
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-muted-foreground">Billing Details</h3>
          <div className="space-y-1">
            <div className="flex justify-between">
              <p className="text-sm">Current period ends</p>
              <p className="text-sm font-medium">{formatDate(subscription.currentPeriodEnd)}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-sm">Subscription started</p>
              <p className="text-sm font-medium">{formatDate(subscription.createdAt)}</p>
            </div>
            {subscription.paymentMethod?.card && (
              <div className="flex justify-between">
                <p className="text-sm">Payment method</p>
                <p className="text-sm font-medium">
                  {subscription.paymentMethod.card.brand.toUpperCase()} ending in {subscription.paymentMethod.card.last4}
                  {" • "}
                  Expires {subscription.paymentMethod.card.expiryMonth}/{subscription.paymentMethod.card.expiryYear}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Subscription management */}
        {subscription.status === "active" && !subscription.cancelAtPeriodEnd && (
          <>
            <Separator />
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-muted-foreground">Manage Subscription</h3>
              <p className="text-sm text-muted-foreground">
                You can manage your subscription, update payment methods, or view billing history through the customer portal.
              </p>
            </div>
          </>
        )}
      </CardContent>
      <CardFooter className="flex flex-col space-y-2 sm:flex-row sm:justify-between sm:space-x-2 sm:space-y-0">
        <Button
          variant="default"
          onClick={handleCustomerPortal}
          disabled={isPortalLoading}
          className="w-full sm:w-auto"
        >
          {isPortalLoading ? (
            <>
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              Loading...
            </>
          ) : (
            <>
              <Icons.creditCard className="mr-2 h-4 w-4" />
              Billing Portal
            </>
          )}
        </Button>
        
        {subscription.status === "active" && !subscription.cancelAtPeriodEnd && (
          <Button
            variant="outline"
            onClick={handleCancelSubscription}
            disabled={isCancelLoading}
            className="w-full sm:w-auto"
          >
            {isCancelLoading ? (
              <>
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <Icons.x className="mr-2 h-4 w-4" />
                Cancel Subscription
              </>
            )}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
