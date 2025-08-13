import Image from "next/image";

export default function PageDecorations() {
  return (
    <div className="hidden md:block relative">
      <div className="absolute top-10 left-0 z-0">
        <Image src="/decor.svg" width={50} height={50} alt="rocket" />
      </div>
      <div className="absolute top-2 right-0 z-0">
        <Image
          className="transform rotate-180"
          src="/decor.svg"
          width={50}
          height={50}
          alt="rocket"
        />
      </div>
    </div>
  );
}