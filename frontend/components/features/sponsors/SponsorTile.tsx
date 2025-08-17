import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface SponsorTileProps {
  className?: string;
  children?: React.ReactNode;
  name: string;
  imageUrl?: string;
  website?: string;
  textColor?: string;
  backgroundColor?: string;
  tier?: "platinum" | "gold" | "silver" | "bronze";
}

export function SponsorTileLarge(props: SponsorTileProps) {
  return (
    <Card>

    </Card>
  );
}

export function SponsorTileSmall(props: SponsorTileProps) {
  console.log("SponsorTileSmall", props);
  return (
    <Card
      className={`flex flex-row items-center bg-[#ffaaaa] justify-start gap-4 p-4 ${props.className || ""}`}
      style={{
        backgroundColor: props.backgroundColor || "#ffffff",
      }}
    >
      <div className="flex flex-row gap-4">
        {props.imageUrl && <img
          src={props.imageUrl || "https://placeholder.pics/svg/50"}
          alt={props.name}
          width={50}
          height={50}
        />}
        <h2
          className={`align-middle my-auto text-lg font-semibold`}
          style={{
            color: props.textColor || "#000000",
          }}
        >
          {props.name || "Sponsor Name"}
        </h2>
      </div>
    </Card >
  );
}

export function SponsorTileLogo(props: SponsorTileProps) {
  const content = (
    <Card 
      className={`group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg bg-gradient-to-br from-white to-gray-50 border ${props.className || ""}`}
      style={{
        backgroundColor: props.backgroundColor || undefined,
      }}
    >
      <div className="relative p-6 flex flex-col items-center justify-center h-full">
        <div className="relative overflow-hidden rounded-lg">
          <img
            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${props.imageUrl || "https://placeholder.pics/svg/100"}`}
            alt={props.name || "Sponsor Logo"}
            className="h-16 max-w-48 object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        
        {props.name && (
          <h3 className="mt-3 text-sm font-medium text-center text-gray-700 group-hover:text-gray-900 transition-colors">
            {props.name}
          </h3>
        )}
        
        {props.website && (
          <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
            <div className="bg-white/30 backdrop-blur-md rounded-full p-2 shadow-lg border border-white/20">
              <ExternalLink className="h-4 w-4 text-gray-700" />
            </div>
          </div>
        )}
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
    </Card>
  );

  if (props.website) {
    return (
      <Link 
        href={props.website} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block"
      >
        {content}
      </Link>
    );
  }

  return content;
}

export function SponsorTileLogoLoading({ className }: { className?: string }) {
  return (
    <Card>
      <Skeleton className={`h-28 w-40 rounded ${className}`} />
    </Card>
  );
}
