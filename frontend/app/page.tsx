import AboutUs from "./components/AboutUs";
import StacsLogo from "./components/StacsLogo";
import Sponsors from "./components/Sponsors";
import Events from "./components/Events";
import Committee from "./components/Committee";
import MurrayCurveBackground from "./components/Background";

export default function Home() {
  return (
    <main className="flex justify-center px-4">
      <div className="flex flex-col gap-y-10 max-w-4xl w-full relative p-8 rounded-lg" style={{
        background: 'linear-gradient(to right, rgba(255,255,255,0.3) calc(100% - 32px), transparent)',
        backdropFilter: 'blur(4px)',
        WebkitBackdropFilter: 'blur(4px)',
      }}>
        <StacsLogo />
        <AboutUs />
        <Sponsors />
        <Events />
        <Committee />
      </div>
    </main>
  );
}
