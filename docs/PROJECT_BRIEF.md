# Pawanputra (PP) Laminate — Project Brief

**Version:** 0.1 (Scaffold Baseline)  
**Location:** Surat, Gujarat, India  
**Target Market:** Wholesale Plywood, Laminates, Veneers, and Interior Hardware  

---

## 1. Executive Summary

PP Laminate (Pawanputra Laminate) is a wholesale distributor serving dealers, contractors, interior firms, and retail hardware shops across the Surat commercial market (including Ring Road, Varachha, Katargam, and Adajan).

The platform comprises two primary frontends backed by a unified NestJS API and PostgreSQL database:
1. **Public Product Catalogue Website:** A fast, transparent catalogue enabling dealers and customers to search product codes (e.g., `SF2042`), inspect surface finishes, review public listed prices, view weekly audited physical availability, and trigger direct WhatsApp/Call wholesale enquiries.
2. **Internal Wholesale ERP Dashboard:** A secure management platform for partners and staff to record sales, track customer-wise credit and outstanding balances, log weekly physical stock checks, and prepare operational records for subsequent accountant review.

---

## 2. Business Principles & Operating Rules

1. **Approximate Availability, Not Fake Real-Time:**  
   Staff physically check inventory weekly in the Surat warehouse. The public website transparently shows the exact date of the physical verification. We do not claim instant real-time inventory synchronization.
2. **List Price vs Negotiated Transaction Price:**  
   The public catalogue displays a standard list reference price. The internal ERP records the actual negotiated transaction price for each sale, preserving both for margin analysis and accounting.
3. **Auditability & Immutable History:**  
   Wholesale ledger corrections and financial updates must preserve a complete audit trail (who changed what, when, and why). Silent overwrites of finalized financial records are forbidden.
4. **Role Segregation:**  
   Partners possess full business visibility (margins, partner withdrawals, sensitive ledger summaries). Shop staff are restricted to operational tasks (order intake, physical stock logging, delivery challan updates).
5. **Functional Benchmark:**  
   GAIN Software's wholesale distribution and inventory capabilities serve as an industry benchmark for feature scope. Proprietary code is not copied.
6. **Deliberate Offline Architecture:**  
   Offline capability is desired for warehouse and field operations, but will be introduced with conservative conflict resolution and explicit testing before financial posting is allowed offline.

---

## 3. System Architecture & Monorepo Layout

```
pp-laminate-platform/
├── apps/
│   ├── web/          # Public product catalogue (Next.js 14, Tailwind CSS, shadcn/ui)
│   ├── erp/          # Internal wholesale ERP dashboard (Next.js 14, Tailwind CSS)
│   └── api/          # Backend API (NestJS modular monolith, CORS, Health Check)
├── packages/
│   ├── database/     # Prisma ORM schema & client singleton for PostgreSQL
│   ├── types/        # Shared domain types, DTOs & API contract interfaces
│   ├── eslint-config/# Shared linting configurations
│   └── typescript-config/ # Shared base tsconfig files
├── docs/             # Business briefs, architecture specs, and open questions
└── .github/          # CI workflows for linting, typechecking, and testing
```
