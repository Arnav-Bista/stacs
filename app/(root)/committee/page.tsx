import CommitteeCardExtended from "@/components/features/committee/CommitteeCardExtended";
import CommitteeCard from "@/components/features/committee/CommitteeCard";
import { fetchCommittee } from "@/lib/markdown/committee";
import { CommitteeType } from "@/lib/types";

export const revalidate = 300; // 5 minutes

export default async function Committee() {
  const members = await fetchCommittee();

  return (
    <>
      <h1 className="mt-8">MEET THE COMMITTEE</h1>
      <h2>EXECUTIVE</h2>
      <p className="text-center">
        The team responsible for overseeing operations, sponsors, flagship events and handling finance.
      </p>
      <div className="flex flex-wrap justify-center w-full gap-4 mt-4 ">
        {members.filter((m) => m.committeeType === CommitteeType.EXECUTIVE).map(member => (
          <CommitteeCardExtended
            key={member.memberId}
            name={member.name}
            position={member.role}
            imageUrl={member.photo}
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
            key={member.memberId}
            name={member.name}
            position={member.role}
            imageUrl={member.photo}
            description={member.description}
          />
        ))}
      </div>
    </>
  );
}
