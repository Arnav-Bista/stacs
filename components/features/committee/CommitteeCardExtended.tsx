import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface CommitteeCardProps {
  name: string;
  position: string;
  description: string;
  imageUrl?: string;
}

export default function CommitteeCardExtended({ name, position, description, imageUrl }: CommitteeCardProps) {
  const initials = name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <Card className="w-full max-w-md mx-auto h-auto min-h-[280px] rounded-2xl hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50/50 overflow-hidden">
      <CardContent className="p-0">
        <div className="flex flex-col h-full">
          <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-primary/5 to-primary/10">
            <Avatar className="w-16 h-16 ring-2 ring-white shadow-md">
              {imageUrl ? (
                <AvatarImage 
                  src={imageUrl} 
                  alt={`Portrait of ${name}`}
                  className="object-cover"
                />
              ) : (
                <AvatarFallback className="text-lg font-semibold bg-primary text-primary-foreground">
                  {initials}
                </AvatarFallback>
              )}
            </Avatar>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-bold text-foreground leading-tight truncate">
                {name}
              </h3>
              <p className="text-sm font-medium text-primary/80 truncate">
                {position}
              </p>
            </div>
          </div>
          <div className="flex-1 p-6">
            <p className="text-sm text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

