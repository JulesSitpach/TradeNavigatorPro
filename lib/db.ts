import { createClient } from '@supabase/supabase-js';
import { PostgrestError } from '@supabase/supabase-js';

// Define types for database models
export type User = {
  id: string;
  email: string;
  first_name?: string;
  last_name?: string;
  stripe_customer_id?: string;
  subscription_status?: string;
  product_limit: number;
  created_at: string | Date;
  updated_at: string | Date;
};

export type Subscription = {
  id: string;
  userId: string;
  status: string;
  priceId: string;
  priceTierId: string;
  customerId: string;
  currentPeriodEnd: Date;
  cancelAtPeriodEnd: boolean;
  productLimit: number;
  createdAt: Date;
  updatedAt: Date;
};

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || ''
);

// User model operations
const user = {
  async findUnique({ where }: { where: { id: string } }): Promise<User | null> {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', where.id)
      .single();
    
    if (error || !data) return null;
    return data as User;
  },
  
  async findFirst({ where }: { where: Record<string, any> }): Promise<User | null> {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .match(where)
      .limit(1)
      .single();
    
    if (error || !data) return null;
    return data as User;
  },
  
  async create({ data }: { data: Partial<User> }): Promise<User | null> {
    const { data: newUser, error } = await supabase
      .from('users')
      .insert([data])
      .select()
      .single();
    
    if (error || !newUser) return null;
    return newUser as User;
  },
  
  async update({ where, data }: { where: { id: string }, data: Partial<User> }): Promise<User | null> {
    const { data: updatedUser, error } = await supabase
      .from('users')
      .update(data)
      .eq('id', where.id)
      .select()
      .single();
    
    if (error || !updatedUser) return null;
    return updatedUser as User;
  },
  
  async delete({ where }: { where: { id: string } }): Promise<boolean> {
    const { error } = await supabase
      .from('users')
      .delete()
      .eq('id', where.id);
    
    return !error;
  }
};

// Subscription model operations
const subscription = {
  async findUnique({ where }: { where: { id: string } }): Promise<Subscription | null> {
    const { data, error } = await supabase
      .from('subscriptions')
      .select('*')
      .eq('id', where.id)
      .single();
    
    if (error || !data) return null;
    
    return {
      ...data,
      currentPeriodEnd: new Date(data.current_period_end),
      cancelAtPeriodEnd: data.cancel_at_period_end,
      productLimit: data.product_limit,
      createdAt: new Date(data.created_at),
      updatedAt: new Date(data.updated_at),
      userId: data.user_id
    } as Subscription;
  },
  
  async findFirst({ where }: { where: Record<string, any> }): Promise<Subscription | null> {
    // Convert camelCase to snake_case for Supabase
    const snakeCaseWhere: Record<string, any> = {};
    Object.entries(where).forEach(([key, value]) => {
      snakeCaseWhere[key.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`)] = value;
    });
    
    const { data, error } = await supabase
      .from('subscriptions')
      .select('*')
      .match(snakeCaseWhere)
      .limit(1)
      .single();
    
    if (error || !data) return null;
    
    return {
      ...data,
      currentPeriodEnd: new Date(data.current_period_end),
      cancelAtPeriodEnd: data.cancel_at_period_end,
      productLimit: data.product_limit,
      createdAt: new Date(data.created_at),
      updatedAt: new Date(data.updated_at),
      userId: data.user_id
    } as Subscription;
  },
  
  async create({ data }: { data: Omit<Subscription, 'id'> & { id?: string } }): Promise<Subscription | null> {
    // Convert camelCase to snake_case for Supabase
    const snakeCaseData: Record<string, any> = {};
    Object.entries(data).forEach(([key, value]) => {
      snakeCaseData[key.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`)] = value;
    });
    
    const { data: newSubscription, error } = await supabase
      .from('subscriptions')
      .insert([snakeCaseData])
      .select()
      .single();
    
    if (error || !newSubscription) return null;
    
    return {
      ...newSubscription,
      currentPeriodEnd: new Date(newSubscription.current_period_end),
      cancelAtPeriodEnd: newSubscription.cancel_at_period_end,
      productLimit: newSubscription.product_limit,
      createdAt: new Date(newSubscription.created_at),
      updatedAt: new Date(newSubscription.updated_at),
      userId: newSubscription.user_id
    } as Subscription;
  },
  
  async update({ where, data }: { where: { id: string }, data: Partial<Subscription> }): Promise<Subscription | null> {
    // Convert camelCase to snake_case for Supabase
    const snakeCaseData: Record<string, any> = {};
    Object.entries(data).forEach(([key, value]) => {
      snakeCaseData[key.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`)] = value;
    });
    
    const { data: updatedSubscription, error } = await supabase
      .from('subscriptions')
      .update(snakeCaseData)
      .eq('id', where.id)
      .select()
      .single();
    
    if (error || !updatedSubscription) return null;
    
    return {
      ...updatedSubscription,
      currentPeriodEnd: new Date(updatedSubscription.current_period_end),
      cancelAtPeriodEnd: updatedSubscription.cancel_at_period_end,
      productLimit: updatedSubscription.product_limit,
      createdAt: new Date(updatedSubscription.created_at),
      updatedAt: new Date(updatedSubscription.updated_at),
      userId: updatedSubscription.user_id
    } as Subscription;
  },
  
  async delete({ where }: { where: { id: string } }): Promise<boolean> {
    const { error } = await supabase
      .from('subscriptions')
      .delete()
      .eq('id', where.id);
    
    return !error;
  }
};

// Export database client
export const db = {
  user,
  subscription
};

// Helper function to execute raw SQL queries if needed
export async function executeRawQuery(query: string, params: any[] = []): Promise<any> {
  const { data, error } = await supabase.rpc('execute_sql', {
    query_text: query,
    query_params: params
  });
  
  if (error) throw error;
  return data;
}

export default db;
