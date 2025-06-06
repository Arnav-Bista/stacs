import { Card } from "@/components/ui/card";
import Image from "next/image";

interface SponsorTileProps {
  className?: string;
  children?: React.ReactNode;
  name: string;
  imageUrl?: string;
  website?: string;
  textColor?: string;
  backgroundColor?: string;
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
  return (
  <Card>
      <img
        src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${props.imageUrl || "https://placeholder.pics/svg/100"}`}
        alt={props.name || "Sponsor Logo"}
        className="h-20 max-w-72 object-contain m-4"
      />
    </Card>
  );
}
