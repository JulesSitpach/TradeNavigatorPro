# TradeNavigatorPro

TradeNavigatorPro is a **Next.js 14** SaaS platform that helps U.S. SMB importers instantly calculate how tariffs impact their product costs.  
Upload a CSV of SKUs, run the **Emergency Cost Calculator**, and export professional PDF/CSV reports―all without wrestling with spreadsheets.

---

## 🌟 Features

| Area | Highlights |
|------|------------|
| **Emergency Cost Calculator** | Auto-computes duty per product, scenario planning with custom surcharges, real-time summary cards |
| **CSV Upload** | Drag-and-drop uploader with preview & validation, Supabase Storage back-end |
| **Reporting** | One-click PDF (React-PDF) & CSV exports, calculation history saved in Postgres |
| **Authentication** | Email / password + Google OAuth via Supabase Auth, RLS-protected multi-tenant data |
| **Responsive UI** | Tailwind CSS design system, accessible components, dark-mode ready |

---

## 🚀 Tech Stack

* **Next.js 14** (App Router, TypeScript, Server Actions)  
* **Tailwind CSS v3.4** + PostCSS, Autoprefixer  
* **Supabase** (Postgres, Auth, Storage, Row Level Security)  
* **React Hook Form** for accessible forms  
* **PapaParse** for client-side CSV parsing  
* **React-PDF** for server-side PDF generation  
* **Vitest + React Testing Library** for unit / integration tests  
* **Vercel** for zero-config deployments  

---

## 🏗️ Directory Structure

```
/
├─ app/                    # Next.js routes (App Router)
│  ├─ (auth)/              # Public auth pages (login, signup …)
│  ├─ dashboard/           # Protected user area
│  │  ├─ upload/           # CSV upload flow
│  │  ├─ calculate/        # Emergency Cost Calculator UI
│  │  └─ reports/          # Saved reports
│  ├─ api/                 # Route handlers (upload, reports …)
│  └─ middleware.ts        # Supabase RLS auth middleware
├─ components/             # Re-usable UI atoms / molecules
├─ features/               # Domain slices (auth, upload, calculator …)
├─ lib/                    # Supabase clients, CSV / tariff helpers
│  └─ supabase/            # client.ts & server.ts singletons
├─ database/               # SQL schema & seed scripts
├─ types/                  # Global TypeScript definitions
├─ styles/                 # Tailwind config & global CSS
├─ public/                 # Static assets
└─ tests/                  # Vitest test suites
```

---

## ⚙️ Setup Instructions

### 1  Prerequisites
| Tool | Version |
|------|---------|
| Node | 18 LTS+ |
| npm  | 9+      |
| Git  | any     |

### 2  Clone & Install

```bash
git clone https://github.com/JulesSitpach/TradeNavigatorPro.git
cd TradeNavigatorPro
npm install
```

### 3  Tailwind CSS (v3) Init

Tailwind v4 uses a different workflow; we stay on **v3.4** for stability.

```bash
npm uninstall tailwindcss        # if v4 installed accidentally
npm install -D tailwindcss@^3.4 postcss autoprefixer
npx tailwindcss init -p          # generates tailwind.config.js & postcss.config.js
```

### 4  Supabase Configuration

1. Create a free project at [supabase.com](https://supabase.com).  
2. Open **SQL Editor** → run `database/schema.sql`.  
3. Create a **Storage bucket** called `csv`.  
4. Enable Google OAuth (optional).

### 5  Environment Variables

Create `.env.local` in the project root:

```
NEXT_PUBLIC_SUPABASE_URL=https://<project-ref>.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<anon-key>
SUPABASE_SERVICE_ROLE_KEY=<service-role-key>   # optional, server actions
```

### 6  Run Dev Server

```bash
npm run dev
# open http://localhost:3000
```

> On Windows PowerShell, create folders individually (no `mkdir -p`).  
> If `npx tailwindcss init -p` fails, confirm `tailwindcss@^3.4` is installed.

---

## 📦 NPM Scripts

| Script         | Purpose                              |
|----------------|--------------------------------------|
| `dev`          | Start local dev server               |
| `build`        | Production build                     |
| `start`        | Start prod server                    |
| `lint`         | ESLint + Prettier                    |
| `test`         | Run Vitest unit/integration tests    |
| `sync:tariffs` | Example script to refresh tariff DB  |

---

## ☁️ Deployment (Recommended – Vercel)

1. Import the GitHub repo in Vercel.  
2. Add the same env vars in *Project → Settings → Environment*.  
3. Build command: `npm run build` (Next.js default).  
4. Enjoy preview URLs for every PR and automatic production deploys.

---

## 🔒 Security

* Supabase **Row Level Security** ensures each user only accesses their own data.  
* CSV uploads are stored at `csv/{userId}/…`.  
* Secrets are kept in env variables—never committed.  

---

## 🗺️ Roadmap

* Stripe billing & usage limits  
* HTS code auto-classification suggestions  
* Notification center for tariff changes  
* Bulk API endpoints for ERP integration  

Contributions & feedback welcome!

---

## 📄 License

MIT © 2025 TradeNavigatorPro Team
