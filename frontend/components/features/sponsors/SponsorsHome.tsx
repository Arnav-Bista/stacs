import Link from "next/link";
import SponsorTile, { SponsorTileLogo, SponsorTileSmall } from "./SponsorTile";
import { Button, buttonVariants } from "@/components/ui/button";
import { fetchSponsors } from "@/lib/api";

interface SponsorProps {
  className?: string;
}

export default async function SponsorsHome() {
  const sponsors = await fetchSponsors();
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold">OUR SPONSORS</h1>
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
      <div className="max-w-2xl text-justify text-s my-6">
        STACS offer sponsorship packages for companies across sectors who want to recruit technical talent from a top ranked university. We invite our sponsors to collaborate on custom events with our members, including career or technical talks and socials, and/or to sponsor and attend STACS Hack or CS Ball, our biggest/sell out events.
      </div>
      <Button className="bg-[#00527b] w-full my-4 max-w-2xl mx-auto"><p className="font-bold text-lg">SUPPORT US</p></Button>
    </div>
  );
}
      // <Link href="/sponsor" className={`${buttonVariants({ variant: "outline" })} h-10 w-32 my-4`}>Support Us</Link>
