# PP Laminate Platform — Open Questions & Unknowns

The following requirements and operational workflows are pending stakeholder confirmation. **Rules of engagement:** Do not guess or invent accounting rules, tax formulas, or inventory synchronizers until these questions are resolved.

---

## 1. Accounting & Statutory Compliance
- [ ] **Accountant Workflow:** What accounting software (e.g., Tally Prime, Busy, Marg, QuickBooks) does the company's external or internal accountant currently use?
- [ ] **Document Transfer:** Does the accountant require daily exports, raw ledger access, or a specialized portal login?
- [ ] **GST Format:** Are e-Invoices or e-Way bills generated directly through the platform or prepared via a third-party GSP (GST Suvidha Provider)?
- [ ] **HSN/SAC Codes:** What are the exact HSN codes for decorative laminates (typically 3920 / 4823) and commercial/marine plywood (typically 4412)?
- [ ] **Payment Modes:** Which payment methods are accepted (NEFT/RTGS, Cheque, Cash, UPI)? What are the reconciliation rules for bounced cheques or delayed clearances?

---

## 2. Product Catalogue & Inventory
- [ ] **Catalog Volume:** How many active SKUs (brands, shades, finishes, thicknesses) will be uploaded in Milestone 1?
- [ ] **Units of Measurement:** Is laminate sold strictly per sheet (8x4 ft) or also available in liner sheets, cuts, and custom sizes?
- [ ] **Brand Authorizations:** Which brands have formal distribution agreements (e.g., Greenlam, CenturyPly, Merino, Royalé Touche) that require explicit brand logos or restrictions?
- [ ] **Batch/Lot Numbers:** Does plywood require tracking by batch or manufacturing date for warranty/marine certifications?

---

## 3. Pricing & Wholesale Commercials
- [ ] **Discount Structure:** How are discounts applied for retail hardware stores? (e.g., flat percentage off list price, tier-based by monthly turnover, or ad-hoc negotiated by the partner on each call?)
- [ ] **Credit Terms:** What is the default grace period for dealer accounts (15 days, 30 days, 45 days)? Are overdue interest penalties charged?
- [ ] **Carton / Crate Discounts:** Does purchasing in full crate quantities automatically trigger tiered pricing?

---

## 4. Operational & Delivery Workflows
- [ ] **Delivery Challans:** Does staff generate delivery challans before loading tempos/trucks, and does the driver obtain physical signatures on delivery?
- [ ] **Returns & Damaged Sheets:** What is the return inspection policy when broken corners or scratches are reported by carpenters on job sites?

---

## 5. Offline & Synchronization
- [ ] **Critical Offline Workflows:** Which exact screens must function without internet connectivity?
  - Product catalogue search in warehouse basements?
  - Sales order drafting?
  - Physical count verification logging?
- [ ] **Conflict Policy:** If two staff members update stock for the same SKU offline simultaneously, what is the winning resolution policy? (Partner manual review vs timestamp priority?)

---

## 6. Hosting, Infrastructure & Security
- [ ] **Cloud Provider:** Does Pawanputra prefer a managed cloud provider (e.g., AWS, Supabase, Neon, Render, Hetzner, DigitalOcean) for the PostgreSQL database and NestJS backend?
- [ ] **Backups:** What is the required recovery point objective (RPO) and backup retention period (daily snapshots retained for 90 days)?
