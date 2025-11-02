# Committee Data

This directory contains markdown files for committee members.

## Structure

```
data/committee/
├── executive/          # Executive committee members
│   ├── president.md
│   ├── vice-president.md
│   ├── secretary.md
│   ├── treasurer.md
│   └── ...
├── developers/         # Developer subcommittee members
│   ├── lead-developer.md
│   ├── developer-1.md
│   └── ...
└── README.md
```

## Markdown Format

Each committee member is represented by a markdown file with frontmatter:

```markdown
---
name: "Member Name"
role: "Position Title"
memberId: "unique-identifier"
committeeType: "executive" | "developer"
startDate: "YYYY-MM-DD"
photo: "/images/committee/filename.jpg"  # Optional
order: 1                                  # Display order within section
---

Member bio/description goes here.
```

## Adding New Members

1. Create a new `.md` file in the appropriate directory (`executive/` or `developers/`)
2. Fill in the frontmatter with member details
3. Add a description in the markdown body
4. (Optional) Add photo to `/public/images/committee/`

## Removing Old Members

When the academic year changes:
1. Delete markdown files for members who are no longer on the committee
2. Or update their `startDate` to be from a previous year (they'll be automatically filtered out)

## Image Guidelines

- Place committee member photos in `/public/images/committee/`
- Use `.jpg`, `.png`, or `.webp` formats
- Recommended size: 400x400px
- Reference in frontmatter as: `/images/committee/filename.jpg`
- If no photo is provided, the component will show initials instead
