import { Button, buttonVariants } from "@/components/ui/button";
import EventCard from "./EventCard";
import Link from "next/link";
import { fetchEvents } from "@/lib/api";

export default async function Events() {

  const events = await fetchEvents();

  // select the first 3 events
  const selectedEvents = events.slice(0, 3);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h1 className="text-3xl font-bold mb-4">EVENTS</h1>
      <div className="flex flex-row flex-wrap justify-center gap-4 max-w-6xl mx-auto px-4">
        {selectedEvents.map((event: any, index: number) => (
          <EventCard
            key={index}
            title={event.title}
            date={
              new Date(event.datetime).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            })}
            location={event.location}
            imgUrl={`${process.env.NEXT_PUBLIC_STRAPI_URL}${event.media[0].url}` || "https://placeholder.pics/svg/400x128"}
          />
        ))}
      </div>
      <Link href="/events" className={`${buttonVariants({ variant: "outline" })} h-10 w-32 my-4`}>See More</Link>

    </div>
  );
}

// <EventCard
//   title="Workshop: Generative AI"
//   date="13th February"
//   location="JC 1.33"
// />
//
