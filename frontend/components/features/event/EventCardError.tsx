import { Card, CardContent } from "@/components/ui/card"
import { AlertCircle, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"

interface EventCardErrorProps {
  className?: string
  onRetry?: () => void
  error?: string
}

export default function EventCardError({ className, onRetry, error }: EventCardErrorProps) {
  return (
    <Card className={`max-w-xs overflow-hidden rounded-xl w-full ${className}`}>
      <div className="h-36 bg-destructive/10 flex items-center justify-center">
        <AlertCircle className="h-8 w-8 text-destructive" />
      </div>
      
      <CardContent className="p-4">
        <div className="space-y-3 text-center">
          <div className="space-y-1">
            <h3 className="font-semibold text-destructive">Failed to load event</h3>
            {error && (
              <p className="text-xs text-muted-foreground">{error}</p>
            )}
          </div>
          
          {onRetry && (
            <Button 
              variant="outline" 
              size="sm" 
              onClick={onRetry}
              className="w-full"
            >
              <RefreshCw className="h-3 w-3 mr-1" />
              Retry
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}