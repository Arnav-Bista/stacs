# Sponsors Data

This directory contains markdown files for STACS sponsors.

## Structure

```
data/sponsors/
├── gsa-capital.md
├── jp-morgan.md
├── qrt.md
├── tpp.md
└── README.md
```

## Markdown Format

Each sponsor is represented by a markdown file with frontmatter:

```markdown
---
name: "Company Name"
logoSmall: "/images/sponsors/company.svg"          # Logo used in cards / homepage
logoBig: "/images/sponsors/company.svg"            # Logo for the detail view (can be the same file)
textColor: "#FFFFFF"                               # Hex color for sponsor name text
backgroundColor: "#000000"                         # Hex color for card background
website: "https://company.com"                     # Optional sponsor website
order: 1                                           # Display order
tier: "platinum" | "gold" | "silver" | "bronze"   # Sponsorship tier
---

Brief description of the sponsor company and their contribution to STACS.
```

## Adding New Sponsors

1. Create a new `.md` file in `data/sponsors/` (use company name as filename)
2. Fill in the frontmatter with sponsor details
3. Add a brief description in the markdown body
4. Add the sponsor logo to `/public/images/sponsors/` (SVG preferred — see below)

## Logo Guidelines

### Image Files
- Place sponsor logos in `/public/images/sponsors/`
- **SVG is preferred** — the renderer uses a plain `<img>` tag, so SVG, PNG, or WebP all work. SVG scales cleanly at any size.
- For raster formats, use transparent backgrounds (PNG/WebP).
- A single SVG can be used for both `logoSmall` and `logoBig`.

### Recommended Sizing
- For SVG: any viewBox works; roughly 4:2 aspect (e.g. `viewBox="0 0 400 200"`) gives the best fit in the existing card layout.
- For raster fallbacks: ~400px wide is plenty (the card renders the logo at ~64px tall).
- Keep aspect ratio consistent with company branding.

### File Naming
Use kebab-case for filenames:
- ✅ `company-name.svg`
- ❌ `Company Name.svg`

## Sponsorship Tiers

- **Platinum**: Top-tier sponsors with maximum visibility
- **Gold**: Major sponsors with prominent placement
- **Silver**: Supporting sponsors
- **Bronze**: Contributing sponsors

## Color Customization

### textColor
Hex color code for the sponsor name text. Should contrast well with backgroundColor.

### backgroundColor
Hex color code for the sponsor card background. Use the company's brand color if available.

**Example Color Schemes:**
- Dark logo on white: `backgroundColor: "#FFFFFF"`, `textColor: "#000000"`
- Light logo on dark: `backgroundColor: "#000000"`, `textColor: "#FFFFFF"`
- Brand color: Use company's primary brand color

## Display Order

Sponsors are sorted by the `order` field (lower numbers appear first). Typically:
- Platinum sponsors: 1-10
- Gold sponsors: 11-20
- Silver sponsors: 21-30
- Bronze sponsors: 31+

## Example Sponsor File

```markdown
---
name: "Example Corp"
logoSmall: "/images/sponsors/example-corp.svg"
logoBig: "/images/sponsors/example-corp.svg"
textColor: "#FFFFFF"
backgroundColor: "#0066CC"
website: "https://example.com"
order: 1
tier: "platinum"
---

Example Corp is a leading technology company specializing in innovative solutions. They have been supporting STACS since 2020 and are committed to fostering the next generation of computer scientists.
```
