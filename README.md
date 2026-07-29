# Magnolia Advisory Group - Official Website

A professional, modern website for Magnolia Advisory Group - a boutique, partner-led advisory firm providing structured financial systems and practical growth strategy for service-based businesses.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

```
magnolia-advisory/
├── app/
│   ├── page.tsx                 # Homepage
│   ├── layout.tsx               # Root layout with Header/Footer
│   ├── globals.css              # Global styles and Tailwind config
│   ├── about/                   # About page
│   ├── bundle/                  # Flagship Bundle page
│   ├── contact/                 # Contact page
│   ├── founders/                # Meet the Founders page
│   ├── how-it-works/           # How It Works page
│   ├── investment/             # Investment & FAQ page
│   └── services/
│       ├── page.tsx            # Services overview
│       ├── accounting/         # Accounting & Finance page
│       └── growth/             # Business Development page
├── components/
│   ├── Header.tsx              # Sticky navigation header
│   ├── Footer.tsx              # Footer with links
│   ├── FadeIn.tsx              # Animation wrapper
│   ├── PricingCard.tsx         # Pricing display component
│   └── CTASection.tsx          # Call-to-action section
├── public/
│   ├── tyrus-burton.png        # Founder photo
│   └── christian-camacho.png   # Founder photo
└── DOCUMENTATION.md            # Comprehensive project docs
```

## 🎨 Design System

### Colors
- **Primary:** `#1B3022` (Deep Forest Green)
- **Background:** `#FDFCF8` (Off-white/Cream)
- **Accent:** `#631D11` (Deep Burgundy)
- **Border:** `#E5E7EB` (Subtle Gray)

### Typography
- **Headings:** Playfair Display (Serif)
- **Body:** Inter (Sans-Serif)

## 🛠 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Google Fonts (Inter, Playfair Display)

## 📄 Pages

1. **Homepage** (`/`) - Hero, problem/solution, services overview, pricing snapshot
2. **Services** (`/services`) - Overview of both divisions
3. **Accounting & Finance** (`/services/accounting`) - Bookkeeping tiers, cleanup, consulting
4. **Business Development** (`/services/growth`) - Advisory, sales systems, websites
5. **Flagship Bundle** (`/bundle`) - Combined package details
6. **Investment & FAQ** (`/investment`) - Complete pricing transparency
7. **About** (`/about`) - Company philosophy and approach
8. **Meet the Founders** (`/founders`) - Team profiles with photos
9. **Contact** (`/contact`) - Scheduling and contact options
10. **How It Works** (`/how-it-works`) - Process and expectations

## ✨ Features

- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ SEO optimized with metadata
- ✅ Smooth animations with Framer Motion
- ✅ Sticky navigation with glassmorphism
- ✅ Static generation for fast loading
- ✅ TypeScript for type safety
- ✅ Accessible navigation
- ✅ Professional founder photos
- ✅ Clear pricing transparency

## 🚢 Deployment

### Pre-Deployment Checklist

Before deploying to production, update the following:

1. **Contact Information**
   - Update email addresses in footer and contact page
   - Update phone number in footer and contact page
   - Replace placeholder Calendly URL in contact page

2. **Content Review**
   - Verify all pricing is accurate
   - Check all links work correctly
   - Review founder bios and photos
   - Confirm service descriptions

3. **Technical**
   - Set up domain and DNS
   - Configure environment variables (if needed)
   - Set up analytics (optional)

### Recommended Hosting

- **Vercel** (recommended) - Optimized for Next.js
- **Netlify**
- **AWS Amplify**
- **Cloudflare Pages**

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 📝 Configuration

### Update Contact Details

1. **Email addresses:**
   - `/components/Footer.tsx` - line 49
   - `/app/contact/page.tsx` - lines 90, 111, 119
   - `/app/founders/page.tsx` - lines 71, 93

2. **Phone number:**
   - `/components/Footer.tsx` - line 55
   - `/app/contact/page.tsx` - line 101

3. **Calendly URL:**
   - `/app/contact/page.tsx` - line 70

### Customize Colors

Edit `/app/globals.css` to change the color palette:

```css
:root {
  --color-primary: #1B3022;    /* Deep Forest Green */
  --color-background: #FDFCF8; /* Off-white/Cream */
  --color-accent: #631D11;     /* Deep Burgundy */
  --color-border: #E5E7EB;     /* Subtle Gray */
}
```

## 📚 Documentation

For comprehensive documentation, see [DOCUMENTATION.md](./DOCUMENTATION.md) which includes:
- Complete design system
- Pricing structure
- Development decisions
- Content strategy
- Maintenance guidelines
- Future enhancements

## 🤝 Support

For questions or support:
- **Email:** contact@magnoliaadvisory.com
- **Tyrus Burton:** tyrus@magnoliaadvisory.com
- **Christian Camacho:** christian@magnoliaadvisory.com

## 📄 License

© 2026 Magnolia Advisory Group. All rights reserved.

---

**Built with:** Next.js 14, TypeScript, Tailwind CSS, Framer Motion  
**Status:** Production Ready ✅  
**Version:** 1.0.0
