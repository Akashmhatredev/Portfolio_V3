import type { Metadata } from "next";
import { Geist, Geist_Mono, Kalam, Mona_Sans } from "next/font/google";
import { site } from "@/lib/content";
import "./globals.css";

const display = Mona_Sans({ subsets: ["latin"], axes: ["wdth"], variable: "--nf-display" });
const body = Geist({ subsets: ["latin"], variable: "--nf-body" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--nf-mono" });
const hand = Kalam({ subsets: ["latin"], weight: "700", variable: "--nf-hand" });

export const metadata: Metadata = {
  title: `${site.name} — Developer`,
  description: site.description,
  openGraph: { title: site.name, description: site.description, type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable} ${hand.variable}`}>
      <body>{children}</body>
    </html>
  );
}
