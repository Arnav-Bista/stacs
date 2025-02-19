import { Card, CardContent } from "@/components/ui/card"

interface EventCardProps {
  title: string
  date: string
  location: string
  imgUrl: string
}

export default function EventCard({ title, date, location, imgUrl }: EventCardProps) {
  return (
    <Card className="max-w-xs overflow-hidden rounded-xl">
      {/* <div className="h-36 bg-muted" /> */}
      <img className="h-36 w-full object-cover" src={imgUrl} alt={title} />
      <CardContent className="p-4">
        <div className="flex gap-4">
          <div className="flex flex-col items-center">
            <span className="text-xs text-gray-400 uppercase">{date.split(' ')[1]}</span>
            <span className="text-xl font-bold">{date.split(' ')[0]}</span>
          </div>
          <div className="space-y-1">
            <h3 className=" font-semibold">{title}</h3>
            <p className="text-xs text-muted-foreground">{location}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

