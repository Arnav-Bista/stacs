import { CommitteeType } from "@/lib/types/index";
import CommitteeCard from "./CommitteeCard";
import CommitteeSection from "./CommitteeSection";
import { fetchCommittee } from "@/lib/api/index";

export default async function Committee() {
  const members = await fetchCommittee();

  if (members instanceof Error) {
    const errorNames = [
      "Committee.exe",
      "Maintanance?",
      "404 Member",
      "418",
      "Potato Server"
    ];

    const errorMessages = [
      "Having a wee Scottish break ☕",
      "I hope this is maintanance",
      "Touching grass, back soon 🌱",
      "I'm a teapot 🫖",
      "Needs more than 2 potatoes..."
    ];

    const getRandomError = (index: number) => ({
      name: errorNames[index % errorNames.length],
      position: errorMessages[index % errorMessages.length]
    });

    return (
      <>
        <CommitteeSection title="Executive Committee">
          {Array.from({ length: 5 }).map((_, index) => {
            const error = getRandomError(index);
            return (
              <CommitteeCard
                key={index}
                name={error.name}
                position={error.position}
              />
            );
          })}
        </CommitteeSection>
        <CommitteeSection title="Developers Subcommittee">
          {Array.from({ length: 5 }).map((_, index) => {
            const error = getRandomError(index + 5);
            return (
              <CommitteeCard
                key={index}
                name={error.name}
                position={error.position}
              />
            );
          })}
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
