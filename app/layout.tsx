import type { Metadata } from "next";
import {Public_Sans } from "next/font/google";
import "./globals.css";
import { Navigation } from "./_components/Navigation";
import { gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {SplitText} from 'gsap/SplitText'


gsap.registerPlugin(ScrollTrigger,SplitText)

const PublicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Parallax",
  description: "Your lexury house expert",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${PublicSans.variable} bg-off-black  antialiased`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
