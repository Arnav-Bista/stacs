import { Card } from "@/components/ui/card";
import { ReactNode } from "react";

interface SponsorOptionTile {
  title: string;
  children: ReactNode;
  price: string;
  avalibility?: string;
  color?: string;
  className?: string;
  cardClassName?: string;
}

export default function SponsorOptionTile(props: SponsorOptionTile) {
  return (
    <div className={props.className}>
      <div className={`relative text-center py-2 px-4 rounded-3xl ${props.color} text-white font-bold translate-y-1/2 z-10 overflow-visible w-min mx-auto text-nowrap shadow-lg`}>
        {props.title}
      </div>
      <Card className={`relative p-8 bg-muted z-0 shadow-xl border-2 border-border/50 ${props.cardClassName}`}>
        {props.children}
      </Card>
      <div className={`relative text-center py-3 px-6 rounded-3xl ${props.color} text-white font-bold -translate-y-1/2 z-10 overflow-visible w-min mx-auto text-nowrap text-xl shadow-lg`}>
        {props.price}
      </div>
    </div>
  );
}
