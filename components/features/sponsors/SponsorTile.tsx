import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";

interface SponsorTileProps {
  className?: string;
  name: string;
  imageUrl?: string;
  website?: string;
  backgroundColor?: string;
}

export function SponsorTileLogo(props: SponsorTileProps) {
  const card = (
    <Card
      className={`group flex items-center justify-center overflow-hidden border-border/50 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-border hover:shadow-md ${props.className || ""}`}
      style={{ backgroundColor: props.backgroundColor || "#ffffff" }}
    >
      <img
        src={props.imageUrl || "https://placeholder.pics/svg/100"}
        alt={props.name || "Sponsor logo"}
        className="max-h-full max-w-full object-contain"
      />
    </Card>
  );

  if (!props.website) return card;

  return (
    <Link
      href={props.website}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={props.name}
      className="block"
    >
      {card}
    </Link>
  );
}

export function SponsorTileLogoLoading({ className }: { className?: string }) {
  return (
    <Card>
      <Skeleton className={`h-28 w-40 rounded ${className}`} />
    </Card>
  );
}
