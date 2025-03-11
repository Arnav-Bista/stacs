import StacsLogo from "@/app/components/StacsLogo";
import Sponsors from "@/app/components/Sponsors"
import Link from "next/link";
import CircularInfo from "@/app/components/CircularInfo";
import HorizontalDivider from "@/app/components/HorizontalDivider";
import SponsorshipTile from "@/app/components/SponsorshipTile";
import SponsorshipTileSingle from "@/app/components/SponsorshipTileSingle";
import SponsorshipTilePlatinum from "@/app/components/SponsorshipTilePlatinum";
import Image from "next/image";

import { buttonVariants } from "@/components/ui/button";
import SponsorTile from "../../components/SponsorTile";

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
          <br/>

          <div className="flex flex-wrap justify-center gap-4">
            
            {infoItems.map((item, index) => (
              <CircularInfo 
                key={index}
                text={item.text}
                emphasis={item.emphasis}
              />
            ))}
          </div>

        </HorizontalDivider>
        <br/>
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
        
        <br/>
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
              If you have more ideas about how you can be involved <br/>
              in STACS, we would love to hear them! We are always<br/>
              looking for new ways to engage with our sponsors and<br/>
              would be happy to customise our sponsorship offerings <br/>
              for your company's needs.
            </p>
          </SponsorshipTilePlatinum>
        </div>
        </HorizontalDivider>

        
      </div>
    </main>
  );
}

