// frontend/lib/api.ts
import { strapi } from '@strapi/client';

const client = strapi({
    baseURL: `${process.env.NEXT_PUBLIC_STRAPI_URL}/api`,
    auth: process.env.STRAPI_API_TOKEN
});

export default client;

export async function fetchEvents() {
    try {
        const response = await client.fetch(`events?populate[0]=media`, { method: 'GET' });
        const data = await response.json();
        
        if (!data || !data.data) {
            throw new Error("Failed to fetch events");
        }
        return data.data;
    } catch (error) {
        console.log('Error fetching events:', error);
        throw new Error('Failed to fetch events: ' + (error instanceof Error ? error.message : 'Unknown error'));
    }

}
  

export async function fetchEventById(id: string) {
    try {
        const events = client.collection('events');
        const response = await events.findOne(`${id}`, { populate: ['media', 'agenda', 'agenda.speaker', 'agenda.speaker.image' ] });

        if (!response || !response.data) {
            throw new Error("Failed to fetch event");
        }

        console.log(response);
        return response.data;
    } catch (error) {
        console.error(`Error fetching event with id ${id}:`, error);
        throw new Error('Failed to fetch event: ' + (error instanceof Error ? error.message : 'Unknown error'));
    }

}



export async function fetchCommitteeById(id: string) {
    try {
        const committee = client.collection('committee');
        const response = await committee.findOne(`${id}`, { populate: ['name', 'role', 'description', 'photo', 'executiveCommittee', 'memberID'] });

        if (!response || !response.data) {
            throw new Error("Failed to fetch committee member");
        }

        console.log(response);
        return response.data;
    } catch (error) {
        console.error(`Error fetching committee member with id ${id}:`, error);
        throw new Error('Failed to fetch committee member: ' + (error instanceof Error ? error.message : 'Unknown error'));
    }

}
