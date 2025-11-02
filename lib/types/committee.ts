export enum CommitteeType {
    EXECUTIVE = "executive",
    DEVELOPERS = "developer"
}

export interface CommitteeMember {
    name: string;
    role: string;
    memberId: string;
    description: string;
    committeeType: CommitteeType;
    photo?: string;
    startDate: string;
    order: number;
}
