import { buttonVariants } from "@/components/ui/button";
import { Event } from "@/lib/types/event";
import Image from "next/image";
import Link from "next/link";
import EventCard from "./EventCard";

interface EventsTimelineProps {
  events: Event[];
}

export default function EventsTimeline({ events }: EventsTimelineProps) {
  if (events.length === 0) return null;

  return (
    <div className="hidden md:block relative max-w-5xl mx-auto">
      {/* Center Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-timeline-marker" />
      
      {/* Arrow Heads */}
      <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-2">
        <Image
          className="mx-auto rotate-180"
          src="/rocket.svg"
          width={50}
          height={50}
          alt="rocket"
        />
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 -top-2">
        <Image
          className="mx-auto rotate-180"
          src="/rocket.svg"
          width={50}
          height={50}
          alt="rocket"
        />
      </div>

      {/* Events */}
      <div className="relative">
        {events.map((event, index: number) => (
          <div
            key={event.eventId}
            className={`flex items-center mb-24 ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            {/* Timeline Marker */}
            <div
              className={`absolute left-1/2 transform ${
                index % 2 === 0
                  ? "translate-x-5 ml-auto"
                  : "-translate-x-[calc(100%+20px)]"
              }`}
            >
              <Image
                className="mx-auto rotate-180"
                src="/rocket.svg"
                width={50}
                height={50}
                alt="rocket"
              />
              <div className="mt-2 text-3xl font-medium text-center">
                {new Date(event.datetime).toLocaleDateString("en-GB", {
                  month: "short",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: false
                })}
              </div>
            </div>

            {/* Event Card */}
            <div
              className={`w-[calc(50%-2rem)] ${
                index % 2 === 0 ? "mr-auto" : "ml-auto"
              }`}
            >
              <div className="space-y-4">
                <EventCard
                  title={event.title}
                  alt={event.title}
                  date={event.datetime}
                  location={event.location}
                  imgUrl={event.media && event.media[0] ? event.media[0] : undefined}
                  href={`/events/${event.eventId}`}
                  className="w-full max-w-none"
                />
                <Link
                  href={`/events/${event.eventId}`}
                  className={`${buttonVariants({ variant: "outline" })} h-10 w-full`}
                >
                  View Event
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}