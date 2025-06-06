import { CommitteeMember, CommitteeType } from "@/lib/types";
import CommitteeCardExtended from "./CommitteeCardExtended";

interface CommitteeSectionProps {
  children: React.ReactNode;
  title: string;
}

export default function CommitteeSection(props: CommitteeSectionProps) {
  return (
    <section className="flex flex-col items-center w-full">
      <h2 className="text-4xl font-bold mb-4 py-4 text-center px-4 break-words">{props.title}</h2>
      <div className="flex flex-wrap justify-center max-w-6xl w-full">
        {props.children}
      </div>
    </section>
  );
}
