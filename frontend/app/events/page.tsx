import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

interface TimelineEvent {
  date: string
  title: string
  tags: string[]
}

const events: TimelineEvent[] = [
  {
    date: "January 31st",
    title: "AI Conclave 2025",
    tags: ["Workshops", "AI Projects", "Games"],
  },
  {
    date: "February 28th",
    title: "AI Conclave 2025",
    tags: ["Workshops", "AI Projects", "Games"],
  },
  {
    date: "March 31st",
    title: "AI Conclave 2025",
    tags: ["Workshops", "AI Projects", "Games"],
  },
]

export default function Events() {
  return (
    <div className="min-h-screen bg-white p-4 md:p-8">
      {/* Decorative Corner Elements */}
      <div className="relative">
        <div className="absolute top-10 left-0">
          <Image src="/decor.svg" width={50} height={50} alt="rocket" />
        </div>
        <div className="absolute top-2 right-0">
            <Image className="transform rotate-180" src="/decor.svg" width={50} height={50} alt="rocket" />
        </div>
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-16 mt-8">OUR EVENTS 2025</h1>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto">
        {/* Center Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-timeline-marker" />
        {/* Arrow Head */}
        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-2">
            <Image className="mx-auto" src="/rocket.svg" width={50} height={50} alt="rocket" /> 
        </div>
        {/* Arrow Head */}
        <div className="absolute left-1/2 transform -translate-x-1/2 -top-2">
            <Image className="mx-auto" src="/rocket.svg" width={50} height={50} alt="rocket" /> 
        </div>

        {/* Events */}
        <div className="relative">
          {events.map((event, index) => (
            <div key={index} className={`flex items-center mb-24 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>
              {/* Timeline Marker */}
              <div className={`absolute left-1/2 transform ${index % 2 === 0 ? "transform translate-x-5" : "transform -translate-x-[calc(100%+20px)]" }`}>
                {/* className={`${index % 2 === 0 ? "" : "ml-auto" }`} */}
                <Image className="mx-auto" src="/rocket.svg" width={50} height={50} alt="rocket" />
                <div className="mt-2 text-sm font-medium text-center">{event.date}</div>
              </div>

              {/* Event Card */}
              <div className={`w-[calc(50%-2rem)] ${index % 2 === 0 ? "mr-auto pr-8" : "ml-auto pl-8"}`}>
                <div className="rounded-lg p-6 min-h-[200px]">
                  {/* Placeholder for content */}
                  {/* <div className="h-32 bg-timeline-card rounded-md mb-4" /> */}
                  <img src="https://placeholder.pics/svg/400x128" alt={event.title} className="object-cover rounded-md mb-4" />

                  {/* Tags */}
                  <div className="flex gap-2 mb-3 flex-wrap">
                    {event.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="bg-timeline-tag text-black">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Title and Button */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{event.title}</h3>
                    <Link href="/events/1" className={`${buttonVariants({ variant: "outline" })} h-10 w-32 my-4`}>View Event</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
