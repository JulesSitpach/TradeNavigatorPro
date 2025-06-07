import { Stripe } from 'stripe';
import { getURL } from './utils';

/**
 * Price tier information based on TradeNavigatorPro pricing model
 */
export type PriceTier = {
  id: string;
  name: string;
  description: string;
  price: number;
  interval: 'month' | 'year';
  currency: string;
  features: string[];
  productLimit: number;
  stripeProductId: string;
  stripePriceId: string;
};

/**
 * Subscription status types
 */
export type SubscriptionStatus =
  | 'active'
  | 'canceled'
  | 'incomplete'
  | 'incomplete_expired'
  | 'past_due'
  | 'trialing'
  | 'unpaid';

/**
 * Customer portal settings
 */
export interface CustomerPortalSettings {
  subscription: boolean;
  billing_address: boolean;
  payment_method: boolean;
}

/**
 * TradeNavigatorPro pricing tiers
 */
export const PRICE_TIERS: PriceTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: '500 products, basic calculations, email support',
    price: 97,
    interval: 'month',
    currency: 'USD',
    features: [
      'Emergency Cost Calculator',
      'Basic tariff calculations',
      'Email support',
      'CSV import/export',
      'Up to 500 products'
    ],
    productLimit: 500,
    stripeProductId: 'prod_starter',
    stripePriceId: 'price_starter_monthly'
  },
  {
    id: 'professional',
    name: 'Professional',
    description: '2,500 products, all apps, priority alerts',
    price: 297,
    interval: 'month',
    currency: 'USD',
    features: [
      'All Starter features',
      'All 5 core applications',
      'Priority tariff alerts',
      'Supplier database access',
      'Up to 2,500 products'
    ],
    productLimit: 2500,
    stripeProductId: 'prod_professional',
    stripePriceId: 'price_professional_monthly'
  },
  {
    id: 'business',
    name: 'Business',
    description: 'Unlimited products, API access, phone support',
    price: 597,
    interval: 'month',
    currency: 'USD',
    features: [
      'All Professional features',
      'Unlimited products',
      'API access',
      'Phone support',
      'Custom integrations',
      'Dedicated account manager'
    ],
    productLimit: Infinity,
    stripeProductId: 'prod_business',
    stripePriceId: 'price_business_monthly'
  }
];

/**
 * Initialize Stripe with API key from environment variables
 */
export const stripe = new Stripe(
  process.env.STRIPE_SECRET_KEY || '',
  {
    apiVersion: '2023-10-16', // Use the latest stable API version
    appInfo: {
      name: 'TradeNavigatorPro',
      version: '0.1.0'
    }
  }
);

/**
 * Create a Stripe checkout session for subscription
 * @param customerId Stripe customer ID
 * @param priceId Stripe price ID
 * @param userId User ID in our system
 * @param email User email
 */
export async function createCheckoutSession({
  customerId,
  priceId,
  userId,
  email
}: {
  customerId?: string;
  priceId: string;
  userId: string;
  email: string;
}) {
  // Default return URL after checkout
  const baseUrl = getURL();

  // Customer creation parameters
  const customerParams: Stripe.CustomerCreateParams = {
    email,
    metadata: {
      userId
    }
  };

  // If we don't have a customer ID yet, create one
  if (!customerId) {
    const customer = await stripe.customers.create(customerParams);
    customerId = customer.id;
  }

  // Create checkout session
  const session = await stripe.checkout.sessions.create({
    customer: customerId,
    client_reference_id: userId,
    payment_method_types: ['card'],
    mode: 'subscription',
    line_items: [
      {
        price: priceId,
        quantity: 1
      }
    ],
    success_url: `${baseUrl}/settings/billing?success=true&session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${baseUrl}/settings/billing?canceled=true`,
    allow_promotion_codes: true,
    subscription_data: {
      metadata: {
        userId
      }
    },
    metadata: {
      userId
    }
  });

  return session;
}

/**
 * Create a Stripe customer portal session
 * @param customerId Stripe customer ID
 */
export async function createCustomerPortalSession(customerId: string) {
  const baseUrl = getURL();

  const portalSession = await stripe.billingPortal.sessions.create({
    customer: customerId,
    return_url: `${baseUrl}/settings/billing`
  });

  return portalSession;
}

/**
 * Get a customer by ID
 * @param customerId Stripe customer ID
 */
export async function getCustomer(customerId: string) {
  return await stripe.customers.retrieve(customerId);
}

/**
 * Get a customer by email
 * @param email Customer email
 */
export async function getCustomerByEmail(email: string) {
  const customers = await stripe.customers.list({
    email,
    limit: 1
  });

  return customers.data.length > 0 ? customers.data[0] : null;
}

/**
 * Get subscription details
 * @param subscriptionId Stripe subscription ID
 */
export async function getSubscription(subscriptionId: string) {
  return await stripe.subscriptions.retrieve(subscriptionId, {
    expand: ['default_payment_method', 'items.data.price.product']
  });
}

/**
 * Get all subscriptions for a customer
 * @param customerId Stripe customer ID
 */
export async function getCustomerSubscriptions(customerId: string) {
  return await stripe.subscriptions.list({
    customer: customerId,
    status: 'all',
    expand: ['data.default_payment_method', 'data.items.data.price.product']
  });
}

/**
 * Update a subscription
 * @param subscriptionId Stripe subscription ID
 * @param params Subscription update parameters
 */
export async function updateSubscription(
  subscriptionId: string,
  params: Stripe.SubscriptionUpdateParams
) {
  return await stripe.subscriptions.update(subscriptionId, params);
}

/**
 * Cancel a subscription
 * @param subscriptionId Stripe subscription ID
 */
export async function cancelSubscription(subscriptionId: string) {
  return await stripe.subscriptions.cancel(subscriptionId);
}

/**
 * Create a usage record for metered billing
 * @param subscriptionItemId Subscription item ID
 * @param quantity Usage quantity
 */
export async function createUsageRecord(
  subscriptionItemId: string,
  quantity: number
) {
  return await stripe.subscriptionItems.createUsageRecord(subscriptionItemId, {
    quantity,
    action: 'increment'
  });
}

/**
 * Verify Stripe webhook signature
 * @param body Raw request body
 * @param signature Stripe signature from headers
 */
export function verifyWebhookSignature(body: string, signature: string) {
  try {
    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET || ''
    );
    return event;
  } catch (error) {
    console.error('Webhook signature verification failed:', error);
    throw error;
  }
}

/**
 * Handle subscription created event
 * @param subscription Stripe subscription object
 */
export async function handleSubscriptionCreated(subscription: Stripe.Subscription) {
  // Extract customer and subscription details
  const customerId = subscription.customer as string;
  const subscriptionId = subscription.id;
  const priceId = subscription.items.data[0].price.id;
  const status = subscription.status;

  // Find the matching price tier
  const priceTier = PRICE_TIERS.find(tier => tier.stripePriceId === priceId);

  // Return structured data for database update
  return {
    customerId,
    subscriptionId,
    priceId,
    status,
    priceTier: priceTier?.id || null,
    productLimit: priceTier?.productLimit || 0,
    currentPeriodEnd: new Date(subscription.current_period_end * 1000),
    cancelAtPeriodEnd: subscription.cancel_at_period_end
  };
}

/**
 * Handle subscription updated event
 * @param subscription Stripe subscription object
 */
export async function handleSubscriptionUpdated(subscription: Stripe.Subscription) {
  // Similar to created handler but for updates
  return await handleSubscriptionCreated(subscription);
}

/**
 * Get price tier by Stripe price ID
 * @param stripePriceId Stripe price ID
 */
export function getPriceTierByPriceId(stripePriceId: string): PriceTier | undefined {
  return PRICE_TIERS.find(tier => tier.stripePriceId === stripePriceId);
}

/**
 * Get price tier by ID
 * @param tierId Price tier ID
 */
export function getPriceTierById(tierId: string): PriceTier | undefined {
  return PRICE_TIERS.find(tier => tier.id === tierId);
}

/**
 * Format price for display
 * @param price Price amount
 * @param currency Currency code
 */
export function formatPrice(price: number, currency: string = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0
  }).format(price);
}
