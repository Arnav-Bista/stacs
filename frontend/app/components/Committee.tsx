import CommitteeCard from "./CommitteeCard";

export default function Committee() {
  return (
    <div className="flex flex-col items-center justify-center w-full space-y-12">
      <section className="flex flex-col items-center w-full">
        <h2 className="text-3xl font-bold mb-4 text-center px-4 break-words">EXECUTIVE COMMITTEE</h2>
        <div className="flex flex-row flex-wrap justify-center max-w-6xl mx-auto px-4 gap-4">
          <CommitteeCard
            name="Tamzid Khandoker"
            position="President"
          />
          <CommitteeCard
            name="Ben Vardy"
            position="Treasurer"
          />
          <CommitteeCard
            name="Lucas Bookey"
            position="First Year"
          />
          <CommitteeCard
            name="Marcus Darwin"
            position="Events Manager"
          />
          <CommitteeCard
            name="Sophia Terry"
            position="Secretary"
          />
          <CommitteeCard
            name="Verity Powell"
            position="I forgot"
          />
          <CommitteeCard
            name="Xuan Wu"
            position="Social Media & Designer"
          />
        </div>
      </section>

      <section className="flex flex-col items-center w-full">
        <h2 className="text-3xl font-bold mb-4 text-center px-4 break-words">DEVELOPERS SUBCOMMITTEE</h2>
        <div className="flex flex-row flex-wrap justify-center max-w-6xl mx-auto px-4 gap-4">
          <CommitteeCard
            name="Arnav Bista"
            position="President"
          />
          <CommitteeCard
            name="Jake Brockwell"
            position="Security"
          />
          <CommitteeCard
            name="Adam Kuka"
            position="Designer & Generative AI"
          />
          <CommitteeCard
            name="Hassan Mahmoud"
            position="Game Development"
          />
          <CommitteeCard
            name="Torrance Semple"
            position="Second Year"
          />
          <CommitteeCard
            name="Matthew Pancer"
            position="Math Nerd"
          />
        </div>
      </section>
    </div>
  );
}
