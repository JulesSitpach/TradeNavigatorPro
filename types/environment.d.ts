declare namespace NodeJS {
  interface ProcessEnv {
    // Next.js environment variables
    NODE_ENV: 'development' | 'production' | 'test';
    NEXT_PUBLIC_APP_URL: string;
    
    // Supabase environment variables
    NEXT_PUBLIC_SUPABASE_URL: string;
    NEXT_PUBLIC_SUPABASE_ANON_KEY: string;
    SUPABASE_SERVICE_ROLE_KEY: string;
    
    // Stripe environment variables
    STRIPE_SECRET_KEY: string;
    STRIPE_WEBHOOK_SECRET: string;
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: string;
    
    // AI service environment variables
    OPENROUTER_API_KEY: string;
    
    // Data sources environment variables
    USTR_API_KEY: string;
    HTS_DATABASE_URL: string;
    
    // Email service environment variables (for notifications)
    EMAIL_SERVER_HOST: string;
    EMAIL_SERVER_PORT: string;
    EMAIL_SERVER_USER: string;
    EMAIL_SERVER_PASSWORD: string;
    EMAIL_FROM: string;
    
    // Authentication environment variables
    NEXTAUTH_URL: string;
    NEXTAUTH_SECRET: string;
    
    // Analytics and monitoring (optional)
    NEXT_PUBLIC_ANALYTICS_ID: string;
    SENTRY_DSN: string;
  }
}
