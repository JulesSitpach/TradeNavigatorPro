import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getDictionary, i18n, LocaleKey } from '@/lib/i18n/config';
import { auth } from '@/lib/auth';
import { db } from '@/lib/db';
import { SubscriptionManagement } from '@/components/billing/subscription-management';
import { PricingCard } from '@/components/billing/pricing-card';
import { PRICE_TIERS } from '@/lib/stripe';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Icons } from '@/components/ui/icons';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

// Generate metadata for SEO
export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string }
}): Promise<Metadata> {
  if (!i18n.locales.includes(locale as LocaleKey)) {
    return {};
  }

  const dictionary = await getDictionary(locale as LocaleKey);
  
  return {
    title: `${dictionary.settings.billing} | ${dictionary.common.appName}`,
    description: 'Manage your subscription and billing settings',
  };
}

// Billing settings page component
export default async function BillingSettingsPage({
  params: { locale },
  searchParams
}: {
  params: { locale: string },
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  // Validate locale or return 404
  if (!i18n.locales.includes(locale as LocaleKey)) {
    notFound();
  }

  // Get dictionary for the current locale
  const dictionary = await getDictionary(locale as LocaleKey);
  const t = dictionary.settings;

  // Get authenticated user session
  const session = await auth();
  if (!session || !session.user) {
    // Redirect to login if not authenticated
    return notFound();
  }

  const userId = session.user.id;
  const userEmail = session.user.email || '';

  // Get user subscription data
  const user = await db.user.findUnique({
    where: { id: userId },
    include: {
      subscription: {
        orderBy: { createdAt: 'desc' },
        take: 1
      }
    }
  });

  const subscription = user?.subscription?.[0] || null;
  const stripeCustomerId = user?.stripeCustomerId || undefined;

  // Check for success/cancel messages from Stripe checkout
  const success = searchParams.success === 'true';
  const canceled = searchParams.canceled === 'true';
  const sessionId = searchParams.session_id as string | undefined;

  // Get current subscription tier ID
  const currentTierId = subscription?.priceTierId || null;

  return (
    <div className="flex flex-col gap-6 p-6 md:gap-8">
      {/* Page header */}
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">{t.billing}</h1>
        <p className="text-muted-foreground">{dictionary.common.welcome} to your billing settings</p>
      </div>

      {/* Success/Cancel messages */}
      {success && (
        <Alert variant="default" className="bg-green-50 text-green-800 border-green-200">
          <Icons.check className="h-4 w-4" />
          <AlertTitle>Payment successful</AlertTitle>
          <AlertDescription>
            Thank you for your subscription. Your plan is now active.
          </AlertDescription>
        </Alert>
      )}

      {canceled && (
        <Alert variant="default" className="bg-amber-50 text-amber-800 border-amber-200">
          <Icons.info className="h-4 w-4" />
          <AlertTitle>Checkout canceled</AlertTitle>
          <AlertDescription>
            Your checkout session was canceled. You can try again when you're ready.
          </AlertDescription>
        </Alert>
      )}

      {/* Current subscription */}
      <SubscriptionManagement 
        subscription={subscription} 
        userId={userId}
        email={userEmail}
      />

      {/* Pricing plans */}
      <Card>
        <CardHeader>
          <CardTitle>Plans</CardTitle>
          <CardDescription>Choose the plan that works best for your business</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="monthly" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="monthly">Monthly Billing</TabsTrigger>
              <TabsTrigger value="yearly">Yearly Billing (Save 20%)</TabsTrigger>
            </TabsList>
            <TabsContent value="monthly" className="w-full">
              <div className="grid gap-6 md:grid-cols-3">
                {PRICE_TIERS.filter(tier => tier.interval === 'month').map((tier) => (
                  <PricingCard
                    key={tier.id}
                    tier={tier}
                    isPopular={tier.id === 'professional'}
                    isCurrentPlan={tier.id === currentTierId}
                    userId={userId}
                    email={userEmail}
                    customerId={stripeCustomerId}
                  />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="yearly" className="w-full">
              <div className="grid gap-6 md:grid-cols-3">
                {PRICE_TIERS.filter(tier => tier.interval === 'year').map((tier) => (
                  <PricingCard
                    key={tier.id}
                    tier={tier}
                    isPopular={tier.id === 'professional'}
                    isCurrentPlan={tier.id === currentTierId}
                    userId={userId}
                    email={userEmail}
                    customerId={stripeCustomerId}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Billing FAQ */}
      <Card>
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-medium">How does billing work?</h3>
            <p className="text-sm text-muted-foreground mt-1">
              You'll be charged at the beginning of each billing period. You can change or cancel your plan at any time.
            </p>
          </div>
          <Separator />
          <div>
            <h3 className="font-medium">Can I change plans?</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing period.
            </p>
          </div>
          <Separator />
          <div>
            <h3 className="font-medium">What happens when I cancel?</h3>
            <p className="text-sm text-muted-foreground mt-1">
              You'll continue to have access to your current plan until the end of your billing period. After that, you'll be downgraded to the free tier.
            </p>
          </div>
          <Separator />
          <div>
            <h3 className="font-medium">Do you offer refunds?</h3>
            <p className="text-sm text-muted-foreground mt-1">
              We don't automatically refund payments, but please contact our support team if you have special circumstances.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
