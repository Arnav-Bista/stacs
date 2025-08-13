import { Card, CardContent } from "@/components/ui/card"
import { AlertCircle, RefreshCw, User } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CommitteeCardExtendedErrorProps {
  onRetry?: () => void
  error?: string
}

export default function CommitteeCardExtendedError({ onRetry, error }: CommitteeCardExtendedErrorProps) {
  return (
    <Card className="w-80 h-64 rounded-2xl shadow-lg border border-gray-200">
      <CardContent className="p-6">
        <div className="grid grid-cols-2 gap-x-4 h-full">
          <div className="flex flex-col items-center gap-4 pt-6">
            {/* Error icon placeholder for avatar */}
            <div className="w-24 h-24 rounded-full bg-destructive/10 flex items-center justify-center border-2 border-destructive/20">
              <User className="h-8 w-8 text-destructive/60" />
            </div>
            
            {/* Error message */}
            <div className="text-center space-y-1">
              <p className="text-sm font-medium text-destructive">Failed to load</p>
              <p className="text-xs text-muted-foreground">committee member</p>
            </div>
          </div>
          
          {/* Error details and retry */}
          <div className="flex flex-col justify-center py-6 space-y-3">
            <div className="flex items-center gap-2 text-destructive">
              <AlertCircle className="h-4 w-4" />
              <span className="text-xs">Error loading data</span>
            </div>
            
            {error && (
              <p className="text-xs text-muted-foreground">{error}</p>
            )}
            
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
        </div>
      </CardContent>
    </Card>
  )
}