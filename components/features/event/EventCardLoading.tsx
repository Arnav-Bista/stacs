import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

interface EventCardLoadingProps {
  className?: string
}

export default function EventCardLoading({ className }: EventCardLoadingProps) {
  return (
    <Card className={`max-w-xs overflow-hidden rounded-xl w-full ${className}`}>
      {/* Image skeleton */}
      <Skeleton className="h-36 w-full" />
      
      <CardContent className="p-4">
        <div className="flex gap-4">
          {/* Date column skeleton */}
          <div className="flex flex-col items-center">
            <Skeleton className="h-3 w-8 mb-1" />
            <Skeleton className="h-6 w-6" />
          </div>
          
          {/* Content column skeleton */}
          <div className="space-y-1 flex-1">
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-3 w-3/4" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
