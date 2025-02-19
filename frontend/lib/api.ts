// frontend/lib/api.ts
import { strapi } from '@strapi/client';

const client = strapi({
    baseURL: `${process.env.NEXT_PUBLIC_STRAPI_URL}/api`,
    auth: process.env.STRAPI_API_TOKEN
});

// export async function fetchEvents() {
//     const res = await fetch(
//       `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/events`,
//       { next: { revalidate: 60 } } // revalidate every 60 seconds
//     );
  
//     if (!res.ok) {
//       throw new Error("Failed to fetch events");
//     }
  
//     const json = await res.json();
    
//     return json.data;
//   }
export async function fetchEvents() {
    const response = await client.fetch('events', { method: 'GET' });
    const data = await response.json();
    
    if (!data || !data.data) {
        throw new Error("Failed to fetch events");
    }
    return data.data;
}
  

export async function fetchEventById(id: string) {
const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/events/${id}?populate=*`,
    { next: { revalidate: 60 } }
);

if (!res.ok) {
    throw new Error("Failed to fetch event");
}

const json = await res.json();
const event = json.data;
return {
    id: event.id,
    ...event.attributes,
};
}
  