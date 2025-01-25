import type { Metadata } from "next";
import { Fira_Code, Odibee_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";


const firaCode = Fira_Code({
  variable: "--font-fira-mono",
  subsets: ["latin"],
});

const OdibeeSans = Odibee_Sans({
  weight: ["400"],
  variable: "--font-odibee-sans",
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
        className={`${firaCode.className} ${firaCode.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}

