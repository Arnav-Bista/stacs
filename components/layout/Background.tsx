import "@/app/styles/backgroundAnimation.css";

export default function MurrayCurveBackground() {
  return (
    <div className="fixed mt-4 h-[100vh] w-[100vw] inset-0 -z-10 overflow-hidden">
      <img
        src="/murray-bg.svg"
        alt=""
        aria-hidden
        className="murraybg w-full h-full object-cover"
      />
    </div>
  );
}
