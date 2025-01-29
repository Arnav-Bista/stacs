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
    .toUpperCase();

  return (
    <Card className="w-44">
      <CardContent className="flex flex-col items-center gap-4 pt-6">
        <Avatar className="w-24 h-24">
          {imageUrl ? (
            <AvatarImage src={imageUrl} alt={name} />
          ) : (
            <AvatarFallback className="text-xl">{initials}</AvatarFallback>
          )}
        </Avatar>
        <div className="text-center">
          <h3 className="font-semibold">{name}</h3>
          <p className="text-sm text-muted-foreground">{position}</p>
        </div>
      </CardContent>
    </Card>
  );
}

