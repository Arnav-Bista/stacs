import CommitteeCardExtended from "./CommitteeCardExtended";

export default function CommitteeExtended() {
  return (
    <div className="flex flex-col items-center justify-center w-full space-y-12">
      <section className="flex flex-col items-center w-full">
        <h2 className="text-3xl font-bold mb-4 text-center px-4 break-words">EXECUTIVE COMMITTEE</h2>
        <div className="flex flex-col flex-wrap justify-center max-w-6xl mx-auto px-4 gap-4">
          <CommitteeCardExtended
            name="Tamzid Khandoker"
            position="President"
            description="Our glorious leader."
          />
          <CommitteeCardExtended
            name="Ben Vardy"
            position="Treasurer"
            description="The money man."
          />
          <CommitteeCardExtended
            name="Lucas Bookey"
            position="First Year"
            description="Minion Manager."
          />
          <CommitteeCardExtended
            name="Marcus Darwin"
            position="Events Manager"
            description="Man behind the action."
          />
          <CommitteeCardExtended
            name="Sophia Terry"
            position="Secretary"
            description="Email meme dealer."
          />
          <CommitteeCardExtended
            name="Verity Powell"
            position="I forgot"
            description="I forgor"
          />
          <CommitteeCardExtended
            name="Xuan Wu"
            position="Social Media & Designer"
            description="Propaganda minister."
          />
        </div>
      </section>

      <section className="flex flex-col items-center w-full">
        <h2 className="text-3xl font-bold mb-4 text-center px-4 break-words">DEVELOPERS SUBCOMMITTEE</h2>
        <div className="flex flex-col flex-wrap justify-center max-w-6xl mx-auto px-4 gap-4">
          <CommitteeCardExtended
            name="Arnav Bista"
            position="President"
            description="PLACEHOLDER"
          />
          <CommitteeCardExtended
            name="Jake Brockwell"
            position="Security"
            description="PLACEHOLDER"
          />
          <CommitteeCardExtended
            name="Adam Kuka"
            position="Designer & Generative AI"
            description="PLACEHOLDER"
          />
          <CommitteeCardExtended
            name="Hassan Mahmoud"
            position="Game Development"
            description="PLACEHOLDER"
          />
          <CommitteeCardExtended
            name="Torrance Semple"
            position="Second Year"
            description="PLACEHOLDER"
          />
          <CommitteeCardExtended
            name="Matthew Pancer"
            position="Math Nerd"
            description="PLACEHOLDER"
          />
        </div>
      </section>
    </div>
  );
}
