import { CommitteeType } from "@/lib/types/index";
import CommitteeCard from "./CommitteeCard";
import CommitteeSection from "./CommitteeSection";
import { fetchCommittee } from "@/lib/api/index";

export default async function Committee() {
  const members = await fetchCommittee();

  if (members instanceof Error) {
    return (
      <>
        <CommitteeSection title="Executive Committee">
          {Array.from({ length: 5 }).map((_, index) => (
            <CommitteeCard
              key={index}
              name=":("
              position="We ran into an error!"
            // imageUrl={`${process.env.NEXT_PUBLIC_STRAPI_URL}${member.photo?.url}`}
            />
          ))}
        </CommitteeSection>
        <CommitteeSection title="Developers Subcommittee">
          {Array.from({ length: 5 }).map((_, index) => (
            <CommitteeCard
              key={index}
              name=":("
              position="We ran into an error!"
            // imageUrl={`${process.env.NEXT_PUBLIC_STRAPI_URL}${member.photo?.url}`}
            />
          ))}
        </CommitteeSection>
      </>
    );
  }
  return (
    <>
      <CommitteeSection title="Executive Committee">
        {members.filter((m) => m.committeeType === CommitteeType.EXECUTIVE).map(member => (
          <CommitteeCard
            key={member.id}
            name={member.name}
            position={member.role}
            imageUrl={`${process.env.NEXT_PUBLIC_STRAPI_URL}${member.photo?.url}`}
          />
        ))}
      </CommitteeSection>
      <CommitteeSection title="Developers Subcommittee">
        {members.filter((m) => m.committeeType === CommitteeType.DEVELOPERS).map(member => (
          <CommitteeCard
            key={member.id}
            name={member.name}
            position={member.role}
            imageUrl={`${process.env.NEXT_PUBLIC_STRAPI_URL}${member.photo?.url}`}
          />
        ))}
      </CommitteeSection>
    </>
  );
}
