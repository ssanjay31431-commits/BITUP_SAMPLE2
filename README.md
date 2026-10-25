# BITE UP — Design Sample 2 (Gusto-Inspired Editorial Edition)

This is a completely **separate, independent frontend website** for **BITE UP** fast-food restaurant, created as an alternate premium design sample for client presentation alongside the existing deployed site.

---

## 🎨 Design Philosophy & Aesthetic
Inspired by the reference Gusto restaurant design system:
- **Warm Editorial Color Palette**: Cream (`#FAF6F0`), beige (`#EFE8DD`), deep espresso charcoal (`#1C1814`), and energetic red accents (`#DC2626`).
- **Typography**: Editorial headings in **Playfair Display Bold** with clean, modern **Inter** for descriptions and interfaces.
- **Organic Stone / Clay Podiums**: 3D-styled display plateaus highlighting signature items (Monster Zinger, Crispy Chicken 2 Pcs, Cheesy Loaded Fries).
- **Interactive Express Counter**: Quick takeaway & party selector inspired by the Gusto reservation pill component.
- **Atmospheric Story Card**: Dark chocolate backdrop showcasing kitchen freshness, 12-hour slow marination, and hand-breading standards.
- **Slide-out Cart & WhatsApp Ordering**: Tray drawer with real-time quantity modifiers and 1-tap WhatsApp kitchen order dispatcher to `+91 72007 48268`.

---

## 🍗 Menu & Data Integrity
All 14 categories from the original BITE UP menu are 100% preserved with original prices, ratings, descriptions, and dietary indicators:
1. Fried Chicken
2. Burgers
3. Wraps
4. Chicken Bites
5. Snacks
6. Momos
7. Beverages
8. Loaded Chicken Fries
9. Fried Chicken Combos
10. Burger Combos
11. Wrap Combos
12. BITE UP Specials
13. Extra Add-ons
14. Dips & Sauces

To edit any items, prices, or descriptions, simply modify:
```
src/data/menuData.js
```

---

## 🚀 Running the Project

### 1. Development Server
```bash
npm run dev
```
Runs at `http://localhost:5174/`

### 2. Production Build
```bash
npm run build
```
Builds an optimized, production-ready static site in `dist/`.

### 3. Local Preview
```bash
npm run preview
```

---

## 📍 Store Information
- **Brand**: BITE UP
- **Location**: Palpannai, Mahalakshmi Nagar, Tiruchirappalli, Tamil Nadu 620008
- **Kitchen Hotline**: `+91 72007 48268`
- **WhatsApp**: `+91 72007 48268`
- **Hours**: Mon–Thu 11:00 AM – 11:00 PM | Fri–Sun 11:00 AM – 11:30 PM
