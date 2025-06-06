import { Photo } from "./photo";

export interface Sponsor {
    name: string;
    logoSmall?: Photo;
    logoBig?: Photo;
    textColor?: string;
    backgroundColor?: string;
}
