import { fetchCommittee } from "@/lib/api/index";
import CommitteeCardExtended from "./CommitteeCardExtended";
import CommitteeSection from "./CommitteeSection";
import { CommitteeType } from "@/lib/types/index";

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
            imageUrl={`${process.env.NEXT_PUBLIC_STRAPI_URL}${member.photo?.url}`}
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
            imageUrl={`${process.env.NEXT_PUBLIC_STRAPI_URL}${member.photo?.url}`}
            description={member.description}
          />
        ))}
      </CommitteeSection>
    </div>
  );
}
