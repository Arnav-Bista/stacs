import Link from "next/link";
import Image from "next/image";

import { buttonVariants } from "@/components/ui/button";
import { fetchSponsors } from "@/lib/api";
import { SponsorTileLarge, SponsorTileLogo } from "@/components/features/sponsors/SponsorTile";

export default async function SponsorsPage() {
  const sponsors = await fetchSponsors();
  return (
    <main className="flex justify-center px-4">
      <div className="flex flex-col gap-y-10 max-w-4xl w-full relative items-center p-8 rounded-lg" style={{
        background: 'linear-gradient(to right, rgba(255,255,255,0.3) 70%, transparent)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
      }}>
        <div className="flex flex-col justify-center items-center p-10 w-full gap-4">
          <h1 className="text-4xl font-bold text-center">OUR SPONSORS</h1>
          <p className="text-xs max-w-2xl text-center">
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
          </p>
        </div>

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
        <Link href="/sponsors/support" className={`${buttonVariants({ variant: "outline" })} h-10 w-32 my-4`}>Support Us</Link>
      </div>
    </main>
  );
}

