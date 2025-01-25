import SponsorTile from "./SponsorTile";

interface SponsorProps {
  className?: string;
}

export default function Sponsors() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold">SPONSORS</h1>
      <div className="flex flex-wrap gap-2 items-center justify-center py-2">
        <SponsorTile className="text-white !bg-black font-bold">
          Black Rock
        </SponsorTile>
        <SponsorTile className="text-white !bg-[#2b5343] font-bold">
          NCR Atelos
        </SponsorTile>
          <SponsorTile className="text-black !bg-[#fb741c] font-bold">
          DoraHacks
        </SponsorTile>
      </div>
    </div>
  );
}
