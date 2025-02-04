import StacsLogo from "../components/StacsLogo";
import Sponsors from "../components/Sponsors";
import MurrayCurveBackground from "../components/Background";

export default function Home() {
  return (
    <main className="flex justify-center px-4">
      <div className="flex flex-col gap-y-10 max-w-4xl w-full relative p-8 rounded-lg" style={{
        background: 'linear-gradient(to right, rgba(255,255,255,0.3) 70%, transparent)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
      }}>
        <StacsLogo />
        <Sponsors />
      </div>
    </main>
  );
}

