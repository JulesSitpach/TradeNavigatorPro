# TradeNavigatorPro
US Trade Impact SaaS for SMBs
# TradeNavigatorPro - US Trade Impact SaaS

A Next.js 14 SaaS platform helping SMBs navigate US trade policy changes and tariff impacts with 5 essential tools.

## 🎯 Problem We Solve

US trade policies create massive cost uncertainty for small businesses. With tariffs changing rapidly and supply chains disrupted, SMBs need immediate, actionable intelligence to:
- Calculate real tariff costs on their products
- Find alternative suppliers and markets
- Optimize pricing strategies
- Stay ahead of policy changes

**Target Market**: 40,000+ US SMBs affected by trade policies (importers, exporters, suppliers to US market)

## 🚀 5 Core Applications

### 1. Emergency Cost Calculator
**Problem**: "My supplier just said my costs are going up 25% - is that right?"
- Upload purchase orders → instant landed cost calculations
- Before/after comparisons with visual impact charts
- Export-ready reports for financial planning

### 2. Supply Chain Pivot Planner
**Problem**: "Where else can I source from without tariffs?"
- AI-powered alternative supplier suggestions
- Country-specific tariff rate comparisons
- Logistics cost and lead time analysis
- Verified supplier contact database

### 3. Pricing Strategy Optimizer
**Problem**: "How do I stay profitable without losing customers?"
- 3-scenario modeling: absorb, pass-through, or split costs
- Break-even analysis and margin protection
- Customer communication templates
- Competitive pricing benchmarks

### 4. Tariff Timeline Tracker
**Problem**: "I never know what's coming next"
- USTR announcement monitoring for your products
- 30/60/90 day advance warnings
- Historical pattern analysis: "Last time this happened..."
- Action-specific alerts with recommended steps

### 5. Trade Route Optimizer
**Problem**: "There has to be a smarter way to ship this"
- Multi-country routing suggestions
- USMCA benefit maximization
- Duty drawback opportunity identification
- Automated customs documentation

## 🏗️ Technical Architecture

### Stack
- **Frontend**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Backend**: Next.js API routes, Supabase PostgreSQL
- **AI**: OpenRouter API for classification and recommendations
- **Data**: Real-time USTR feeds, HTS code database, supplier networks
- **Deployment**: Vercel (frontend), Supabase (database), Upstash (caching)

### Project Structure
```
TradeNavigatorPro/
├── app/
│   ├── (auth)/                         # Authentication routes
│   │   ├── login/
│   │   ├── register/
│   │   └── layout.tsx
│   ├── (dashboard)/                    # Protected app routes
│   │   └── [locale]/
│   │       ├── layout.tsx             # Dashboard shell
│   │       ├── page.tsx               # Dashboard home
│   │       ├── apps/                  # Feature apps
│   │       │   ├── cost-calculator/   
│   │       │   ├── supply-pivot/      
│   │       │   ├── pricing-optimizer/ 
│   │       │   ├── tariff-tracker/    
│   │       │   └── route-optimizer/   
│   │       ├── settings/              # User settings
│   │       └── reports/               # Generated reports
│   ├── (marketing)/                   # Public marketing site
│   │   └── [locale]/
│   │       ├── layout.tsx
│   │       ├── page.tsx               # Landing page
│   │       ├── pricing/
│   │       ├── about/
│   │       └── demo/
│   ├── api/                           # API endpoints
│   │   ├── auth/                      # Authentication
│   │   ├── apps/                      # App-specific APIs
│   │   │   ├── cost-calculator/
│   │   │   ├── supply-pivot/
│   │   │   ├── pricing-optimizer/
│   │   │   ├── tariff-tracker/
│   │   │   └── route-optimizer/
│   │   ├── data/                      # Data services
│   │   │   ├── tariffs/              # USTR data integration
│   │   │   ├── suppliers/            # Supplier database
│   │   │   └── products/             # Product classification
│   │   ├── ai/                        # AI services
│   │   │   ├── classify/             # HS code classification
│   │   │   ├── recommend/            # Supplier recommendations
│   │   │   └── analyze/              # Impact analysis
│   │   ├── webhooks/                  # External integrations
│   │   ├── cron/                      # Background jobs
│   │   └── health/                    # Health checks
│   ├── globals.css
│   ├── layout.tsx                     # Root layout
│   └── not-found.tsx
├── components/                        # React components
│   ├── apps/                         # App-specific components
│   │   ├── cost-calculator/
│   │   ├── supply-pivot/
│   │   ├── pricing-optimizer/
│   │   ├── tariff-tracker/
│   │   └── route-optimizer/
│   ├── charts/                       # Data visualization
│   │   ├── impact-chart.tsx
│   │   ├── cost-comparison.tsx
│   │   └── trend-analysis.tsx
│   ├── forms/                        # Form components
│   │   ├── file-upload.tsx
│   │   ├── product-input.tsx
│   │   └── supplier-search.tsx
│   ├── layout/                       # Layout components
│   │   ├── dashboard-nav.tsx
│   │   ├── sidebar.tsx
│   │   └── header.tsx
│   └── ui/                           # Shared UI components
│       ├── button.tsx
│       ├── card.tsx
│       ├── dialog.tsx
│       └── table.tsx
├── lib/                              # Utilities and configurations
│   ├── auth/                         # Authentication logic
│   │   ├── config.ts
│   │   └── middleware.ts
│   ├── data/                         # Data processing
│   │   ├── tariff-calculator.ts
│   │   ├── supplier-matcher.ts
│   │   └── report-generator.ts
│   ├── ai/                           # AI integrations
│   │   ├── openrouter.ts
│   │   ├── classification.ts
│   │   └── recommendations.ts
│   ├── integrations/                 # Third-party APIs
│   │   ├── ustr.ts
│   │   ├── hts-codes.ts
│   │   └── suppliers-api.ts
│   ├── database/                     # Database utilities
│   │   ├── supabase.ts
│   │   ├── queries.ts
│   │   └── types.ts
│   ├── utils/                        # General utilities
│   │   ├── formatters.ts
│   │   ├── validators.ts
│   │   └── constants.ts
│   └── i18n/                         # Internationalization
│       ├── config.ts
│       ├── en.json
│       └── es.json
├── types/                            # TypeScript definitions
│   ├── api.ts
│   ├── database.ts
│   ├── apps.ts
│   └── global.ts
├── scripts/                          # Build and maintenance scripts
│   ├── dev/                          # Development helpers
│   │   ├── seed-database.ts
│   │   └── reset-data.ts
│   ├── data/                         # Data management
│   │   ├── sync-tariffs.ts
│   │   ├── update-suppliers.ts
│   │   └── backup-data.ts
│   └── deploy/                       # Deployment scripts
│       ├── build-check.ts
│       └── health-check.ts
├── docs/                             # Documentation
│   ├── api/                          # API documentation
│   ├── deployment/                   # Deployment guides
│   └── development/                  # Development setup
├── tests/                            # Test files
│   ├── __mocks__/
│   ├── components/
│   ├── api/
│   └── utils/
└── public/                           # Static assets
    ├── icons/
    ├── images/
    └── docs/
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- Supabase account
- OpenRouter API key (for AI features)
- USTR data access (free public API)

### Quick Setup
```bash
# Clone and install
git clone https://github.com/yourusername/TradeNavigatorPro.git
cd TradeNavigatorPro
npm install

# Environment setup
cp .env.example .env.local
# Add your API keys to .env.local

# Database setup
npm run db:setup
npm run db:seed

# Start development
npm run dev
```

### Environment Variables
```bash
# Database
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_ROLE_KEY=your_service_key

# AI Services
OPENROUTER_API_KEY=your_openrouter_key

# Data Sources
USTR_API_KEY=public_access
HTS_DATABASE_URL=https://hts.usitc.gov/api

# Deployment
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## 📊 MVP Development Plan

### Phase 1: Core Foundation (Weeks 1-4)
- [ ] Authentication system (Supabase Auth)
- [ ] Basic dashboard layout
- [ ] Emergency Cost Calculator (MVP version)
- [ ] CSV upload and processing
- [ ] Basic tariff calculation engine

### Phase 2: Essential Apps (Weeks 5-8)
- [ ] Supply Chain Pivot Planner
- [ ] Pricing Strategy Optimizer
- [ ] Supplier database integration
- [ ] PDF report generation

### Phase 3: Intelligence Layer (Weeks 9-12)
- [ ] Tariff Timeline Tracker
- [ ] USTR data integration
- [ ] Email alert system
- [ ] Trade Route Optimizer

### Phase 4: Polish & Launch (Weeks 13-16)
- [ ] Mobile responsiveness
- [ ] Performance optimization
- [ ] User onboarding flow
- [ ] Payment integration (Stripe)

## 💰 Revenue Model

### Pricing Tiers
- **Starter** ($97/month): 500 products, basic calculations, email support
- **Professional** ($297/month): 2,500 products, all apps, priority alerts
- **Business** ($597/month): Unlimited products, API access, phone support

### Key Metrics to Track
- Monthly Recurring Revenue (MRR)
- Cost savings delivered to customers
- Time to first value (< 5 minutes)
- Customer retention (target: 85%+)

## 🔧 Development Scripts

```bash
# Development
npm run dev              # Start development server
npm run build           # Production build
npm run start           # Production server

# Database
npm run db:setup        # Initialize database
npm run db:seed         # Seed with sample data
npm run db:migrate      # Run migrations

# Data Management
npm run sync:tariffs    # Update tariff data
npm run sync:suppliers  # Update supplier database
npm run backup:data     # Backup user data

# Quality Assurance
npm run test            # Run test suite
npm run lint            # Code linting
npm run type-check      # TypeScript checking
```

## 🌍 Internationalization

Primary markets:
- **English** (US, Canada, UK, Australia)
- **Spanish** (Mexico, Latin America exporters to US)

Future expansion:
- **Chinese** (Simplified - for Chinese exporters)
- **French** (Canadian market)

## 🔐 Security & Compliance

- SOC 2 Type I compliance (planning for Type II)
- GDPR compliant for international users
- Data encryption at rest and in transit
- Regular security audits and penetration testing
- PCI DSS compliance for payment processing

## 📈 Success Metrics

### Technical KPIs
- Page load time < 2 seconds
- 99.9% uptime
- API response time < 500ms
- Zero data loss incidents

### Business KPIs
- Customer acquisition cost < $150
- Customer lifetime value > $2,000
- Monthly churn rate < 5%
- Net Promoter Score > 50

## 🤝 Contributing

This is currently a solo/small team project focused on rapid MVP development. 

### Development Workflow
1. Feature branches off `main`
2. PR reviews required for `main`
3. Automated testing on all PRs
4. Staging deployment for testing
5. Production deployment via Vercel

## 📞 Support & Feedback

- **Documentation**: [docs.tradenavigatorpro.com](https://docs.tradenavigatorpro.com)
- **Support Email**: support@tradenavigatorpro.com
- **Feature Requests**: Use GitHub Issues
- **Security Issues**: security@tradenavigatorpro.com

---

**Built with ❤️ for SMBs navigating uncertain trade waters.**
