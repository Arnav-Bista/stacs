import { Event } from "../types";
import { Paginated } from "../types/pagination";
import client from "./core";

export async function fetchEvents(): Promise<Event[] | Error> {
    try {
        const response = await client.fetch(`events?populate=media`, { method: 'GET' });
        const data: Paginated<Event> = await response.json();
        return data.data;
    } catch (error) {
        console.log('Error fetching events:', error);
        return new Error('Failed to fetch events: ' + (error instanceof Error ? error.message : 'Unknown error'));
    }

}


export async function fetchEventById(id: string): Promise<Event | Error> {
    try {
        const events = client.collection('events');
        const response = await events.findOne(`${id}`, { populate: ['media', 'agenda', 'agenda.speaker', 'agenda.speaker.image'] });

        if (!response || !response.data) {
            throw new Error("Failed to fetch event");
        }

        console.log(response);
        return response.data as Event;
    } catch (error) {
        console.error(`Error fetching event with id ${id}:`, error);
        return new Error('Failed to fetch event: ' + (error instanceof Error ? error.message : 'Unknown error'));
    }

}
