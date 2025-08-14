import { Photo } from "./photo";

export interface AgendaItem {
    time: string;
    title: string;
    description: string;
    speaker?: {
        id: string;
        name: string;
        role: string;
        company: string;
        image?: Photo;
    };
}

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
    agenda?: AgendaItem[];
}
