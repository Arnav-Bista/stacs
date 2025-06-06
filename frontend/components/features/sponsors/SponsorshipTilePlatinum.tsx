interface SponsorshipTileProps {
  className?: string;
  packageTier?: string;
  packageColour?: string;
  packagePrice?: string;
  packageDescription?: string;
  children?: React.ReactNode;
}

export default function SponsorshipTilePlatinum({ className, packagePrice = "£0", packageTier="package-tier", packageColour="gray", children }: SponsorshipTileProps) {
  return (
    <div className={`bg-[#f5ebe1] w-fit h-84 px-5 py-2 items-start justify-center rounded-2xl mx-2 ${className || ''}`}>
      <div 
        style={{ backgroundColor: packageColour }} 
        className="w-50 h-10 flex items-center justify-center rounded-xl mx-2}">
        <h2 className="text-white text-2xl font-bold text-center">{packageTier}</h2>

      </div>
      <div className="py-4 flex-col w-34 items-center justify-center">
      {children}
      </div>
    </div>
  );
}

