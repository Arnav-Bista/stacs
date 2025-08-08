import Link from "next/link";
import Image from "next/image";

import { buttonVariants } from "@/components/ui/button";
import { fetchSponsors } from "@/lib/api";
import { SponsorTileLarge, SponsorTileLogo } from "@/components/features/sponsors/SponsorTile";

export default async function SponsorsPage() {
  const sponsors = await fetchSponsors();
  return (
    <>
      <h1>OUR SPONSORS</h1>
      <p>STACS would not be what it is without their support.</p>
      <div className="flex flex-row gap-y-4 gap-x-20 justify-center items-center">
        {
          sponsors.map((sponsor, index) =>
            <SponsorTileLogo
              key={index}
              name={sponsor.name}
              imageUrl={sponsor.logoSmall?.url || "https://placeholder.pics/svg/100"}
              textColor={sponsor.textColor}
              backgroundColor={sponsor.backgroundColor}
              className="w-80 h-40"
            />
          )
        }
      </div>
    </>
  );
}

