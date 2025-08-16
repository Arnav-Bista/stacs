import { fetchEvents } from "@/lib/api";
import Image from "next/image";
import PageDecorations from "@/components/features/event/PageDecorations";
import EventsTimeline from "@/components/features/event/EventsTimeline";
import EventsMobile from "@/components/features/event/EventsMobile";

export const dynamic = 'force-dynamic';

export default async function Events() {
  const events = await fetchEvents();

  return (
    <div className="min-h-screen p-4 md:p-8">
      <PageDecorations />

      <h1 className="relative text-4xl font-bold text-center mb-16 mt-8 z-10">
        OUR EVENTS 2025
      </h1>

      {!(events instanceof Error) && events.length === 0 && (
        <div className="text-center text-lg font-semibold text-gray-600">
          No upcoming events. Check back later!
        </div>
      )}

      {events instanceof Error && (
        <div className="text-center text-lg font-semibold text-gray-600">
          Something went wrong. Check back later!
        </div>
      )}

      {
        !(events instanceof Error) && (
          <>
            <EventsTimeline events={events} />
            <EventsMobile events={events} />
          </>
        )
      }
    </div>
  );
}
