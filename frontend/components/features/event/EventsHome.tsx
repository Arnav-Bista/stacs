import { buttonVariants } from "@/components/ui/button";
import EventCard from "./EventCard";
import Link from "next/link";
import { fetchEvents } from "@/lib/api/events";
import { Event } from "@/lib/types/event";

export default async function EventsHome() {

  const events: Event[] = await fetchEvents();

  return (
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
  );
}
// <Link href="/events" className={`${buttonVariants({ variant: "outline" })} h-10 w-32 my-4`}>See More</Link>
