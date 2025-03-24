import { CommitteeType } from "@/lib/types";
import CommitteeCard from "./CommitteeCard";
import { fetchCommittee } from "./CommitteeExtended";
import CommitteeSection from "./CommitteeSection";

export default async function Committee() {
  const members = await fetchCommittee();
  return (
    <>
      <CommitteeSection title="Executive Committee">
        {members.filter((m) => m.committeeType === CommitteeType.EXECUTIVE).map(member => (
          <CommitteeCard
            key={member.id}
            name={member.name}
            position={member.role}
            imageUrl={`${process.env.NEXT_PUBLIC_STRAPI_URL}${member.photo.url}`}
          />
        ))}
      </CommitteeSection>
      <CommitteeSection title="Developers Subcommittee">
        {members.filter((m) => m.committeeType === CommitteeType.DEVELOPERS).map(member => (
          <CommitteeCard
            key={member.id}
            name={member.name}
            position={member.role}
            imageUrl={`${process.env.NEXT_PUBLIC_STRAPI_URL}${member.photo.url}`}
          />
        ))}
      </CommitteeSection>
    </>
  );
}
