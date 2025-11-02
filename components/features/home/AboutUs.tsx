export default function AboutUs() {
  return (
    <div className="flex flex-col justify-center items-center w-full gap-4">
      <h1 className="text-3xl font-bold">ABOUT US</h1>
      <p className="text-sm max-w-2xl text-center text-justify">
        The St. Andrews Computing Society (STACS) exists to provide a social group and support network for people interested in computer science and all it's niches.
        <br />
        <br />
        STACS is all about community, hosting BBQs, pub quizzes and socials, as well as Hack The Bubble, our 12-hour intro hackathon, and Capture the Flag (CTF), a cyber security competition. We also run workshops, researched and led by our STACS Developers, that cover programming, game development, cybersecurity, AI and more!
        <br />
        <br />
        Our two largest events of the year are STACS Hack, our annual 24-hour hackathon, and the Computer Science Ball, where we host 150 students for dinner and a party. Our events are consistently well attended by our member base of 175+ students across CS and other tech related disciplines.
        <br />
        <br />
        STACS offer sponsorship packages (hyperlink here) for companies across sectors who want to recruit technical talent from a top ranked university. We invite our sponsors to collaborate on custom events with our members, including career or technical talks and socials, and/or to sponsor and attend STACS Hack or CS Ball, our biggest/sell out events.
        <br />
        <br />
        Memberships are available to any student at the University of St. Andrews through the union website (hyperlink here). We charge £3 the minimum we can as a union-affiliated society.
        <br />
        <br />
        Whether you're sick of debugging your code in labs or just here for the free pizza, STACS is where tech meets good vibes. Come for the events, stay for the shenanigans!
      </p>
      <div
        className="w-5/6 h-[0.75] bg-gray-300 rounded-full"
      />
      <p className="text-xs max-w-2xl text-center text-gray-500">
        The curve you see in our logo and in the background is the Murray Polygon. The Murray Polygon is a generalisation of Peano Polygons capable of traversing arbitrary rectangular regions. The technique developed by Professor Cole (Yes! Jack Cole!).
      </p>
    </div>
  );
}


