import { SponsorTileLogo } from "./SponsorTile";
import { fetchSponsors } from "@/lib/markdown/sponsors";

export default async function SponsorsHome() {
  const sponsors = await fetchSponsors();

  return (
    <div key="sponsor-home" className="flex flex-wrap gap-4 items-stretch justify-center py-2">
      {sponsors.map((sponsor, index) => (
        <SponsorTileLogo
          key={`${index}-logo`}
          name={sponsor.name}
          imageUrl={sponsor.logoSmall}
          website={sponsor.website}
          backgroundColor={sponsor.backgroundColor}
          className="w-56 h-28"
        />
      ))}
    </div>
  );
}
