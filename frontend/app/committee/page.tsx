import MurrayCurveBackground from "../components/Background";
import CommitteeExtended from "../components/CommitteeExtended";

export default function Home() {
  return (
    <main className="flex justify-center px-4">
      <div className="flex flex-col gap-y-10 max-w-3xl w-full relative p-8 rounded-xl" style={{
        background: 'linear-gradient(to right, rgba(255,255,255,0.3) 70%, transparent)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
      }}>
        <div className="flex flex-col justify-center items-center p-10 w-full gap-4">
            <CommitteeExtended />
        </div>
      </div>
    </main>
  );
}
