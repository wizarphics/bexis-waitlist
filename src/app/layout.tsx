import type { Metadata } from 'next';
import { Raleway, Inter } from 'next/font/google';
import './globals.css';

const raleway = Raleway({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
});

const inter = Inter({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Bexis | Hiring beyond the résumé.',
  description:
    'Evidence-first hiring platform. Understand candidates through experience, evidence, behavioral insight, and role alignment.',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'Bexis | Hiring beyond the résumé.',
    description:
      'Evidence-first hiring platform. Understand candidates through experience, evidence, behavioral insight, and role alignment.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Bexis — Hiring beyond the résumé',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bexis | Hiring beyond the résumé.',
    description:
      'Evidence-first hiring platform. Understand candidates through experience, evidence, behavioral insight, and role alignment.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={`${raleway.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
