import type { Metadata } from "next";
import { Fira_Code, Odibee_Sans } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/layout/Navbar";
import MurrayCurveBackground from "@/components/layout/Background";

const firaCode = Fira_Code({
  variable: "--font-fira-mono",
  subsets: ["latin"],
  preload: false,
});

const OdibeeSans = Odibee_Sans({
  weight: ["400"],
  variable: "--font-odibee-sans",
  preload: false,
});

export const metadata: Metadata = {
  title: "STACS",
  description: "Saint Andrews Computing Society",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${firaCode.className} ${firaCode.variable}`}
      >
        <Navbar />
        <MurrayCurveBackground />
        <main className="items-center mx-auto max-w-screen-lg w-full" >
          <div className="flex flex-col justify-center items-center gap-2 pt-8">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}

