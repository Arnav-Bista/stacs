interface AvailabilityBadgeProps {
  text: string;
  variant?: "default" | "success" | "warning" | "error";
}

export default function AvailabilityBadge(props: AvailabilityBadgeProps) {
  const variantStyles = {
    default: "bg-muted-foreground/20 text-muted-foreground border-muted-foreground/30",
    success: "bg-green-500/20 text-green-700 border-green-500/30",
    warning: "bg-yellow-500/20 text-yellow-700 border-yellow-500/30",
    error: "bg-red-500/20 text-red-700 border-red-600/30 font-bold"
  };

  const style = variantStyles[props.variant || "default"];

  return (
    <div className={`inline-block px-3 py-1 rounded-full text-xs border-2 ${style}`}>
      {props.text}
    </div>
  );
}
