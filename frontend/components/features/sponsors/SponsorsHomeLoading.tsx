import { SponsorTileLogoLoading } from "./SponsorTile";

export default function SponsorsHomeLoading() {
  return (
    <div className="flex flex-wrap gap-2 items-center justify-center py-2">
      {Array.from({ length: 6 }).map((_, index) => (
        <SponsorTileLogoLoading key={`sponsor-loading-${index}`} />
      ))}
    </div>
  );
}
