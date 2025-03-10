// frontend/lib/api.ts
import { strapi } from '@strapi/client';

const client = strapi({
    baseURL: `${process.env.NEXT_PUBLIC_STRAPI_URL}/api`,
    auth: process.env.STRAPI_API_TOKEN
});

export async function fetchEvents() {
    const response = await client.fetch('events?populate[0]=media', { method: 'GET' });
    const data = await response.json();
    
    if (!data || !data.data) {
        throw new Error("Failed to fetch events");
    }
    return data.data;
}
  

export async function fetchEventById(id: string) {
    const events = client.collection('events');
    const response = await events.findOne(`${id}`, { populate: ['media', 'agenda', 'agenda.speaker', 'agenda.speaker.image' ] });

    if (!response || !response.data) {
        throw new Error("Failed to fetch event");
    }

    console.log(response);
    return response.data;

}

export async function fetchCommittee() {
    const response = await client.fetch('committees?populate[0]=photo', { method: 'GET' });
    const data = await response.json();

    if (!data || !data.data) {
        throw new Error("Failed to fetch events");
    }
    return data.data;
}

export async function fetchCommitteeById(id: string) {
    const committee = client.collection('committee');
    const response = await committee.findOne(`${id}`, { populate: ['name', 'role', 'description', 'photo', 'executiveCommittee', 'memberID'] });

    if (!response || !response.data) {
        throw new Error("Failed to fetch event");
    }

    console.log(response);
    return response.data;
}
