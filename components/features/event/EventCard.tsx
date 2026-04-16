import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Calendar, MapPin } from "lucide-react"
import Link from "next/link"

interface EventCardProps {
  className?: string
  title: string
  alt: string
  date: string
  location: string
  imgUrl?: string
  href?: string
}

function parseDate(dateString: string) {
  try {
    const date = new Date(dateString)
    if (isNaN(date.getTime())) {
      const parts = dateString.split(' ')
      return {
        day: parts[0] || '',
        month: parts[1] || ''
      }
    }
    return {
      day: date.getDate().toString(),
      month: date.toLocaleDateString('en-US', { month: 'short' }).toUpperCase()
    }
  } catch {
    const parts = dateString.split(' ')
    return {
      day: parts[0] || '',
      month: parts[1] || ''
    }
  }
}

export default function EventCard(props: EventCardProps) {
  const { day, month } = parseDate(props.date)

  const card = (
    <Card className={cn("group overflow-hidden rounded-xl w-full transition-all duration-200 hover:shadow-lg hover:-translate-y-1", !props.href && "max-w-xs", !props.href && props.className)}>
      <div className="relative h-36 overflow-hidden">
        {props.imgUrl ? (
          <img
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            src={props.imgUrl}
            alt={props.alt}
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-primary/20 to-primary/10 backdrop-blur-sm flex items-center justify-center border border-primary/10">
            <h4 className="text-sm font-medium text-primary text-center px-4 leading-tight">
              {props.alt}
            </h4>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
      </div>

      <CardContent className="p-4">
        <div className="flex gap-4">
          <div className="flex flex-col items-center justify-center min-w-[3rem] p-2 bg-primary/10 backdrop-blur-sm rounded-lg border border-primary/20">
            <span className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
              {month}
            </span>
            <span className="text-xl font-bold text-primary leading-none">
              {day}
            </span>
          </div>

          <div className="flex-1 space-y-2 min-w-0">
            <h3 className="font-semibold text-foreground leading-tight line-clamp-2">
              {props.title}
            </h3>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <MapPin className="h-3 w-3 flex-shrink-0" />
              <span className="truncate">{props.location}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )

  if (props.href) {
    return (
      <Link href={props.href} className={cn("block max-w-xs w-full", props.className)}>
        {card}
      </Link>
    )
  }

  return card
}
