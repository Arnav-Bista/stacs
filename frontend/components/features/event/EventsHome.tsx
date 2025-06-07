import { Button, buttonVariants } from "@/components/ui/button";
import EventCard from "./EventCard";
import Link from "next/link";
import { fetchEvents } from "@/lib/api/events";
import { Event } from "@/lib/types/event";

export default async function EventsHome() {

  const events: Event[] = await fetchEvents();

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h1 className="text-3xl font-bold mb-4">EVENTS</h1>
      <div className="text-s max-w-2xl text-justify mb-6">
        STACS is all about community, hosting BBQs, pub quizzes and socials, as well as Hack The Bubble, our 12-hour intro hackathon, and Capture the Flag (CTF), a cyber security competition. We also run workshops, researched and led by our STACS Developers, that cover programming, game development, cybersecurity, AI and more!
      </div>
      <div className="flex flex-wrap justify-center gap-6 w-full">
        {events.map((event, index: number) => (
          <EventCard
            key={index}
            title={event.title}
            date={
              new Date(event.datetime).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })}
            location={event.location}
            imgUrl={`${process.env.NEXT_PUBLIC_STRAPI_URL}${(event.media ?? [])[0]?.url}` || "https://placeholder.pics/svg/400x128"}
          />
        ))}
      </div>
      <Button className="bg-[#00527b] w-full my-6 max-w-2xl mx-auto font-bold text-lg">See More</Button>
      <div className="text-s max-w-2xl text-justify mb-6">
        Our two largest events of the year are STACS Hack, our annual 24-hour hackathon, and the Computer Science Ball, where we host 150 students for dinner and a party. Our events are consistently well attended by our member base of 175+ students across CS and other tech related disciplines.
      </div>

    </div>
  );
}
      // <Link href="/events" className={`${buttonVariants({ variant: "outline" })} h-10 w-32 my-4`}>See More</Link>
