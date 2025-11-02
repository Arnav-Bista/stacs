import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function CommitteeCardSkeleton() {
  return (
    <Card className="w-80 h-64 rounded-2xl shadow-lg border border-gray-200">
      <CardContent className="p-6">
        <div className="grid grid-cols-2 gap-x-4">
          <div className="flex flex-col items-center gap-4 pt-6">
            {/* Avatar skeleton */}
            <Skeleton className="w-24 h-24 rounded-full" />
            
            {/* Name and position skeleton */}
            <div className="text-center space-y-2">
              <Skeleton className="h-5 w-32" />
              <Skeleton className="h-4 w-24" />
            </div>
          </div>
          
          {/* Description skeleton */}
          <div className="flex-col items-center py-6">
            <div className="space-y-2">
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-3 w-4/5" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
