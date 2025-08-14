import { SponsorTileLogo } from "./SponsorTile";
import { fetchSponsors } from "@/lib/api";
import { Card } from "@/components/ui/card";

interface SponsorProps {
  className?: string;
}

export default async function SponsorsHome() {
  const sponsors = await fetchSponsors();
  const offset = Math.floor(Math.random() * 10);
  const sponsorsErrorMessages = [
    "If you see this error again after a while, then we are not doing maintanance. Backend is just broken 😥",
    "We're getting the STACS DEVS team on top of this!",
    "Our servers are having a wee Scottish break ☕",
    "I can't prove it right now but really have sponsors!"
  ];

  if (sponsors instanceof Error) {
    return (
      <div key="sponsor-home" className="flex flex-wrap gap-2 items-center justify-center py-2">
        {Array.from({ length: 4 }).map((_, index) => (
          <Card className="w-48 h-40 p-5 text-xs" key={index}>
            {
              sponsorsErrorMessages[(index + offset) % sponsorsErrorMessages.length]
            }
          </Card>
        ))}
      </div>
    );
  }
  return (
    <div key="sponsor-home" className="flex flex-wrap gap-2 items-center justify-center py-2">
      {sponsors.map((sponsor, index) => (
        <SponsorTileLogo
          key={`${index}-logo`}
          name={sponsor.name}
          imageUrl={sponsor.logoSmall?.url}
        />
      ))}
    </div>
  );
}
