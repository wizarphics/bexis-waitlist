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
  title: 'Bexis — Beyond the Résumé',
  description:
    'AI-powered hiring that goes beyond the résumé. Understand candidates through experience, evidence, behavioral intelligence and role alignment.',
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
