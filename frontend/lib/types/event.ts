import { Photo } from "./photo";

export interface Event {
    id: number;
    documentId: string;
    title: string;
    datetime: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    location: string;
    tags: string;
    media?: Photo[]; 
}
