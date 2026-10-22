# FIBECODES — AUDIT SCORECARD

Dokumen ini memetakan evaluasi kuantitatif dan status kepatuhan teknis di setiap domain audit berdasarkan pengujian aktual pada codebase Fibecodes.

---

## 1. DOMAIN SUMMARY SCORECARD

| Domain Audit | Status | Skor / Rating | Temuan Utama |
| :--- | :---: | :---: | :--- |
| **1. Discovery & Architecture** | 🟡 CAUTION | 72 / 100 | Dual lockfile, dependensi duplikat (`framer-motion` & `motion`), dead code |
| **2. UI/UX & Design System** | 🟡 CAUTION | 78 / 100 | Visual hero & about sangat baik; masalah pada Accordion & sticky cards mobile |
| **3. Application Security** | 🔴 FAIL | 45 / 100 | Kerentanan Next.js kritis (GHSA-p293-qw3h-jr36), 0 HTTP security headers |
| **4. Performance & Core Web Vitals** | 🔴 FAIL | 52 / 100 | Model 3D 8.7MB, PNG mentah 6MB, InitialLoader menahan 2.6s, re-render cursor |
| **5. SEO & Content Quality** | 🟡 CAUTION | 65 / 100 | Tag `<html lang="en">` salah, tidak ada sitemap/robots, multiple H1 |
| **6. Accessibility (WCAG 2.2 AA)** | 🟡 CAUTION | 68 / 100 | Modal pricing tanpa focus trap / escape, kontras & semantik dasar baik |
| **7. Conversion & User Journey** | 🟡 CAUTION | 70 / 100 | CTA WhatsApp contextual sangat baik; CTA mobile menu dead link (`#contact`) |
| **8. Code Quality & Standards** | 🔴 FAIL | 58 / 100 | `ignoreBuildErrors: true` menutupi 2 error tipe riil, `npm run lint` gagal |
| **9. Production Readiness** | 🔴 FAIL | 48 / 100 | Blocker keamanan dan build safety wajib ditangani sebelum rilis live |

---

## 2. DETAIL PEMERIKSAAN PER DOMAIN

### DOMAIN 1: DISCOVERY & ARSITEKTUR
* **Framework & Routing:** PASS (Next.js 16.0.10 App Router berjalan stabil).
* **Package Management:** FAIL (Terdapat `package-lock.json` dan `pnpm-lock.yaml` bersamaan).
* **Dependency Health:** FAIL (Terdapat duplikasi `framer-motion` dan `motion`; 60+ modul UI tidak digunakan).
* **Environment Variables:** PASS (Tidak ada secret atau token API privat yang bocor ke client-side bundle).
* **CI/CD Configuration:** NOT APPLICABLE (Belum ada file `.github/workflows` di repository lokal).

### DOMAIN 2: UI / UX & DESIGN SYSTEM
* **Konsistensi Visual:** PASS (Palet Warm Ivory `#F5F4F0` dan tipografi editorial konsisten).
* **Hero Messaging:** PASS (Pesan layanan kustom dan target area Karawang/Bekasi/Cikarang/Subang jelas).
* **Responsiveness Bagian Atas:** PASS (Padding header 80px dan video card terbingkai rapi).
* **Accordion Gallery Mobile:** FAIL (5 panel horizontal terkompresi di bawah 400px; tidak ada hover di touch device).
* **Sticky Stacking Portfolio Mobile:** FAIL (Tumpukan 6 kartu sticky menyebabkan scroll fatigue di mobile).
* **TechText Loader UX:** FAIL (Layar terkunci 2.6 detik di setiap refresh tanpa session storage).

### DOMAIN 3: SECURITY & PRIVACY (OWASP ASVS & TOP 10)
* **Outdated / Vulnerable Components:** FAIL (Next.js 16.0.10 memiliki advisory RCE Windows dan DoS).
* **Content Security Policy (CSP):** FAIL (Tidak didefinisikan).
* **Clickjacking Protection (X-Frame-Options):** FAIL (Tidak ada proteksi iframe embedding).
* **MIME Sniffing (X-Content-Type-Options):** FAIL (Tidak ada `nosniff`).
* **HSTS (Strict-Transport-Security):** FAIL (Tidak dikonfigurasi).
* **Form Action Safety:** FAIL (Form newsletter footer mengirim GET request tanpa handler).
* **Development Leaks:** FAIL (Header HTML memuat `generator: 'v0.app'`).

### DOMAIN 4: PERFORMANCE & CORE WEB VITALS
* **LCP (Largest Contentful Paint):** FAIL (Diproyeksikan > 3.5 detik akibat initial loader 2.6s + video tanpa poster + 6MB PNG).
* **INP (Interaction to Next Paint):** CAUTION (`MagneticCursor` memicu re-render state di setiap frame 60–120Hz).
* **CLS (Cumulative Layout Shift):** PASS (< 0.1, layout sebagian besar memiliki aspect-ratio terdefinisi).
* **3D Asset Weight:** FAIL (Model 3D `robot_playground.glb` berukuran 8.69 MB).
* **Image Optimization Pipeline:** FAIL (`images: { unoptimized: true }` diaktifkan di `next.config.mjs`).

### DOMAIN 5: SEO & CONTENT QUALITY
* **HTML Language Identifier:** FAIL (`<html lang="en">` untuk situs 100% Bahasa Indonesia).
* **Sitemap & Robots:** FAIL (Tidak ada `sitemap.xml` dan `robots.txt`).
* **Heading Hierarchy:** CAUTION (Terdapat H1 tersembunyi di header dan H1 utama di Hero).
* **Internal Anchors:** FAIL (Link `#contact` di footer dan menu mobile tidak memiliki target elemen).
* **OpenGraph Tags:** PASS (Title, description, dan locale `id_ID` telah terisi).
* **Canonical URL:** FAIL (Tag `<link rel="canonical">` tidak didefinisikan).

### DOMAIN 6: ACCESSIBILITY (WCAG 2.2 AA)
* **Keyboard Navigation:** CAUTION (Navigasi tab berfungsi, namun modal tidak memiliki trap focus).
* **Modal Accessibility:** FAIL (Tidak ada listener tombol Escape, tidak ada `role="dialog"`, scroll background tidak dikunci).
* **Color Contrast:** PASS (Teks `#20252B` di atas latar `#F5F4F0` memiliki rasio kontras 11.2:1, melampaui standar WCAG AA 4.5:1).
* **Reduced Motion:** PASS (`initial-loader.tsx`, `robot-viewer.tsx`, `scroll-velocity.tsx` mendukung `prefers-reduced-motion`).

### DOMAIN 7: CONVERSION & BUSINESS JOURNEY
* **WhatsApp Direct CTAs:** PASS (Semua tautan paket dan portofolio menggunakan pre-filled message spesifik).
* **Mobile Menu CTA:** FAIL (Tombol "Konsultasi" pada hamburger menu mengarah ke `#contact` mati).
* **Footer Consultation Form:** FAIL (Input email/WA memicu reload halaman tanpa feedback atau capture data).
* **Social Links Integrity:** FAIL (Tautan WhatsApp, LinkedIn, dan Instagram di footer bernilai `href="#"`).

### DOMAIN 8: CODE QUALITY & MAINTAINABILITY
* **TypeScript Compilation:** FAIL (`npx tsc --noEmit` gagal dengan 2 error tipe aktif).
* **Next.js Build Config:** FAIL (`ignoreBuildErrors: true` menutupi error kompilasi).
* **ESLint Configuration:** FAIL (`npm run lint` gagal karena eslint tidak terinstall).
* **Dead Code Cleanup:** CAUTION (Terdapat file JSX duplikat yang tidak terpakai).

---

## 3. AREA YANG BELUM DAPAT DIVERIFIKASI (LIMITATIONS)

Berikut adalah pengujian yang memerlukan akses infrastruktur atau tooling tambahan:
1. **Real-User Core Web Vitals (CrUX):** Belum dapat diukur karena website belum terdaftar pada Chrome User Experience Report (domain live diperlukan).
2. **Dynamic Penetration Testing (DAST):** Pengujian penetrasi keamanan dinamis tingkat lanjut memerlukan lingkungan staging/production aktif dan otorisasi formal.
3. **Cross-Browser Physical Device Testing:** Browser subagent mengalami kendala Playwright driver (404 CDN); verifikasi visual responsif dilakukan melalui analisis kode statis dan kalkulasi CSS breakpoint.
