export interface Sponsor {
    name: string;
    logoSmall?: string;
    logoBig?: string;
    textColor?: string;
    backgroundColor?: string;
    website?: string;
    order: number;
    tier: 'platinum' | 'gold' | 'silver' | 'bronze';
    description: string;
}
