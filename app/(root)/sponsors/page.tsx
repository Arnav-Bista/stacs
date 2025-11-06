import Link from "next/link";
import Image from "next/image";

import { buttonVariants } from "@/components/ui/button";
import { fetchSponsors } from "@/lib/markdown/sponsors";
import { SponsorTileLarge, SponsorTileLogo } from "@/components/features/sponsors/SponsorTile";

export const revalidate = 300; // 5 minutes

export default async function SponsorsPage() {
  const sponsors = await fetchSponsors();
  
  return (
    <div className="min-h-screen p-4 md:p-8 max-w-screen-lg w-full mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          OUR SPONSORS
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          STACS would not be what it is without the incredible support of our sponsors. 
          These organizations share our vision of fostering technology education and innovation 
          in the St Andrews community.
        </p>
        
        {/* CTA Button for Potential Sponsors */}
        <Link 
          href="/sponsors/support" 
          className={`${buttonVariants({ variant: "default" })} text-lg px-8 py-3 h-auto`}
        >
          BECOME A SPONSOR
        </Link>
      </div>

      {/* About Sponsorship Section */}
      <div className="mb-16 bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-6 text-foreground">
              Why Partner With STACS?
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p>Connect with talented computer science students at the University of St Andrews</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p>Support cutting-edge workshops, hackathons, and tech talks throughout the year</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p>Gain visibility among Scotland's brightest tech minds and future industry leaders</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p>Help shape the next generation of software developers and technologists</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground mb-4">Active Members</div>
              
              <div className="text-4xl font-bold text-primary mb-2">20+</div>
              <div className="text-sm text-muted-foreground mb-4">Events Per Year</div>
              
              <div className="text-4xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>

      {/* Current Sponsors Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-center mb-8 text-foreground">
          Our Amazing Partners
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          We're proud to work with these forward-thinking organizations who believe in empowering 
          the next generation of technologists.
        </p>
        
        <div className="flex flex-row flex-wrap gap-y-8 gap-x-12 justify-center items-center">
          {sponsors.map((sponsor, index) => (
            <SponsorTileLogo
              key={index}
              name={sponsor.name}
              imageUrl={sponsor.logoSmall || "https://placeholder.pics/svg/100"}
              website={sponsor.website}
              textColor={sponsor.textColor}
              backgroundColor={sponsor.backgroundColor}
              className="w-80 h-40"
            />
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center py-16 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 backdrop-blur-md rounded-2xl border border-white/10">
        <h2 className="text-3xl font-semibold mb-4 text-foreground">
          Ready to Make an Impact?
        </h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join our community of sponsors and help us continue to provide world-class tech education 
          and opportunities to students at St Andrews.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/sponsors/support" 
            className={`${buttonVariants({ variant: "default" })} text-lg px-8 py-3 h-auto`}
          >
            VIEW SPONSORSHIP PACKAGES
          </Link>
          <Link 
            href="mailto:stacs@st-andrews.ac.uk" 
            className={`${buttonVariants({ variant: "outline" })} text-lg px-8 py-3 h-auto`}
          >
            GET IN TOUCH
          </Link>
        </div>
      </div>
    </div>
  );
}

