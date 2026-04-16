import { getMurraySegment } from "@/lib/murray/points";

type Props = {
  segmentStart: number;
  segmentLength: number;
  active?: boolean;
  className?: string;
  strokeWidth?: number;
};

export default function MurrayUnderline({
  segmentStart,
  segmentLength,
  active = false,
  className = "",
  strokeWidth = 2,
}: Props) {
  const { polylinePoints, viewBox } = getMurraySegment(segmentStart, segmentLength);

  return (
    <svg
      className={`murray-underline ${className}`}
      data-active={active ? "true" : "false"}
      viewBox={viewBox}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <polyline
        points={polylinePoints}
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
        pathLength={1}
      />
    </svg>
  );
}
