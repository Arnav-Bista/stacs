export interface AgendaItem {
    time: string; // Display time (e.g., "14:00" or "14:00+1")
    datetime: string; // Full ISO datetime parsed from time + event date
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
