import { buttonVariants } from "@/components/ui/button";
import EventCard from "./EventCard";
import Link from "next/link";
import { fetchEvents } from "@/lib/api/events";
import { Event } from "@/lib/types/event";

export default async function EventsHome() {

  const events = await fetchEvents();

  const offset = Math.floor(Math.random() * 10);
  const eventsErrorTitle = [
    "Errored Workshop",
    "Might not be maintanance 😔",
    "STACS Error Event",
    "Might be maintanance 🤞",
  ];
  const eventsErrorMessage = [
    "Seems like we need more than 2 potatoes for our server...",
    "The backend is being a little silly",
    "Our servers are touching grass, will be back soon!",
    "I'm a teapot",
    "Cause of error: an error occurred",
  ];

  if (events instanceof Error) {
    return (
      <div className="flex flex-wrap justify-center gap-6 w-full">
        {Array.from({ length: 3 }).map((_, index) => (
          <EventCard
            key={index}
            alt={eventsErrorMessage[(index + offset) % eventsErrorMessage.length]}
            title={eventsErrorTitle[(index + offset) % eventsErrorTitle.length]}
            date={
              new Date().toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })}
            location="No idea!"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap justify-center gap-6 w-full">
      {events.map((event, index: number) => (
        <EventCard
          key={index}
          title={event.title}
          alt={event.title}
          date={
            new Date(event.datetime).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            })}
          location={event.location}
          imgUrl={ (event.media ?? [])[0]?.url && `${process.env.NEXT_PUBLIC_STRAPI_URL}${(event.media ?? [])[0]?.url}`}
        />
      ))}
    </div>
  );
}
// <Link href="/events" className={`${buttonVariants({ variant: "outline" })} h-10 w-32 my-4`}>See More</Link>
