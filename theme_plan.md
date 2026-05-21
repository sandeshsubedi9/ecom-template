# Solo Site — 5 Theme Specifications

> **How to use this:** Review all 5 themes below. Tell me which number to build first. I will then generate the complete HTML/CSS/JS for that theme from scratch.

---

## What all 5 themes share (the base structure)

Every theme uses the **same 15 sections** from the site-export content pattern:

1. Sticky Header / Nav
2. Hero (Product name, headline, rating, CTA button)
3. Trust Bar (logos / certifications / quick stats)
4. About / What Is This Product
5. Key Features (icon + title + description grid)
6. How It Works (numbered steps)
7. Benefits (the "why you need this")
8. Who It's For (target audience)
9. Real Results / Before & After stats
10. Customer Reviews / Testimonials
11. Expert Quote / Professional Endorsement
12. What's Inside / Specs / Tech Details
13. Pricing Table (3 packages: Single / Family / Fleet)
14. FAQ (accordion)
15. Final CTA + Footer

---

## Theme 1 — "Warm Conversion" (The Clean Base)

> **Mood:** Friendly, warm, highly readable, conversion-focused. Looks like a premium direct-to-consumer brand. Think: AG1, Care/Of, or any well-funded DTC health brand. NOT plain white — has warmth and color baked in.

| Property | Value |
|---|---|
| **Light or Dark** | Light |
| **Style Archetype** | Modern DTC / Clean Lifestyle Brand |
| **Color Palette** | Warm Peach-to-Red gradient palette |
| **Primary BG** | `#FFEDCE` (warm peach) |
| **Secondary BG** | `#FFC193` (soft orange) |
| **Accent / CTA** | `#FF3737` (bright red) |
| **Accent 2** | `#FF8383` (soft coral) |
| **Text** | `#1A0A00` (near-black, warm) |
| **Subtext** | `#7A4030` (warm brown) |

### Typography
- **Headings:** `Fraunces` or `DM Serif Display` — warm, slightly editorial serif
- **Body:** `DM Sans` — clean, modern, approachable
- **Size Scale:** Large h1 (52-60px), comfortable body (17px), generous line-height (1.8)

### Layout Character
- Border radius: **12px** on cards, **999px** (pill) on buttons
- Card shadows: Soft, warm, diffused (`box-shadow: 0 8px 32px rgba(255,55,55,0.10)`)
- Section backgrounds alternate between `#FFEDCE` and pure `#fff`
- Horizontal dividers are gentle 1px lines in `#FFC193`

### What makes it NOT generic AI
- Decorative large background text (faint, oversized) behind section headings
- Offset image positioning in the hero (image bleeds to the right edge)
- Review cards use a warm cream card with a hand-drawn style underline under reviewer names
- Pricing table: The "recommended" middle card has an angled top-left corner clip

### Section Highlights
- **Hero:** Full-width split: left = text + pill-shaped CTA, right = product image with soft drop shadow + floating rating badge
- **Trust Bar:** Horizontal scroll of certification icons on a coral `#FF8383` band
- **Pricing:** Three cards, middle card slightly elevated with a coral border and a ribbon tag ("Most Popular")

---

## Theme 2 — "Neo-Brutalism"

> **Mood:** Bold, raw, unapologetic, energetic. Looks like a Gumroad product page, a Figma plugin listing, or a Gen-Z brand. Deliberately imperfect and heavy. Stands out violently against every other site in the space.

| Property | Value |
|---|---|
| **Light or Dark** | Light (but aggressively colored) |
| **Style Archetype** | Neo-Brutalism |
| **Color Palette** | Yellow / Gold + Deep Red + Black |
| **Primary BG** | `#FFD41D` (loud yellow) |
| **Card BG** | `#FFFFFF` |
| **Accent / CTA** | `#D73535` (deep red) |
| **Accent 2** | `#FF4646` (bright red) |
| **Text** | `#000000` (pure black — no exceptions) |
| **Border** | `#000000` (solid, thick, everywhere) |

### Typography
- **Headings:** `Space Grotesk` or `Syne` — geometric, bold, heavy weight (800)
- **Body:** `Space Grotesk` — same family, lighter weight (400)
- **Style rule:** All headings are UPPERCASE. No exceptions.
- **Size Scale:** Massive h1 (64-80px), tight line-height (1.1)

### Layout Character
- Border radius: **0px** — absolutely nothing is rounded
- Border: `3px solid #000` on ALL cards, sections, images, and buttons
- Card shadows: **Hard solid black offset** (`box-shadow: 5px 5px 0px #000`) — no blur, no spread, just an offset
- Buttons: Yellow background with black border and hard shadow. On hover: background flips to black, text flips to yellow
- Section separators: Thick, full-width `6px solid #000` horizontal rules
- Some sections have a pure `#D73535` red background with white text for violent contrast

### What makes it NOT generic AI
- Every card has a physical "pushed down" press animation on click (translateY + shadow shrinks)
- Section numbers (`01`, `02`, `03`) are displayed massive (200px, semi-transparent) behind the section heading
- The hero has a large dashed-border box containing the product image — looks deliberately constructed
- The pricing table "Recommended" card is yellow, the others are white — same size, no elevation tricks

### Section Highlights
- **Hero:** Center-aligned with product image inside a thick black-bordered box. Headline in 80px bold uppercase. CTA button is yellow with hard shadow — clicks to "press in"
- **Features:** Grid of cards, each with a thick black top border accent in red, all text black, all on white
- **Reviews:** Cards laid out in a masonry-like brick stack, each with slightly different rotations (±2deg) for a physical "pinned to board" feel

---

## Theme 3 — "Glassmorphism / Deep Space"

> **Mood:** Premium, futuristic, sleek. Looks like a high-end SaaS product page or an Apple-adjacent brand. The kind of site that makes the product feel expensive just by visiting it.

| Property | Value |
|---|---|
| **Light or Dark** | Dark |
| **Style Archetype** | Glassmorphism + Dark Luxury |
| **Color Palette** | Navy / Sea / Vintage |
| **Primary BG** | `#170C79` (deep navy) — with mesh gradient overlay |
| **BG Gradient** | navy → `#0D0D1A` (near-black) |
| **Glass Card BG** | `rgba(255,255,255,0.07)` with `backdrop-filter: blur(16px)` |
| **Accent / CTA** | `#56B6C6` (teal/cyan) |
| **Accent 2** | `#8ACBD0` (light teal) |
| **Text** | `#FFFFFF` |
| **Subtext** | `#8ACBD0` or `#EFE3CA` (light warm beige) |

### Typography
- **Headings:** `Outfit` or `Plus Jakarta Sans` — clean, modern, semi-bold
- **Body:** `Inter` — the gold standard for readability on dark screens
- **Size Scale:** h1 at 52px, body at 16px, 1.75 line-height

### Layout Character
- Border radius: **16px** on cards (glass panes feel rounded at edges)
- Card style: Frosted glass — semi-transparent background + blur + `1px solid rgba(255,255,255,0.15)` border
- Shadows: No traditional shadow. Instead, cards have a faint inner glow from the top edge — `inset 0 1px 0 rgba(255,255,255,0.2)`
- Buttons: Teal (`#56B6C6`) fill, no border radius pill (just 8px). Hover: white fill with teal text
- Background: Large blurred "orbs" of color (teal, navy, purple) behind the page content — creates depth

### What makes it NOT generic AI
- No fake "AI glow" effects — the glass blur is functional, not decorative noise
- The hero background uses a subtle moving mesh/grain texture (CSS-only, no JS needed)
- Teal accent is used sparingly — only on the most important CTAs and one highlight color
- Review cards show reviewer avatars with a teal ring border, not a gold star-rating color
- Section dividers are NOT lines — they're just spacing + a faint gradient fade from section to section

### Section Highlights
- **Hero:** Full-width, dark BG, product image floats with a teal glow halo underneath it. Headline in white, subheadline in teal
- **Pricing:** Three glass cards, the recommended one has a teal border and a gradient fill inside the glass — not just brighter, but warmer
- **How It Works:** Numbered steps connected by a vertical teal line (timeline style)

---

## Theme 4 — "Vintage Editorial Dark"

> **Mood:** Refined, serious, authoritative. Like a high-end magazine ad from the 1960s meets a modern dark-mode newspaper. Makes the product feel heritage, trusted, and deeply credible.

| Property | Value |
|---|---|
| **Light or Dark** | Dark |
| **Style Archetype** | Editorial / Swiss / Heritage Dark |
| **Color Palette** | Vintage Christmas (Maroon + Teal + Sage) |
| **Primary BG** | `#1A0D10` (very dark maroon-black) |
| **Section BG** | `#6E1A37` (deep maroon) for alternating sections |
| **Accent / CTA** | `#AE2448` (rich cranberry red) |
| **Accent 2** | `#72BAA9` (teal — used very sparingly) |
| **Text** | `#F5EDE8` (warm off-white) |
| **Subtext** | `#D5E7B5` (pale sage green — readable, warm) |
| **Border** | `#AE2448` at 1px or `rgba(255,255,255,0.15)` |

### Typography
- **Headings:** `Playfair Display` — classic, authoritative, editorial serif
- **Body:** `Lato` or `Source Serif 4` — clean and legible on dark backgrounds
- **Category Labels:** Small, spaced uppercase sans-serif in teal (`#72BAA9`)
- **Size Scale:** h1 at 48px, body 16px, very generous line-height (1.9)

### Layout Character
- Border radius: **4px** maximum — everything is nearly sharp but not fully brutal
- Cards have a `1px solid rgba(174,36,72,0.4)` border — subtle maroon outline
- Full sections alternating between near-black and deep maroon backgrounds
- No drop shadows — sections feel embedded in space, not floating
- Horizontal separators: Thin 1px lines in maroon

### What makes it NOT generic AI
- Section label text (like "TESTIMONIALS", "HOW IT WORKS") uses teal as a pill-tag above the heading — very magazine-like
- The hero has a large full-bleed product image on the right with the product name overlapping the image boundary
- Review cards look like press quotes — a large opening quotation mark in maroon, reviewer name in teal at the bottom
- "What's Inside" section uses a data-table style layout, not cards

### Section Highlights
- **Hero:** Left text, right image — image has a maroon color overlay tint. Product name in 60px serif. Subtext in sage green
- **Expert Quote:** The expert quote section is a full-width maroon band with a large italic serif quote in near-white
- **Pricing:** Clean, table-like layout — not cards. Checkmarks in teal. The recommended tier has a top maroon band

---

## Theme 5 — "Organic / Earth Nature"

> **Mood:** Natural, calming, health-forward. Think a premium supplement brand, a farmer's market, or a wellness studio. Clean and airy but with real color — like being inside a greenhouse.

| Property | Value |
|---|---|
| **Light or Dark** | Light |
| **Style Archetype** | Organic / Lifestyle / Health Brand |
| **Color Palette** | Nature / Earth (Beige + Forest Green) |
| **Primary BG** | `#FBF5DD` (warm cream) |
| **Section BG** | `#E7E1B1` (wheat/light tan) for alternating sections |
| **Accent / CTA** | `#306D29` (forest green) |
| **Accent Dark** | `#0D530E` (deep forest) |
| **Text** | `#1C2B1E` (dark forest, near-black with green undertone) |
| **Subtext** | `#4A6B3E` (muted mid-green) |
| **Border** | `#C8C49A` (soft tan) |

### Typography
- **Headings:** `Cormorant Garamond` — organic, slightly fancy serif that feels hand-made
- **Body:** `Jost` — clean, geometric, neutral
- **Category Labels:** Hand-written feel using `Caveat` or small italic serif in muted green
- **Size Scale:** h1 at 50px, body 16px, 1.8 line-height

### Layout Character
- Border radius: **20px** on cards, **6px** on buttons (not fully pill, not fully sharp)
- Cards have a `1px solid #C8C49A` border on a `#fff` or `#FBF5DD` background
- Shadows: Very soft, organic, warm (`box-shadow: 0 4px 24px rgba(48,109,41,0.08)`)
- Section separators: Wavy SVG dividers between major sections (CSS only, no library)
- Icons use leaf, plant, and nature symbols from Material Symbols

### What makes it NOT generic AI
- Section dividers are wavy/organic SVG curves, not flat horizontal lines — this is the single biggest differentiator
- The hero has an irregular, organic blob shape as a background color element behind the product image
- Ingredient/Feature cards have a thin green left-border accent that acts as a "tab"
- Testimonial cards are slightly off-white with a subtle leaf watermark in the bottom corner
- Buttons are NOT pill-shaped — they have a consistent 6px radius and are deep forest green with cream text

### Section Highlights
- **Hero:** Cream background, product on right with the organic blob behind it. Headline uses the Garamond serif, CTA is a dark forest green button
- **Benefits:** Icon grid where each icon is inside a round circle with a very light green background tint
- **Pricing:** Three cards on a wheat-colored band, the recommended card has a forest green header with cream text

---

## Summary Quick-Reference

| # | Theme Name | Light/Dark | Style | Key Colors |
|---|---|---|---|---|
| 1 | Warm Conversion | Light | DTC Brand | Peach `#FFEDCE` + Red `#FF3737` |
| 2 | Neo-Brutalism | Light | Brutalism | Yellow `#FFD41D` + Black + Red `#D73535` |
| 3 | Glassmorphism Dark | Dark | Glass + Navy | Navy `#170C79` + Teal `#56B6C6` |
| 4 | Vintage Editorial | Dark | Editorial + Heritage | Maroon `#6E1A37` + Teal `#72BAA9` |
| 5 | Organic Nature | Light | Health + Lifestyle | Cream `#FBF5DD` + Forest `#306D29` |

---

> **Next step:** Tell me which theme number (1-5) to build first. I will generate a complete, full HTML file for that theme using your site-export structure as the content base.
