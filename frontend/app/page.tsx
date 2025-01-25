import AboutUs from "./components/AboutUs";
import StacsLogo from "./components/StacsLogo";
import Sponsors from "./components/Sponsors";
import Events from "./components/Events";
import Committee from "./components/Committee";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-10">
      <StacsLogo />
      <AboutUs />
      <Sponsors />
      <Events />
      <Committee />
    </div>
  );
}
