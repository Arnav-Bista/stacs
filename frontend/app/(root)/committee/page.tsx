import CommitteeCardExtended from "@/components/features/committee/CommitteeCardExtended";
import { fetchCommittee } from "@/lib/api";
import { CommitteeType } from "@/lib/types";

export default async function Committee() {
  const members = await fetchCommittee();
  return (
    <>
      <h1 className="mt-8">MEET THE COMMITTEE</h1>
      <h2>EXECUTIVE</h2>
      <p className="text-center">
        The team responsible for the overarching club, overseeing operations, sponsors, flagship events and money.
      </p>
      <div className="flex flex-wrap justify-center w-full gap-4 mt-4 ">
        {members.filter((m) => m.committeeType === CommitteeType.EXECUTIVE).map(member => (
          <CommitteeCardExtended
            key={member.id}
            name={member.name}
            position={member.role}
            imageUrl={`${process.env.NEXT_PUBLIC_STRAPI_URL}${member.photo?.url}`}
            description={member.description}
          />
        ))}
      </div>
      <h2>DEVS</h2>
      <p className="text-center">
        The team responsible for workshops, the CTF, seeking student speakers and organising events for the love of the game.
      </p>
      <div className="flex flex-wrap justify-center w-full gap-4 mt-4">
        {members.filter((m) => m.committeeType === CommitteeType.DEVELOPERS).map(member => (
          <CommitteeCardExtended
            key={member.id}
            name={member.name}
            position={member.role}
            imageUrl={`${process.env.NEXT_PUBLIC_STRAPI_URL}${member.photo?.url}`}
            description={member.description}
          />
        ))}
      </div>
    </>
  );
}
