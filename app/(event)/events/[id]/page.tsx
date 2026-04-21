import { Calendar, Clock, MapPin, Users, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
// import Image from "next/image"
import { fetchEventById, fetchEvents } from "@/lib/markdown/events"
import { notFound } from "next/navigation"
import { AgendaItem } from "@/lib/types/event"
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export async function generateStaticParams() {
  const events = await fetchEvents()
  return events.map((event) => ({ id: event.eventId }))
}

function formatDateTime(datetime: string | undefined, options: Intl.DateTimeFormatOptions) {
  if (!datetime) return "Date not available";
  try {
    return new Date(datetime).toLocaleString("en-US", options);
  } catch {
    return "Invalid date";
  }
}

function formatAgendaTime(agendaDatetime: string | undefined, eventDatetime: string) {
  if (!agendaDatetime) return "Time not available";
  try {
    const agendaDate = new Date(agendaDatetime);
    const eventDate = new Date(eventDatetime);

    // Check if the dates are different
    const agendaDay = agendaDate.toDateString();
    const eventDay = eventDate.toDateString();

    const timeStr = agendaDate.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
    });

    if (agendaDay !== eventDay) {
      // Show date indicator if different day
      const dateStr = agendaDate.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });
      return (
        <div className="flex flex-col">
          <span className="text-xs text-muted-foreground">{dateStr}</span>
          <span>{timeStr}</span>
        </div>
      );
    }

    return timeStr;
  } catch {
    return "Invalid time";
  }
}

export default async function EventDetail({
    params,
  }: {
    params: Promise<{ id: string }>
  }) {
  const id = (await params).id
  const event = await fetchEventById(id)

  if (!event || !event.title) {
    notFound()
  }

  const agendaItems = event.agenda || [];

  const speakersMap = new Map();
  agendaItems.forEach((item: AgendaItem) => {
    if (item?.speaker?.name && !speakersMap.has(item.speaker.name)) {
      speakersMap.set(item.speaker.name, item.speaker);
    }
  });
  const speakers = Array.from(speakersMap.values());

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-timeline-icon text-white py-16">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=1200')] opacity-20 bg-cover bg-center" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex gap-2 mb-4">
            {event.tags?.split(',').map((tag: string, tagIndex: number) => (
                <Badge
                  key={tagIndex}
                  variant="secondary"
                  className="bg-white/20 backdrop-blur-sm text-white border border-white/20"
                >
                  {tag.trim()}
                </Badge>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">{event.title}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>
                  {formatDateTime(event.datetime, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                    weekday: "long",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>
                  {formatDateTime(event.datetime, {
                    hour: "numeric",
                    minute: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>{event.location || "Location not specified"}</span>
              </div>
              {/* <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>500 Expected Attendees</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Event Image */}
      {event.media && event.media[0] && (
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-64 md:h-80 rounded-xl overflow-hidden bg-gradient-to-br from-muted/30 to-muted/50 flex items-center justify-center">
              <img
                src={event.media[0]}
                alt={event.title}
                className="max-h-full max-w-full object-contain p-8"
              />
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* <div className="flex justify-between items-center mb-8">
            <Button size="lg" className="bg-timeline-icon hover:bg-timeline-icon/90">
              Register Now
            </Button>
            <Button variant="outline" size="icon">
              <Share2 className="h-4 w-4" />
            </Button>
          </div> */}

          <Tabs defaultValue="about" className="mb-12">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="agenda">Agenda</TabsTrigger>
              <TabsTrigger value="speakers">Speakers</TabsTrigger>
              {/* <TabsTrigger value="venue">Venue</TabsTrigger> */}
            </TabsList>

            <TabsContent value="about" className="mt-6">
              <div className="prose prose-lg max-w-none prose-headings:text-timeline-icon prose-a:text-timeline-icon hover:prose-a:text-timeline-icon/80">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {event.content || "No description available."}
                </ReactMarkdown>
              </div>
            </TabsContent>

            <TabsContent value="agenda" className="mt-6">
              <div className="space-y-6">
                {agendaItems.length > 0 ? (
                  agendaItems.map((item: AgendaItem, index: number) => (
                    <Card key={index}>
                      <CardContent className="flex gap-4 p-6">
                        <div className="w-24 flex-shrink-0">
                          <div className="text-sm font-semibold text-timeline-icon">
                            {formatAgendaTime(item?.datetime, event.datetime)}
                          </div>
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">{item?.title || "Untitled session"}</h3>
                          <p className="text-sm text-muted-foreground mb-2">{item?.description || "No description available"}</p>
                          {item?.speaker?.name && (
                            <Badge variant="secondary" className="bg-timeline-tag text-black">
                              {item.speaker.name}
                            </Badge>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <p>No agenda items available.</p>
                )}
              </div>
            </TabsContent>

            <TabsContent value="speakers" className="mt-6">
              {speakers.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {speakers.map((speaker, index: number) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="aspect-square relative mb-4 rounded-lg overflow-hidden">
                          <img
                            src={speaker?.image || "https://placeholder.pics/svg/250x250"}
                            alt={speaker?.name || "Speaker"}
                            className="object-cover"
                            width={250}
                            height={250}
                          />
                        </div>
                        <h3 className="font-semibold mb-1">{speaker?.name || "Name not available"}</h3>
                        <p className="text-sm text-muted-foreground mb-1">{speaker?.role || "Role not specified"}</p>
                        <p className="text-sm text-muted-foreground">{speaker?.company || "Company not specified"}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <p>No speakers available.</p>
              )}
            </TabsContent>

            {/* <TabsContent value="venue" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="aspect-video relative mb-6 rounded-lg overflow-hidden">
                    <img src="https://placeholder.pics/svg/800x400" alt="Venue" className="object-cover" />
                  </div>
                  <h3 className="font-semibold mb-4">Tech Convention Center</h3>
                  <p className="text-muted-foreground mb-4">
                    123 Innovation Drive
                    <br />
                    Silicon Valley, CA 94025
                  </p>
                  <div className="flex gap-4">
                    <Button variant="outline">Get Directions</Button>
                    <Button variant="outline">View on Map</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent> */}

          </Tabs>
        </div>
      </div>
    </div>
  )
}
