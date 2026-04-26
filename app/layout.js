import { Playfair_Display, DM_Sans } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-playfair',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata = {
  title: 'KMB Associates LLP | Loan & Finance Consulting Bengaluru',
  description:
    'Expert loan consulting for Home, Mortgage, Business and MSME loans. 30 years of banking experience. Based in Bengaluru.',
  keywords:
    'home loan, mortgage loan, business loan, MSME loan, loan consulting, Bengaluru, KMB Associates',
  openGraph: {
    title: 'KMB Associates LLP | Loan & Finance Consulting Bengaluru',
    description:
      'Expert loan consulting for Home, Mortgage, Business and MSME loans. 30 years of banking experience.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
