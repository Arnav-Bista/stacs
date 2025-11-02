import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Event, AgendaItem } from '@/lib/types/event';

/**
 * Parse a single markdown file into an Event object
 */
function parseEventFile(filePath: string): Event {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);

    return {
        title: data.title,
        eventId: data.eventId,
        datetime: data.datetime,
        description: content.trim().split('\n')[0].replace(/^#+ /, ''), // First line as short description
        location: data.location,
        tags: data.tags,
        media: data.media || [],
        agenda: data.agenda || [],
        order: data.order || 999,
        content: content.trim(), // Full markdown content
    };
}

/**
 * Fetch all events from markdown files
 * Returns events sorted by order field
 */
export async function fetchEvents(): Promise<Event[]> {
    const eventsDir = path.join(process.cwd(), 'data/events');
    const events: Event[] = [];

    if (!fs.existsSync(eventsDir)) {
        return [];
    }

    const files = fs.readdirSync(eventsDir);

    for (const file of files) {
        if (!file.endsWith('.md') || file === 'README.md') continue;

        const filePath = path.join(eventsDir, file);
        const event = parseEventFile(filePath);
        events.push(event);
    }

    // Sort by order field (lower order = displayed first)
    events.sort((a, b) => a.order - b.order);

    return events;
}

/**
 * Fetch a single event by its eventId
 */
export async function fetchEventById(eventId: string): Promise<Event | null> {
    const eventsDir = path.join(process.cwd(), 'data/events');
    const filePath = path.join(eventsDir, `${eventId}.md`);

    if (!fs.existsSync(filePath)) {
        return null;
    }

    return parseEventFile(filePath);
}
