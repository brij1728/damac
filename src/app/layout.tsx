import './globals.css';

import { Inter, Oswald, Poppins } from 'next/font/google';

import { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});
const oswald = Oswald({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-oswald',
});
const poppins = Poppins({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'DAMAC Properties - Luxury Real Estate Company in Dubai',
  description:
    'DAMAC Properties is the leading luxury real estate company in Dubai, offering luxury residential and commercial properties in Dubai, UAE.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${oswald.variable} ${poppins.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
