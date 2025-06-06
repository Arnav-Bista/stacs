import client from "./core";
import { getMonth, getYear } from "date-fns";
import { CommitteeMember } from "../types/committee";
import { Paginated } from "../types/pagination";

function getAcademicYear(): number {
    // PLACEHOLDER TODO
    return 2024;
    const currentDate = new Date();
    const currentYear = getYear(currentDate);
    const currentMonth = getMonth(currentDate);

    // If the current month is January (0) to May (4), return the previous year
    if (currentMonth >= 0 && currentMonth <= 4) {
        return currentYear - 1;
    }

    // Otherwise, return the current year
    return currentYear;
}
export async function fetchCommittee(): Promise<CommitteeMember[]> {
    try {
        const academicYear = getAcademicYear();
        const filterDate = `${academicYear}-09-01`;
        const response = await client.fetch(`committees?populate[0]=photo&filters[startDate][$gte]=${filterDate}`, { method: 'GET' });
        const data: Paginated<CommitteeMember> = await response.json();

        return data.data;
    } catch (error) {
        console.error('Error fetching committee:', error);
        throw new Error('Failed to fetch committee data: ' + (error instanceof Error ? error.message : 'Unknown error'));
    }
}

export async function fetchCommitteeById(id: string) {
    try {
        const committee = client.collection('committee');
        const response = await committee.findOne(`${id}`, { populate: ['name', 'role', 'description', 'photo', 'executiveCommittee', 'memberID'] });

        if (!response || !response.data) {
            throw new Error("Failed to fetch committee member");
        }

        console.log(response);
        return response.data;
    } catch (error) {
        console.error(`Error fetching committee member with id ${id}:`, error);
        throw new Error('Failed to fetch committee member: ' + (error instanceof Error ? error.message : 'Unknown error'));
    }

}
