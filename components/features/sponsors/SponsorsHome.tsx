import { SponsorTileLogo } from "./SponsorTile";
import { fetchSponsors } from "@/lib/markdown/sponsors";
import { Card } from "@/components/ui/card";

interface SponsorProps {
  className?: string;
}

export default async function SponsorsHome() {
  const sponsors = await fetchSponsors();

  return (
    <div key="sponsor-home" className="flex flex-wrap gap-2 items-center justify-center py-2">
      {sponsors.map((sponsor, index) => (
        <SponsorTileLogo
          key={`${index}-logo`}
          name={sponsor.name}
          imageUrl={sponsor.logoSmall}
        />
      ))}
    </div>
  );
}
      // <Link href="/sponsor" className={`${buttonVariants({ variant: "outline" })} h-10 w-32 my-4`}>Support Us</Link>
