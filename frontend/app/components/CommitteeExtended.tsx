import client from "@/lib/api";
import CommitteeCardExtended from "./CommitteeCardExtended";
import { CommitteeMember, CommitteeType, Paginated } from "@/lib/types";
import { getYear, getMonth } from 'date-fns';
import CommitteeSection from "./CommitteeSection";

// Vibe Code Warning: Used to make stuff modular

function getAcademicYear(): number {
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



export default async function CommitteeExtended() {
  const members = await fetchCommittee();
  return (
    <div className="flex flex-col items-center justify-center w-full space-y-12">
      <CommitteeSection title="EXECUTIVE COMMITTEE">
        {members.filter((m) => m.committeeType === CommitteeType.EXECUTIVE).map(member => (
          <CommitteeCardExtended
            key={member.id}
            name={member.name}
            position={member.role}
            imageUrl={`${process.env.NEXT_PUBLIC_STRAPI_URL}${member.photo.url}`}
            description={member.description}
          />
        ))}
      </CommitteeSection>
      <CommitteeSection title="DEVELOPERS SUBCOMMITTEE">
        {members.filter((m) => m.committeeType === CommitteeType.DEVELOPERS).map(member => (
          <CommitteeCardExtended
            key={member.id}
            name={member.name}
            position={member.role}
            imageUrl={`${process.env.NEXT_PUBLIC_STRAPI_URL}${member.photo.url}`}
            description={member.description}
          />
        ))}
      </CommitteeSection>
    </div>
  );
}
