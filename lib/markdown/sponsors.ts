import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Sponsor } from '@/lib/types/sponsor';

/**
 * Parse a single markdown file into a Sponsor object
 */
function parseSponsorFile(filePath: string): Sponsor {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);

    return {
        name: data.name,
        logoSmall: data.logoSmall,
        logoBig: data.logoBig,
        textColor: data.textColor,
        backgroundColor: data.backgroundColor,
        website: data.website,
        order: data.order || 999,
        tier: data.tier || 'bronze',
        description: content.trim(),
    };
}

/**
 * Fetch all sponsors from markdown files
 * Returns sponsors sorted by order field
 */
export async function fetchSponsors(): Promise<Sponsor[]> {
    const sponsorsDir = path.join(process.cwd(), 'data/sponsors');
    const sponsors: Sponsor[] = [];

    if (!fs.existsSync(sponsorsDir)) {
        return [];
    }

    const files = fs.readdirSync(sponsorsDir);

    for (const file of files) {
        if (!file.endsWith('.md') || file === 'README.md') continue;

        const filePath = path.join(sponsorsDir, file);
        const sponsor = parseSponsorFile(filePath);
        sponsors.push(sponsor);
    }

    // Sort by order field (lower order = displayed first)
    sponsors.sort((a, b) => a.order - b.order);

    return sponsors;
}

/**
 * Fetch sponsors by tier
 */
export async function fetchSponsorsByTier(tier: 'platinum' | 'gold' | 'silver' | 'bronze'): Promise<Sponsor[]> {
    const allSponsors = await fetchSponsors();
    return allSponsors.filter(sponsor => sponsor.tier === tier);
}
