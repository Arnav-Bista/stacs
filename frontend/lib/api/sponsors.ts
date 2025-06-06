import { Paginated, Sponsor } from "../types";
import client from "./core";

export async function fetchSponsors() {
    // WARNING: Strapi will by default do pagination
    // if Sponsors will be greater than 25 (i wish lmao) then either increase page size or implement pagination properly
    try {
        const response = await client.fetch(`sponsors?populate=*`, { method: 'GET' });
        const data: Paginated<Sponsor> = await response.json();
        console.log("Response from sponsors:", data);
        return data.data;
    }
    catch (error) {
        console.error("Error fetching sponsors:", error);
        throw error;
    }
}
