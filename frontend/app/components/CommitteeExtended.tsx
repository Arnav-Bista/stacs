import CommitteeCardExtended from "./CommitteeCardExtended";
import { fetchCommittee } from "@/lib/api";

export default async function CommitteeExtended() {
  const members = await fetchCommittee();
  console.log(members);
  return (
    <div className="flex flex-col items-center justify-center w-full space-y-12">
      <section className="flex flex-col items-center w-full">
        <h2 className="text-4xl font-bold mb-4 py-4 text-center break-words">EXECUTIVE COMMITTEE</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl gap-x-16 gap-y-6 place-items-center">
          {members.filter((member) => member.executiveCommittee).map((member) => (
            <CommitteeCardExtended
              name={member.name} 
              position={member.role} 
              description={member.description}
              imageUrl={`${process.env.NEXT_PUBLIC_STRAPI_URL}${member.photo.url}`}
            />
          ))}
        </div>
      </section>

      <section className="flex flex-col items-center w-full">
        <h2 className="text-4xl font-bold mb-4 py-4 text-center px-4 break-words">DEVELOPERS SUBCOMMITTEE</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 max-w-6xl gap-x-16 gap-y-6 place-items-center">
          {members.filter((member) => !member.executiveCommittee).map((member) => (
            <CommitteeCardExtended
              name={member.name} 
              position={member.role} 
              description={member.description}
              imageUrl={member.photo}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
