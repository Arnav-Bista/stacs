export interface AgendaItem {
    time: string;
    title: string;
    description: string;
    speaker?: {
        name: string;
        role: string;
        company: string;
        image?: string;
    };
}

export interface Event {
    title: string;
    eventId: string;
    datetime: string;
    description: string;
    location: string;
    tags: string;
    media?: string[];
    agenda?: AgendaItem[];
    order: number;
    content: string; // The full markdown content
}
