# Events Data

This directory contains markdown files for STACS events.

## Structure

```
data/events/
├── welcome-week-2025.md
├── intro-to-web-dev.md
├── careers-fair-2025.md
├── ctf-competition.md
└── README.md
```

## Markdown Format

Each event is represented by a markdown file with frontmatter and rich markdown content:

```markdown
---
title: "Event Name"
eventId: "unique-event-id"
datetime: "2025-09-15T18:00:00"  # ISO 8601 format
location: "Event Location"
tags: "tag1, tag2, tag3"          # Comma-separated
media:                             # Optional
  - "/images/events/image1.jpg"
  - "/images/events/image2.jpg"
order: 1                           # Display order on events list
agenda:                            # Optional
  - time: "18:00"
    title: "Agenda Item"
    description: "Details"
    speaker:                       # Optional speaker info
      name: "Speaker Name"
      role: "Title"
      company: "Organization"
---

# Event Details in Markdown

Full event description with **rich markdown formatting**:

- Lists
- **Bold** and *italic*
- [Links](https://example.com)
- Code blocks
- And more!
```

## Adding New Events

1. Create a new `.md` file in `data/events/`
2. Fill in the frontmatter with event details
3. Write the full event description in markdown
4. (Optional) Add event images to `/public/images/events/`

## Markdown Content

The markdown content (below the frontmatter) will be rendered on the event detail page (`/events/[id]`). You can use:

- **Headers** (`#`, `##`, `###`)
- **Lists** (ordered and unordered)
- **Emphasis** (`**bold**`, `*italic*`)
- **Links** (`[text](url)`)
- **Code blocks** with syntax highlighting
- **Blockquotes** (`> quote`)
- **Tables**
- And all other standard markdown features!

## Event Ordering

Events are sorted by the `order` field (lower numbers appear first). If you want events ordered by date, you can update the loader to sort by `datetime` instead.

## Image Guidelines

- Place event photos in `/public/images/events/`
- Use `.jpg`, `.png`, or `.webp` formats
- Reference in frontmatter as: `/images/events/filename.jpg`
- Multiple images are supported via the `media` array

## Agenda & Speakers

The `agenda` field supports structured event schedules with optional speaker information:

```yaml
agenda:
  - time: "18:00"
    title: "Session Title"
    description: "What happens in this session"
    speaker:                    # Optional
      name: "Speaker Name"
      role: "Job Title"
      company: "Organization"
      image: "/images/speakers/name.jpg"  # Optional
```

Speakers can be linked to multiple agenda items, and will appear in both the Agenda tab and Speakers tab on the event detail page.
