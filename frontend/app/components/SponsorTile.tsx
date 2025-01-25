
interface SponsorTileProps {
  className?: string;
  children?: React.ReactNode;
}

export default function SponsorTile({ className, children }: SponsorTileProps) {
  return (
    <div className={`bg-gray-400 w-44 h-10 flex items-center justify-center rounded-sm mx-2 ${className || ''}`}>
      {children}
    </div>
  );
}
