import { Button, buttonVariants } from "@/components/ui/button";
import EventCard from "./EventCard";
import Link from "next/link";

export default function Events() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h1 className="text-3xl font-bold mb-4">EVENTS</h1>
      <div className="flex flex-row flex-wrap justify-center gap-4 max-w-6xl mx-auto px-4">
        <EventCard
          title="STACS Hack 2025 - 24 Hour Hackathon"
          date="20th February"
          location="JH Labs"
        />
        <EventCard
          title="Workshop: Genetic Algorithms"
          date="26th February"
          location="JC 1.33"
        />
        <EventCard
          title="Hack the Bubble 2024 - 12 Hour Hackathon"
          date="30th October"
          location="JH Labs"
        />
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
