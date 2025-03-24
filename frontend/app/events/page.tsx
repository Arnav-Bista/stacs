// frontend/app/events/page.tsx

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import client from "@/lib/api";
import { Event, Paginated } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

export async function fetchEvents(numberOfEvents?: number): Promise<Event[]> {
  try {
    let query = 'events?populate=media&sort=datetime:desc';
    if (numberOfEvents) {
      query += `&pagination[limit]=${numberOfEvents}`;
    }
    const response = await client.fetch(query, { method: 'GET' });
    const data: Paginated<Event> = await response.json();
    console.log('Fetched events:', JSON.stringify(data.data, null, 2));
    return data.data;
  } catch (error) {
    console.log('Error fetching events:', error);
    throw new Error('Failed to fetch events: ' + (error instanceof Error ? error.message : 'Unknown error'));
  }
}

// Notice the component is async to allow server-side data fetching
export default async function Events() {
  // Fetch events from the Strapi backend
  const events = await fetchEvents();

  return (
    <div className="min-h-screen p-4 md:p-8">
      {/* Decorative Corner Elements */}
      <div className="hidden md:block relative">
        <div className="absolute top-10 left-0 z-0">
          <Image src="/decor.svg" width={50} height={50} alt="rocket" />
        </div>
        <div className="absolute top-2 right-0 z-0">
          <Image
            className="transform rotate-180"
            src="/decor.svg"
            width={50}
            height={50}
            alt="rocket"
          />
        </div>
      </div>

      {/* Title */}
      <h1 className="relative text-4xl font-bold text-center mb-16 mt-8 z-10">
        OUR EVENTS 2025
      </h1>

      {events.length === 0 && (
        <div className="text-center text-lg font-semibold text-gray-600">
          No upcoming events. Check back later!
        </div>
      )}


      {/* Timeline for larger screens */}
      <div className={`${events.length === 0 ? "hidden" : "hidden md:block"} relative max-w-5xl mx-auto`}>
        {/* Center Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-timeline-marker" />
        {/* Arrow Heads */}
        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-2">
          <Image
            className="mx-auto"
            src="/rocket.svg"
            width={50}
            height={50}
            alt="rocket"
          />
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 -top-2">
          <Image
            className="mx-auto"
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
              key={event.id}
              className={`flex items-center mb-24 ${index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
            >
              {/* Timeline Marker */}
              <div
                className={`absolute left-1/2 transform ${index % 2 === 0
                  ? "translate-x-5 ml-auto"
                  : "-translate-x-[calc(100%+20px)]"
                  }`}
              >
                <Image
                  className="mx-auto"
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
              <Card
                className={`w-[calc(50%-2rem)] ${index % 2 === 0 ? "mr-auto" : "ml-auto"
                  }`}
              >
                <div className="rounded-lg bg-white p-6 min-h-[200px]">
                  <div className="relative w-full h-60 mb-4">
                    <Image
                      src={event.media && event.media[0] ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${event.media[0].url}` : "/placeholder.png"}
                      alt={event.title}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                  {/* Tags /}
                  // <div className="flex gap-2 mb-3 flex-wrap">
                  //   {event.tags?.map((tag: string, tagIndex: number) => (
                  //     <Badge
                  //       key={tagIndex}
                  //       variant="secondary"
                  //       className="bg-timeline-tag text-black"
                  //     >
                  //       {tag}
                  //     </Badge>
                  //   ))}
                  // </div>
                  */}
                  {/* Title and Button */}
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <h3 className="text-lg font-semibold">{event.title}</h3>
                      <h4 className="text-sm text-muted-foreground">{event.location}</h4>
                    </div>
                    <Link
                      href={`/events/${event.documentId}`}
                      className={`${buttonVariants({ variant: "outline" })} h-10 w-32 my-4 mx-1`}
                    >
                      View Event
                    </Link>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile layout */}
      <div className="md:hidden space-y-6">
        {events.map((event, index: number) => (
          <div key={event.id} className="bg-white rounded-lg p-4">
            <div className="text-sm font-medium text-gray-600 mb-2">
              {new Date(event.datetime).toLocaleDateString("en-GB", {
                month: "short",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                hour12: false
              })}
            </div>
            <div className="relative w-full h-48 mb-4">
              <Image
                src={event.media && event.media[0] ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${event.media[0].url}` : "/placeholder.png"}
                alt={event.title}
                fill
                className="object-cover rounded-md"
              />
            </div>
            {/* <Image
              src={event.image || "https://placeholder.pics/svg/400x128"}
              alt={event.title}
              className="w-full object-cover rounded-md mb-4"
              width={400}
              height={128}
            /> */}
            {

            }
            <div className="flex gap-2 mb-3 flex-wrap">
              {/*
                event.tags?.map((tag: string, tagIndex: number) => (
                <Badge
                  key={tagIndex}
                  variant="secondary"
                  className="bg-timeline-tag text-black"
                >
                  {tag}
                </Badge>
              ))
              */}
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <h3 className="text-lg font-semibold">{event.title}</h3>
              <Link
                href={`/events/${event.documentId}`}
                className={`${buttonVariants({ variant: "outline" })} h-10 w-full sm:w-32`}
              >
                View Event
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
