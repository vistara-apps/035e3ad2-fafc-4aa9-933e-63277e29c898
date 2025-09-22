import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GratitudeFlow - Tip Creators, Unlock Rewards",
  description: "A Base mini-app that enhances creator tipping with gamification, personalized shout-outs, exclusive content access, and goal tracking.",
  keywords: ["tipping", "creators", "Base", "blockchain", "mini-app"],
  authors: [{ name: "GratitudeFlow Team" }],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#240088',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Farcaster Frame meta tags */}
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="/frame-image.svg" />
        <meta property="fc:frame:button:1" content="Tip Creator" />
        <meta property="fc:frame:button:1:action" content="post" />
        <meta property="fc:frame:post_url" content="/api/frame" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}

