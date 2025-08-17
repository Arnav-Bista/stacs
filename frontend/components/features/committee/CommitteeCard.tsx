import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface CommitteeCardProps {
  name: string;
  position: string;
  imageUrl?: string;
}

export default function CommitteeCard({ name, position, imageUrl }: CommitteeCardProps) {
  const initials = name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <Card className="w-full max-w-xs mx-auto hover:shadow-lg transition-shadow duration-200 border-0 bg-gradient-to-br from-white to-gray-50">
      <CardContent className="flex flex-col items-center gap-4 p-6">
        <Avatar className="w-20 h-20 ring-2 ring-primary/10 ring-offset-2">
          {imageUrl ? (
            <AvatarImage 
              src={imageUrl} 
              alt={`Portrait of ${name}`}
              className="object-cover"
            />
          ) : (
            <AvatarFallback className="text-lg font-semibold bg-primary/10 text-primary">
              {initials}
            </AvatarFallback>
          )}
        </Avatar>
        <div className="text-center space-y-1">
          <h3 className="font-semibold text-foreground leading-tight">{name}</h3>
          <p className="text-sm text-muted-foreground font-medium">{position}</p>
        </div>
      </CardContent>
    </Card>
  );
}

