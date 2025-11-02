import Link from "next/link";
import { Button } from "../ui/button";
import { ReactNode } from "react";

interface LinkButtonProps {
  href: string;
  className?: string;
  buttonClassName?: string;
  children: ReactNode
}

export default function LinkButton(props: LinkButtonProps) {
  return (
    <Link href={props.href} className={props.className}>
      <Button className={props.buttonClassName}>
        {props.children}
      </Button>
    </Link>
  );
}
