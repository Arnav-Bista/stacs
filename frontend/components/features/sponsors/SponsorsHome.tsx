import Link from "next/link";
import SponsorTile, { SponsorTileLogo, SponsorTileSmall } from "./SponsorTile";
import { buttonVariants } from "@/components/ui/button";
import { fetchSponsors } from "@/lib/api";

interface SponsorProps {
  className?: string;
}

export default async function SponsorsHome() {
  const sponsors = await fetchSponsors();
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold">SPONSORS</h1>
      <div className="flex flex-wrap gap-2 items-center justify-center py-2">
        {/* {sponsors.map((sponsor, index) => ( */}
        {/*   <SponsorTileSmall */}
        {/*     key={index} */}
        {/*     name={sponsor.name} */}
        {/*     // imageUrl={`${process.env.NEXT_PUBLIC_STRAPI_URL}${sponsor.logoSmall?.url}`} */}
        {/*     textColor={sponsor.textColor} */}
        {/*     backgroundColor={sponsor.backgroundColor} */}
        {/*   /> */}
        {/* ))} */}
        {sponsors.map((sponsor, index) => (
          <SponsorTileLogo
            key={`${index}-logo`}
            name={sponsor.name}
            imageUrl={sponsor.logoSmall?.url}
          />
        ))}
      </div>
      <Link href="/sponsor" className={`${buttonVariants({ variant: "outline" })} h-10 w-32 my-4`}>Support Us</Link>
    </div>
  );
}
