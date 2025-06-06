import { Photo } from "./photo";

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
    photo?: Photo;
    startDate: string;
}
