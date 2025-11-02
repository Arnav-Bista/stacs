import { CommitteeMember, CommitteeType } from "@/lib/types";
import CommitteeCardExtended from "./CommitteeCardExtended";

interface CommitteeSectionProps {
  children: React.ReactNode;
  title: string;
}

export default function CommitteeSection(props: CommitteeSectionProps) {
  return (
    <>
      <h2 className="text-4xl font-bold mb-4 py-4 text-center px-4 break-words">{props.title}</h2>
      <div className="flex flex-wrap justify-center w-full gap-y-4">
        {props.children}
      </div>
    </>
  );
}
