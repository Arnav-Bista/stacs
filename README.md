# STACS Website

The St Andrews Computer Science Society website. Built with Next.js (App Router) and deployed as a static site to GitHub Pages at [standrewscs.com](https://standrewscs.com).

Most of the content lives as markdown files in `data/` — no code changes needed to update events, sponsors or the committee.

## Running Locally

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

To preview a production build:

```bash
pnpm build   # outputs static site to ./out
```

## How Deploys Work

- Every push to `main` triggers `.github/workflows/deploy.yaml`, which builds and publishes to GitHub Pages.
- PRs and other branches run `.github/workflows/build.yaml` (lint + build) as a sanity check — no deploy.
- If a build fails on `main`, the previous deployment stays live. Nothing breaks for visitors.

---

## Adding an Event

Create a new markdown file in `data/events/`. The filename becomes the URL slug (e.g. `rust-workshop.md` → `/events/rust-workshop`).

```markdown
---
title: "Event Title"
datetime: "2026-02-21T13:00:00"   # ISO datetime, local time
location: "John Honey"
tags: "workshop, rust, systems"   # comma-separated
order: 3                           # lower numbers sort earlier
media:
  - "/images/events/my-event.png" # optional; first image shown on the event page
agenda:                            # optional
  - time: "13:00"
    title: "Doors Open"
    description: "Check-in and intro"
  - time: "14:00"
    title: "Main Session"
    description: "The good stuff"
  - time: "00:00+1"                # next day at 00:00
    title: "Late-night snack"
    description: "Pizza arrives"
---

Markdown body goes here — this is rendered on the event detail page.

You can use **bold**, _italics_, [links](https://example.com), headings, lists,
images, tables (GFM), everything remark-gfm supports.
```

**Agenda time format**
- `"14:00"` — that time on the event date
- `"14:00+1"` — 14:00 on the day *after* the event date (useful for hackathons / overnight events)

**Images for events**
- Drop files into `public/images/events/`
- Reference them in frontmatter as `/images/events/filename.png`
- PNG, JPG, SVG all work. Images are not optimised at build (static export), so keep them reasonable — ~500 KB or less.

**Ordering**
- Upcoming events (datetime in the future) are shown first, soonest first.
- Past events come after, most recent first.
- `order` is a secondary sort; prefer accurate `datetime` and leave `order` unique per event to avoid surprises.

---

## Adding a Sponsor

Create a new markdown file in `data/sponsors/`. The filename is just for your reference.

```markdown
---
name: "Example Corp"
logoSmall: "/images/sponsors/example-corp.svg"   # card / homepage logo
logoBig: "/images/sponsors/example-corp.svg"     # detail view (can be the same file)
textColor: "#FFFFFF"                              # sponsor name colour
backgroundColor: "#0066CC"                        # card background
website: "https://example.com"                    # optional
order: 1                                          # lower = appears first
tier: "platinum"                                  # platinum | gold | silver | bronze
---

One or two sentences about the sponsor. Shown on the sponsors page.
```

**Logo files**
- Put them in `public/images/sponsors/`. Use kebab-case filenames (`jp-morgan.svg`).
- **SVG is strongly preferred** — it scales cleanly everywhere. PNG/WebP work too (use transparent backgrounds).
- A ~4:2 aspect ratio (e.g. `viewBox="0 0 400 200"`) fits the card layout best.

**Tiers & ordering convention**
By convention we use `order` ranges per tier so sponsors cluster naturally:
- Platinum: 1–10
- Gold: 11–20
- Silver: 21–30
- Bronze: 31+

The `tier` field is also used independently if a page wants to show, say, only platinum sponsors.

**Colour tip** — for a dark logo, use a light `backgroundColor`. For a light/white logo, a dark or branded background works best. Check the contrast on `textColor`.

---

## Adding a Committee Member

Two subfolders:
- `data/committee/executive/` — exec roles (President, Secretary, Treasurer, …)
- `data/committee/developers/` — the STACS Developers subcommittee

Filename is the member's ID — use kebab-case (`sophia-terry.md` or `president.md` both fine).

```markdown
---
name: "Sophia Terry"
role: "President"
startDate: "2025-09-01"                    # REQUIRED — see academic-year filter below
photo: "/images/committee/president.jpg"   # optional; falls back to initials
order: 1                                   # lower = appears first
---

Optional short bio. Markdown supported.
```

**Academic-year filter (important for rollover)**
Members are automatically hidden if their `startDate` is before September 1st of the current academic year. The academic year starts in September — so from Sep 2025 through Aug 2026 the filter is `>= 2025-09-01`.

This means at committee rollover you **don't need to delete old members** — just add the new committee with `startDate: "2026-09-01"` (or whatever the new year is) and last year's committee disappears automatically from the live site. The files still exist in git if you need them later.

**Photos**
- Put them in `public/images/committee/`
- JPG, PNG, or WebP; ~400×400px square is ideal
- If `photo` is omitted the UI shows the member's initials instead

---

## Directory Reference

```
data/
├── events/              # one .md per event (filename = URL slug)
├── sponsors/            # one .md per sponsor
└── committee/
    ├── executive/       # exec committee
    └── developers/      # dev subcommittee

public/images/
├── events/
├── sponsors/
└── committee/
```

## Before You Push

If you're only editing content (adding events/sponsors/committee), a push to `main` is enough — CI will build and deploy. If you want to be safe:

```bash
pnpm build
```

A green build locally means the deploy will succeed.
