import SponsorshipTile from "@/components/features/sponsors/SponsorshipTile";
import HorizontalDivider from "@/components/shared/HorizontalDivider";
import AvailabilityBadge from "@/components/features/sponsors/AvailabilityBadge";

interface EventSponsorshipSectionProps {
  title: string;
  description: string;
  packageTitle: string;
  price: string;
  benefits: string[];
  availability?: string;
  color?: string;
}

export default function EventSponsorshipSection(props: EventSponsorshipSectionProps) {
  return (
    <HorizontalDivider>
      <p className="font-bold text-3xl mb-4">{props.title}</p>
      <div className="flex flex-wrap justify-center items-stretch gap-4">
        <div className="flex-1 min-w-[300px] max-w-2xl flex items-center">
          <p className="text-base leading-relaxed">{props.description}</p>
        </div>
        <SponsorshipTile
          price={props.price}
          title={props.packageTitle}
          color={props.color || "bg-gradient-to-br from-blue-500 to-blue-700"}
          className="max-w-sm"
          cardClassName="flex flex-col"
        >
          <p className="text-s text-left mb-4">
            <ul className="list-disc space-y-1">
              {props.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </p>
          {props.availability && (
            <div className="text-center mt-auto">
              <AvailabilityBadge text={props.availability.replace(/[()]/g, '')} variant="success" />
            </div>
          )}
        </SponsorshipTile>
      </div>
    </HorizontalDivider>
  );
}
