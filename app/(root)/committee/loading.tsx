import CommitteeCardExtendedLoading from "@/components/features/committee/CommitteeCardExtendedLoading";

export default function CommitteePageLoading() {
  return (
    <>
      <h1 className="mt-8">MEET THE COMMITTEE</h1>
      <h2>EXECUTIVE</h2>
      <p className="text-center">
        The team responsible for overseeing operations, sponsors, flagship events and handling finance.
      </p>
      <div className="flex flex-wrap justify-center w-full gap-4 mt-4">
        {Array.from({ length: 7 }).map((_, index) => <CommitteeCardExtendedLoading key={index} />)}
      </div>
      <h2>DEVS</h2>
      <p className="text-center">
        The team responsible for workshops, the CTF, seeking student speakers and organising events for the love of the game.
      </p>
      <div className="flex flex-wrap justify-center w-full gap-4 mt-4">
        {Array.from({ length: 6 }).map((_, index) => <CommitteeCardExtendedLoading key={index} />)}
      </div>
    </>
  );
}
