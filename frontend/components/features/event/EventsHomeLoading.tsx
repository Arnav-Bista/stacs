import EventCardLoading from "./EventCardLoading";

export default function EventHomeLoading() {
  return (
    <div className="flex flex-wrap justify-center gap-6 w-full">
      {
        Array.from({ length: 3 }).map((_, index) => <EventCardLoading key={`event-loading-${index}`} />)
      }
    </div>
  );
}
