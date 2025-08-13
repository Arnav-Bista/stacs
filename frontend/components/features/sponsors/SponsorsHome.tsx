import Link from "next/link";
import SponsorTile, { SponsorTileLogo, SponsorTileLogoLoading, SponsorTileSmall } from "./SponsorTile";
import { buttonVariants } from "@/components/ui/button";
import { fetchSponsors } from "@/lib/api";

interface SponsorProps {
  className?: string;
}

export default async function SponsorsHome() {
  const sponsors = await fetchSponsors();

  if (sponsors instanceof Error) {
    return (
    <div key="sponsor-home" className="flex flex-wrap gap-2 items-center justify-center py-2">
      {Array.from({ length: 4}).map((_, index) => (
        <>
          <SponsorTileLogo
            key={`${index}-logo`}
            name=":("
            // imageUrl={sponsor.logoSmall?.url}
          />
        </>
      ))}
    </div>
    );
  }
  return (
    <div key="sponsor-home" className="flex flex-wrap gap-2 items-center justify-center py-2">
      {sponsors.map((sponsor, index) => (
        <>
          <SponsorTileLogo
            key={`${index}-logo`}
            name={sponsor.name}
            imageUrl={sponsor.logoSmall?.url}
          />
        </>
      ))}
    </div>
  );
}

// <Link href="/sponsor" className={`${buttonVariants({ variant: "outline" })} h-10 w-32 my-4`}>Support Us</Link>
