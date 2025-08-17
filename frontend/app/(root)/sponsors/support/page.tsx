import SponsorshipTile from "@/components/features/sponsors/SponsorshipTile";
import SponsorshipTilePlatinum from "@/components/features/sponsors/SponsorshipTilePlatinum";
import SponsorshipTileSingle from "@/components/features/sponsors/SponsorshipTileSingle";
import CircularInfo from "@/components/shared/CircularInfo";
import HorizontalDivider from "@/components/shared/HorizontalDivider";


export default function SponsorSupportPage() {
  const infoItems = [
    { text: "Find [emphasis] for your graduate/intern programmes", emphasis: "talent" },
    { text: "Reach [emphasis] members", emphasis: "500+" },
    { text: "Share your company [emphasis]", emphasis: "culture and values" },
    { text: "Learn more about our [emphasis] university", emphasis: "prestigious" },
  ];

  return (
    <main className="flex justify-center px-4">
      <div className="flex flex-col justify-center items-center p-10 w-full gap-4">
        <h1 className="text-4xl font-bold text-center">SUPPORT US</h1>
        <p className="text-s max-w-3xl text-center">
          STACS provides network and support for students interested in computer science at the Guardian's <b>top ranked</b> UK university.
          Our goal is to work with our sponsors to develop our members' techincal and interpersonal skills, and expose them to
          professional opportunities. STACS events help foster a sense of belonging and excitement for the latest technology.
        </p>

        {/* horizontal bar */}
        <HorizontalDivider>

          <h2 className="text-2xl font-bold text-left">Benefits</h2>
          <br />

          <div className="flex flex-wrap justify-center gap-4">

            {infoItems.map((item, index) => (
              <CircularInfo
                key={index}
                text={item.text}
                emphasis={item.emphasis} />
            ))}
          </div>

        </HorizontalDivider>
        <br />
        <HorizontalDivider>
          <div className="flex flex-wrap justify-center gap-4">

            <SponsorshipTile
              packageTier="Bronze Tier"
              packageColour="#a97142">
              <p className="text-s text-left">
                <ul className="list-disc">
                  <li>Logo and advertisements on STACS social media channels, website, and weekly email</li>
                  <li>Share job advertisements and opportunities with our members</li>
                </ul>
              </p>

            </SponsorshipTile>
            <SponsorshipTile
              packageTier="Silver Tier"
              packageColour="#808080">
              <p className="text-s font-bold text-center">Bronze Benefits +</p>
              <p className="text-s text-left">
                <ul className="list-disc">
                  <li>Advertisement on soial media at beginning of semester</li>
                  <li>One <b>free event</b> can be organised in cooperation with STACS for our members</li>
                  <li><b>25% off</b> Hackathon sponsorships</li>
                </ul>
              </p>

            </SponsorshipTile>
            <SponsorshipTile
              packageTier="Gold Tier"
              packageColour="#ccae27">
              <p className="text-s font-bold text-center">Bronze and Silver Benefits +</p>
              <p className="text-s text-left">
                <ul className="list-disc">
                  <li>Company logo on our <b>merchandise</b></li>
                  <li>Regular advertisement on social media</li>
                  <li><b>2 additional free events</b> can be organised (3 total)</li>
                  <li><b>Free advertising</b> at our smaller hackathons</li>
                </ul>
              </p>
            </SponsorshipTile>
          </div>

          <br />
          <div className="flex flex-wrap justify-center gap-4">
            <SponsorshipTileSingle
              packageTier="Single Event"
              packageColour="#3636a0">
              <p className="text-s font-bold text-center">Interested in hosting a single event?</p>
              <p className="text-s text-left">
                Contact us to plan an event for our members alongside advertisement on all of our platforms
              </p>
            </SponsorshipTileSingle>

            <SponsorshipTilePlatinum
              packageTier="Platinum Tier"
              packageColour="#3636a0">
              <p className="text-s font-bold text-center">Bronze, Silver, and Gold Benefits +</p>
              <p className="text-s text-left">
                If you have more ideas about how you can be involved <br />
                in STACS, we would love to hear them! We are always<br />
                looking for new ways to engage with our sponsors and<br />
                would be happy to customise our sponsorship offerings <br />
                for your company's needs.
              </p>
            </SponsorshipTilePlatinum>
          </div>
        </HorizontalDivider>

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

