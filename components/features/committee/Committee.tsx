import { CommitteeType } from "@/lib/types/index";
import CommitteeCard from "./CommitteeCard";
import CommitteeSection from "./CommitteeSection";
import { fetchCommittee } from "@/lib/markdown/committee";

export default async function Committee() {
  const members = await fetchCommittee();

  return (
    <>
      <CommitteeSection title="Executive Committee">
        {members.filter((m) => m.committeeType === CommitteeType.EXECUTIVE).map(member => (
          <CommitteeCard
            key={member.memberId}
            name={member.name}
            position={member.role}
            imageUrl={member.photo}
          />
        ))}
      </CommitteeSection>
      <CommitteeSection title="Developers Subcommittee">
        {members.filter((m) => m.committeeType === CommitteeType.DEVELOPERS).map(member => (
          <CommitteeCard
            key={member.memberId}
            name={member.name}
            position={member.role}
            imageUrl={member.photo}
          />
        ))}
      </CommitteeSection>
    </>
  );
}
