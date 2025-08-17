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
        <div key={event.id} className="space-y-4">
          <EventCard
            title={event.title}
            alt={event.title}
            date={event.datetime}
            location={event.location}
            imgUrl={
              event.media && event.media[0]
                ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${event.media[0].url}`
                : undefined
            }
            className="w-full max-w-none"
          />
          <Link
            href={`/events/${event.documentId}`}
            className={`${buttonVariants({ variant: "outline" })} h-10 w-full`}
          >
            View Event
          </Link>
        </div>
      ))}
    </div>
  );
}