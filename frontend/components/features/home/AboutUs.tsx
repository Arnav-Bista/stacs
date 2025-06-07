export default function AboutUs() {
  return (
    <div className="flex flex-col justify-center items-center w-full gap-4">
      <h1 className="text-3xl font-bold">ABOUT US</h1>
      <p className="text-s max-w-2xl text-justify">
        The St. Andrews Computing Society (STACS) exists to provide a social group and support network for people interested in computer science and all it's niches.
        <br /> <br />
        STACS is all about community, hosting BBQs, pub quizzes and socials, as well as Hack The Bubble, our 12-hour intro hackathon, and Capture the Flag (CTF), a cyber security competition. We also run workshops, researched and led by our STACS Developers, that cover programming, game development, cybersecurity, AI and more!
        <br /> <br />
        Whether you're sick of debugging your code in labs or just here for the free pizza, STACS is where tech meets good vibes. Come for the events, stay for the shenanigans!
      </p>
      <div className="w-full h-[0.5] bg-gray-300 rounded-full" />
      <p className="text-xs max-w-2xl text-center text-gray-500">
        The curve you see in our logo and in the background is the Murray Polygon. The Murray Polygon is a generalisation of Peano Polygons capable of traversing arbitrary rectangular regions. The technique developed by Professor Cole (Yes! Jack Cole!).
      </p>
    </div>
  );
}
