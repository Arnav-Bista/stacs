import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface CommitteeCardProps {
  name: string;
  position: string;
  description: string;
  imageUrl?: string;
}

export default function CommitteeCardExtended({ name, position, description, imageUrl }: CommitteeCardProps) {
  const initials = name.split(' ').map(word => word[0]).join('').toUpperCase();

  return (
    <Card className="w-80 h-64 rounded-2xl shadow-lg border border-gray-200">
      <CardContent className="p-6 grid grid-cols-2 gap-4">
        <div className="flex flex-col items-center gap-4 pt-6">
          <Avatar className="w-24 h-24 shadow-md border-2 border-gray-300">
            {imageUrl ? (
              <AvatarImage src={imageUrl} alt={name} />
            ) : (
              <AvatarFallback className="text-2xl">{initials}</AvatarFallback>
            )}
          </Avatar>
          <div className="text-center">
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-sm text-muted-foreground">{position}</p>
          </div>
        </div>
        <div className="py-6">
          <p className="text-xs text-left">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
}

