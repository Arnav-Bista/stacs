import { fetchCommittee } from "@/lib/markdown/committee";
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
            key={member.memberId}
            name={member.name}
            position={member.role}
            imageUrl={member.photo}
            description={member.description}
          />
        ))}
      </CommitteeSection>
      <CommitteeSection title="DEVELOPERS SUBCOMMITTEE">
        {members.filter((m) => m.committeeType === CommitteeType.DEVELOPERS).map(member => (
          <CommitteeCardExtended
            key={member.memberId}
            name={member.name}
            position={member.role}
            imageUrl={member.photo}
            description={member.description}
          />
        ))}
      </CommitteeSection>
    </div>
  );
}
