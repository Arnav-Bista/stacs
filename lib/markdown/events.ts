import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Event, AgendaItem } from '@/lib/types/event';

/**
 * Parse agenda time strings into full ISO datetime
 * Supports formats:
 * - "14:00" -> uses event date at 14:00
 * - "14:00+1" -> uses event date + 1 day at 14:00
 * - "14:00+2" -> uses event date + 2 days at 14:00
 */
function parseAgendaTime(timeStr: string, eventDatetime: string): string {
    const eventDate = new Date(eventDatetime);

    // Match pattern like "14:00" or "14:00+1"
    const match = timeStr.match(/^(\d{1,2}):(\d{2})(?:\+(\d+))?$/);

    if (!match) {
        // If format doesn't match, return original
        return timeStr;
    }

    const hours = parseInt(match[1], 10);
    const minutes = parseInt(match[2], 10);
    const daysOffset = match[3] ? parseInt(match[3], 10) : 0;

    // Create new date based on event date
    const agendaDate = new Date(eventDate);
    agendaDate.setHours(hours, minutes, 0, 0);

    // Add day offset if specified
    if (daysOffset > 0) {
        agendaDate.setDate(agendaDate.getDate() + daysOffset);
    }

    return agendaDate.toISOString();
}

/**
 * Parse a single markdown file into an Event object
 */
function parseEventFile(filePath: string): Event {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);

    // Automatically derive eventId from filename
    const fileName = path.basename(filePath, '.md');

    // Parse agenda items and add full datetime
    const agenda = (data.agenda || []).map((item: any) => ({
        ...item,
        datetime: parseAgendaTime(item.time, data.datetime),
    }));

    return {
        title: data.title,
        eventId: fileName, // Use filename instead of frontmatter
        datetime: data.datetime,
        description: content.trim().split('\n')[0].replace(/^#+ /, ''), // First line as short description
        location: data.location,
        tags: data.tags,
        media: data.media || [],
        agenda: agenda,
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

    // Sort by datetime (earliest events first)
    events.sort((a, b) => new Date(a.datetime).getTime() - new Date(b.datetime).getTime());

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
