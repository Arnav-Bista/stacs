interface CircularInfoProps {
  text: string;
  emphasis: string;
}

export default function CircularInfo({ text, emphasis }: CircularInfoProps) {
  const [prefix, suffix] = text.split('[emphasis]');

  return (
    <div className="size-48 rounded-full bg-blue-200 inline-flex justify-center items-center">
      <p className="text-center text-s px-4 font-bold">
        {prefix}
        <i>{emphasis}</i>
        {suffix}
      </p>
    </div>
  );
}