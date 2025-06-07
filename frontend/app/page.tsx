import Committee from "@/components/features/committee/Committee";
import EventsHome from "@/components/features/event/EventsHome";
import AboutUs from "@/components/features/home/AboutUs";
import SponsorsHome from "@/components/features/sponsors/SponsorsHome";
import StacsLogo from "@/components/shared/StacsLogo";
import { fetchSponsors } from "../lib/api";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  fetchSponsors();
  return (
    <main className="flex justify-center px-4">
      <div className="flex flex-col gap-y-10 max-w-4xl w-full relative p-8 rounded-lg" style={{
        background: 'linear-gradient(to right, rgba(255,255,255,0.3) 70%, transparent)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
      }}>
        <StacsLogo />
        <AboutUs />

        <Button className="bg-[#00527b] w-full max-w-2xl mx-auto"><p className="text-lg font-bold">BECOME A MEMBER</p></Button>
        <SponsorsHome />
        <EventsHome />
        <Committee />
      </div>
    </main>
  );
}
