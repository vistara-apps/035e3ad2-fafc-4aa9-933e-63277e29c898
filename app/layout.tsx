import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GratitudeFlow - Tip creators, unlock rewards',
  description: 'Tip creators, unlock rewards, and fuel their next big thing—all in one stream.',
  openGraph: {
    title: 'GratitudeFlow',
    description: 'Tip creators, unlock rewards, and fuel their next big thing—all in one stream.',
    images: ['/og-image.png'],
  },
  other: {
    'fc:frame': 'vNext',
    'fc:frame:image': '/og-image.png',
    'fc:frame:button:1': 'Start Tipping',
    'fc:frame:button:1:action': 'post',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
