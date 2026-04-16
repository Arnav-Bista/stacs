import SponsorshipTile from "@/components/features/sponsors/SponsorshipTile";
import SponsorshipTilePlatinum from "@/components/features/sponsors/SponsorshipTilePlatinum";
import SponsorshipTileSingle from "@/components/features/sponsors/SponsorshipTileSingle";
import CircularInfo from "@/components/shared/CircularInfo";
import HorizontalDivider from "@/components/shared/HorizontalDivider";
import EventSponsorshipSection from "@/components/features/sponsors/EventSponsorshipSection";
import AvailabilityBadge from "@/components/features/sponsors/AvailabilityBadge";


export default function SponsorSupportPage() {
  return (
    <main className="flex justify-center px-4">
      <div className="flex flex-col justify-center items-center p-10 w-full gap-4">
        <h1 className="text-4xl font-bold">SUPPORT US</h1>
        <p className="text-s max-w-3xl text-justify">
          STACS provides networking and support for students interested in computer science at one of the Guardian's <b>top ranked</b> UK universities.
          Our goal is to work with our sponsors to develop our members' technical and interpersonal skills and expose them to
          professional opportunities well before graduation. STACS events help foster a sense of belonging and community within the university as well as excitement for the latest technology.
        </p>

        {/* horizontal bar */}
        <HorizontalDivider>
          <div className="flex flex-row flex-wrap justify-center gap-4">
            <SponsorshipTile
              price="£250+"
              title="Single Event"
              color="bg-gradient-to-br from-blue-600 to-indigo-700"
              className="max-w-sm"
            >
              <p className="font-bold text-base mb-2">Interested in hosting a single event?</p>
              <p className="text-sm leading-relaxed">Contact us to plan an event for our members alongside advertisement on all of our platforms.</p>
            </SponsorshipTile>
            <SponsorshipTile
              price="FREE"
              title="One Time Advertising"
              color="bg-gradient-to-br from-fuchsia-500 to-purple-600"
              className="max-w-md"
            >
              <p className="font-bold text-base mb-3">One time promotion for a job role in 2025/26</p>
              <ul className="list-disc space-y-2 text-sm">
                <li>One appearance of one job description in our weekly newsletter</li>
                <li>For more advertising, upgrade to bronze tier!</li>
              </ul>
            </SponsorshipTile>
          </div>
        </HorizontalDivider>
        <br />
        <HorizontalDivider>
          <p className="font-bold text-3xl">Year Long Sponsorship Packages 2025/26</p>
          <div className="flex flex-wrap justify-center gap-4">
            <SponsorshipTile
              title="Bronze Tier"
              color="bg-gradient-to-br from-amber-700 to-orange-800"
              price="£500"
              className="max-w-sm"
            >
              <div className="text-s text-left">
                <ul className="list-disc space-y-2">
                  <li>Logo and advertisement on STACS social media channels, website and weekly email</li>
                  <li>Share job advertisements and opportunities with our members</li>
                  <li><b>10% discount</b> on any premium events package to be used alongside the purchase of society package</li>
                </ul>
              </div>
            </SponsorshipTile>
            <SponsorshipTile
              title="Silver Tier"
              color="bg-gradient-to-br from-slate-300 to-slate-500"
              price="£1000"
              className="max-w-sm"
              cardClassName="min-h-72 flex flex-col"
            >
              <p className="text-sm font-bold text-center mb-3 text-slate-700">Bronze Benefits +</p>
              <div className="text-s text-left">
                <ul className="list-disc space-y-2">
                  <li>Advertisement on social media at beginning of semester</li>
                  <li>One <b>free event</b> can be organised in cooperation with STACS for our members</li>
                </ul>
              </div>
            </SponsorshipTile>
            <SponsorshipTile
              title="Gold Tier"
              color="bg-gradient-to-br from-yellow-400 to-amber-600"
              price="£1500"
              className="max-w-md"
            >
              <p className="text-sm font-bold text-center mb-3 text-amber-800">Bronze and Silver Benefits +</p>
              <div className="text-s text-left">
                <ul className="list-disc space-y-2">
                  <li>Company logo on our <b>merchandise</b></li>
                  <li>Regular advertisement on social media</li>
                  <li>One <b>additional free event</b> can be organised (2 total)*</li>
                  <li><b>Free advertising</b> at Hack the Bubble and CTF</li>
                </ul>
              </div>
            </SponsorshipTile>
          </div>

          <br />
        </HorizontalDivider>
        <HorizontalDivider>
          <p className="font-bold text-3xl mb-4">Premium Event Packages 2025/26</p>
          <p>
            Our premium events are our most well attended and most popular of the year.
            Participating sponsors are able to attend, spend time with our members, and see what they can do!
            This is a great opportunity to see what our top talent has to offer and communicate your brand to
            those who are soon to enter the workforce.
          </p>
        </HorizontalDivider>
        <HorizontalDivider>
          <p className="font-bold text-3xl mb-4">STACS Hack - Hackathon Packages (24 hours)</p>
          <p>
            STACS Hack is one of the main events of the year and is attended by a wide range of
            companies and students where participants spend 24 hours creating a themed project in
            our university labs! In the past, our leading sponsors have set additional challenges for
            participants and played a major role in the event itself. Sponsors are featured on our
            themed merchandise, which we often see students wearing long after the event.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <SponsorshipTile
              price="£350"
              title="Standard"
              color="bg-gradient-to-br from-blue-500 to-blue-700"
              className="max-w-sm"
              cardClassName="min-h-[27rem] flex flex-col"
            >
              <div className="text-s text-left mb-4">
                <ul className="list-disc space-y-1">
                  <li>Logo on event advertisements</li>
                  <li>Media distribution at event</li>
                  <li>Intern and graduate opportunities advertised at the hackathon</li>
                  <li>Set a small challenge at the hackathon with one standout winner</li>
                </ul>
              </div>
              <div className="text-center mt-auto mb-4">
                <AvailabilityBadge text="3 Available" variant="success" />
              </div>
            </SponsorshipTile>
            <SponsorshipTile
              price="£800"
              title="Ultimate"
              color="bg-gradient-to-br from-emerald-500 to-teal-600"
              className="max-w-sm"
              cardClassName="min-h-[27rem] flex flex-col"
            >
              <p className="text-sm font-bold text-center mb-3 text-emerald-700">Standard Benefits +</p>
              <div className="text-s text-left mb-4">
                <ul className="list-disc space-y-1">
                  <li>Largest logo on branded merchandise</li>
                  <li>Logo on all presentations used for event</li>
                  <li>Host one workshop back-to-back with lunch or dinner</li>
                  <li>Have a say in the event's theme</li>
                  <li>Set a major challenge for the hackathon</li>
                  <li>Judge alongside BCS</li>
                </ul>
              </div>
              <div className="text-center mt-auto mb-4 flex gap-4 justify-evenly">
                <AvailabilityBadge text="1 Available" variant="success" />
                <AvailabilityBadge text="PARTNERED" variant="error" /> 
              </div>
            </SponsorshipTile>
          </div>
        </HorizontalDivider>
        <EventSponsorshipSection
          title='STACS Hack the Bubble - "Mini" Hackathon (12 hours)'
          description="STACS Hack the Bubble is our introductory hackathon that preps students for STACS Hack. Over 12 hours, students create a themed project in our university labs. This package is perfect for an introduction to the university and to what our society members can do!"
          packageTitle="Hack the Bubble Package"
          price="£500"
          color="bg-gradient-to-br from-blue-500 to-blue-700"
          benefits={[
            "Logo on event advertisements",
            "Media distribution at event",
            "Intern and graduate opportunities advertised at the hackathon",
            "Set a small challenge at the hackathon with one standout winner"
          ]}
          availability="(1 Available)"
        />
        <EventSponsorshipSection
          title="STACS Capture the Flag - Cyber security Challenge"
          description="STACS CTF is our newest event, where students compete over 5 hours to complete cyber security puzzles across different categories and skill levels, including cryptography, cracking codes, and finding hidden data, bugs, and vulnerabilities. This event supports beginners getting into the field, and allows advanced students to show their skills."
          packageTitle="CTF Package"
          price="£500"
          color="bg-gradient-to-br from-purple-500 to-indigo-600"
          benefits={[
            "Logo on event advertisements",
            "Media distribution at event",
            "Intern and graduate opportunities advertised at the competition",
            "Sponsored category for which you may provide the questions"
          ]}
        />
        <EventSponsorshipSection
          title="University of St Andrews Annual Computer Science Ball"
          description="The USTA Computer Science Ball unites students, faculty, and industry to celebrate the School's achievements. With a formal dinner, entertainment, and networking, it offers sponsors prominent exposure to an engaged audience. Support the event to boost your brand among top talent and show commitment to computer science education."
          packageTitle="CS Ball Package"
          price="£500"
          color="bg-gradient-to-br from-rose-500 to-pink-600"
          benefits={[
            "2 tickets to the ball",
            "Speech at the ball",
            "Pre and post thanks on social media",
            "Logo on event advertisements",
            "Promotional media distribution at ticket collection and the event"
          ]}
        />
        {/* Contact Section */}
        <div className="mt-16 w-full max-w-4xl">
          <div className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-md rounded-2xl p-8 border border-white/10">
            <h2 className="text-3xl font-semibold mb-4 text-foreground">
              Ready to Partner With Us?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              We'd love to discuss how we can work together to create meaningful opportunities
              for our members while achieving your company's goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:stacs@st-andrews.ac.uk?subject=Sponsorship Inquiry"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-8 py-3 text-lg"
              >
                Contact Us About Sponsorship
              </a>
              <a
                href="/sponsors"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-8 py-3 text-lg"
              >
                View Current Sponsors
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-border/20">
              <p className="text-sm text-muted-foreground">
                For any questions about sponsorship packages or custom arrangements,
                please don't hesitate to reach out to us directly.
              </p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}

