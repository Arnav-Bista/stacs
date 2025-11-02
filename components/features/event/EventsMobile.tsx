import { buttonVariants } from "@/components/ui/button";
import { Event } from "@/lib/types/event";
import EventCard from "./EventCard";
import Link from "next/link";

interface EventsMobileProps {
  events: Event[];
}

export default function EventsMobile({ events }: EventsMobileProps) {
  return (
    <div className="md:hidden space-y-6">
      {events.map((event) => (
        <div key={event.eventId} className="space-y-4">
          <EventCard
            title={event.title}
            alt={event.title}
            date={event.datetime}
            location={event.location}
            imgUrl={event.media && event.media[0] ? event.media[0] : undefined}
            className="w-full max-w-none"
          />
          <Link
            href={`/events/${event.eventId}`}
            className={`${buttonVariants({ variant: "outline" })} h-10 w-full`}
          >
            View Event
          </Link>
        </div>
      ))}
    </div>
  );
}