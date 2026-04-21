import { fetchEvents } from '@/lib/markdown/events';
import { NextResponse } from 'next/server';

export const dynamic = "force-static";

export async function GET() {
    try {
        const events = await fetchEvents();
        return NextResponse.json(events);
    } catch (error) {
        console.error('Error fetching events:', error);
        return NextResponse.json({ error: 'Failed to fetch events' }, { status: 500 });
    }
}
