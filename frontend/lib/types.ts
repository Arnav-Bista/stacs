export interface Photo {
    id: number;
    documentId: string;
    name: string;
    alternativeText: string | null;
    caption: string | null;
width: number;
    height: number;
    formats: object;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: object | null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

export interface Paginated<T> {
    data: T[];
    total: number;
    page: number;
    limit: number;
}

export enum CommitteeType {
    EXECUTIVE = "executive",
    DEVELOPERS = "developer"
}

export interface CommitteeMember {
    id: number;
    documentId: string;
    name: string;
    role: string;
    memberId: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    description: string;
    committeeType: CommitteeType;
    photo: Photo;
    startDate: string;
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
    media: Photo[]; // Assuming media is an array of some type
}
