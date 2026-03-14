<<<<<<< HEAD
# Raasa Harvest — Next.js Web App

A full **Next.js 14** (App Router) conversion of the Raasa Harvest single-page HTML catalogue.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
raasa-harvest/
├── app/                      # Next.js App Router pages
│   ├── layout.tsx            # Root layout — Navbar + Footer + Context providers
│   ├── globals.css           # Design tokens (CSS variables), global utilities
│   ├── page.tsx              # / — Home page
│   ├── page.module.css
│   ├── rice/
│   │   ├── page.tsx          # /rice — Rice catalogue (6 varieties × multi-pack)
│   │   └── page.module.css
│   ├── veg/
│   │   ├── page.tsx          # /veg — Vegetable boxes (6 boxes)
│   │   └── page.module.css
│   ├── fruit/
│   │   ├── page.tsx          # /fruit — Fruit boxes (6 boxes)
│   │   └── page.module.css
│   ├── contact/
│   │   ├── page.tsx          # /contact — Order form + WhatsApp + FAQ + delivery zones
│   │   └── page.module.css
│   ├── cart/
│   │   ├── page.tsx          # /cart — Cart with qty controls + WhatsApp checkout
│   │   └── page.module.css
│   ├── login/
│   │   ├── page.tsx          # /login — Login / Sign-up tabs + password strength
│   │   └── page.module.css
│   └── profile/
│       ├── page.tsx          # /profile — Editable profile sections + danger zone
│       └── page.module.css
│
├── components/
│   ├── Navbar.tsx            # Fixed nav, active route highlight, cart badge
│   ├── Navbar.module.css
│   ├── Footer.tsx            # Brand footer with WhatsApp link
│   ├── RiceCard.tsx          # Rice product card (click size row → add to cart)
│   ├── VegCard.tsx           # Veg box card with item tags
│   ├── VegCard.module.css
│   ├── FruitCard.tsx         # Fruit box card
│   └── FruitCard.module.css
│
├── context/
│   ├── CartContext.tsx       # Global cart state + toast notifications
│   └── AuthContext.tsx       # Login / logout session state
│
├── data/
│   ├── rice.ts               # 6 rice SKUs with sizes, prices, codes
│   ├── veg.ts                # 6 vegetable box definitions
│   └── fruit.ts              # 6 fruit box definitions
│
├── next.config.js
├── tsconfig.json
└── package.json
```

---

## Features

| Feature | Implementation |
|---------|---------------|
| 8 pages | Next.js App Router with file-based routing |
| Global cart | React Context — persists across navigation |
| Toast notifications | Fires on add-to-cart, auto-dismisses |
| WhatsApp checkout | Cart generates pre-filled WA message with all items |
| Auth flow | Login / Sign-up tabs, password strength bar |
| Profile editing | Inline section editing (toggle per section) |
| Responsive nav | Scrollable tab bar, mobile-friendly |
| Design system | CSS variables matching original brand palette |

---

## Design Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--burg` | `#3b0d0d` | Navbar, heroes, primary dark |
| `--saffron` | `#c8860a` | Primary accent, CTA buttons |
| `--saff3` | `#f5d98a` | Light text on dark bg |
| `--forest` | `#1e3a2f` | Veg / green theme |
| `--spice` | `#8b3a0f` | Fruit / warm theme |
| `--ivory2` | `#f2ebe0` | Page background |

---

## Deployment

### Vercel (recommended)
```bash
npm run build
# Push to GitHub, import project on vercel.com
```

### Self-hosted
```bash
npm run build
npm start          # runs on port 3000
```

---

## Extending

- **Add products**: Edit `data/rice.ts`, `data/veg.ts`, or `data/fruit.ts`
- **Real auth**: Replace `AuthContext` with NextAuth.js or Supabase
- **Payments**: Integrate Razorpay or Cashfree in the cart checkout flow
- **Database**: Connect orders to Firebase / Supabase for backend persistence
=======
# RaHa
>>>>>>> f8533e5732d56313397beb368b61030da03bbfe9
