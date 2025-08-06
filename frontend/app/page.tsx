import Committee from "@/components/features/committee/Committee";
import EventsHome from "@/components/features/event/EventsHome";
import AboutUs from "@/components/features/home/AboutUs";
import SponsorsHome from "@/components/features/sponsors/SponsorsHome";
import Logo from "@/components/shared/Logo";
import { fetchSponsors } from "../lib/api";
import { Button } from "@/components/ui/button";
import { ReactNode, Suspense } from "react";
import SponsorsHomeLoading from "@/components/features/sponsors/SponsorsHomeLoading";
import EventHomeLoading from "@/components/features/event/EventsHomeLoading";

export default function HomePage() {
  fetchSponsors();
  return (
    <>
      <Logo className="my-8" />
      <Button className="my-4 w-3/4 mx-auto !bg-primary">BECOME A MEMBER</Button>
      <h1>ABOUT US</h1>
      <HomeText>
        The St. Andrews Computing Society (<strong>STACS</strong>) exists to provide a social group and support network for people interested in computer science and all it's niches.
        <br />
        <br />
        STACS is all about community, hosting BBQs, pub quizzes and socials, as well as Hack The Bubble, our 12-hour intro hackathon, and Capture the Flag (CTF), a cyber security competition. We also run workshops, researched and led by our STACS Developers, that cover programming, game development, cybersecurity, AI and more!
        <br />
        <br />
        Memberships are available to any student at the University of St. Andrews through the <a className="underline text-primary" href="union here">union website</a>. We charge £3 the minimum we can as a union-affiliated society.
      </HomeText>
      <div className="w-5/6 h-[0.75] bg-gray-300 rounded-full my-4" />
      <p className="text-xs max-w-2xl text-center text-gray-500">
        The curve you see in our logo and in the background is the Murray Polygon. The Murray Polygon is a generalisation of Peano Polygons capable of traversing arbitrary rectangular regions. The technique developed by Professor Cole (Yes! Jack Cole!).
      </p>

      <h1>SUPPORT & SPONSORSHIP</h1>
      <Suspense fallback={<SponsorsHomeLoading />}>
        <SponsorsHome />
      </Suspense>
      <HomeText className="my-4">
        STACS offer sponsorship packages for companies across sectors who want to recruit technical talent from a top ranked university. We invite our sponsors to collaborate on custom events with our members, including career or technical talks and socials, and/or to sponsor and attend STACS Hack or CS Ball, our biggest/sell out events.
        <br />
      </HomeText>
      <Button className="my-4 w-3/4 mx-auto !bg-primary">SUPPORT US</Button>

      <h1>EVENTS</h1>
      <Suspense fallback={<EventHomeLoading />}>
        <EventsHome />
      </Suspense>
      <HomeText className="my-4">
        Our two largest events of the year are STACS Hack, our annual 24-hour hackathon, and the Computer Science Ball, where we host 150 students for dinner and a party. Our events are consistently well attended by our member base of 175+ students across CS and other tech related disciplines.
      </HomeText>
      <Committee />
    </>
  );
}


function HomeText({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <p className={`text-sm max-w-2xl text-justify ${className}`}>
      {children}
    </p>
  );
}
