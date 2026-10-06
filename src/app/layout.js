import { Cinzel, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const cinzel = Cinzel({
  variable: '--font-cinzel',
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

export const viewport = {
  themeColor: '#090A10',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata = {
  metadataBase: new URL('https://www.astroved.com'),
  alternates: {
    canonical: 'https://www.astroved.com/marriage-timing-calculator',
  },
  title: 'Vedic Marriage Timing Calculator | Accurate Kundali Vivaha Yoga & Dasha Prediction',
  description: 'Calculate your accurate marriage timing from birth details using classical Vedic astrology (Parashari Jyotish, Vimshottari Dasha, 7th House, Navamsa D9, and Double Transit theory). 100% private, instant, and comprehensive report.',
  keywords: [
    'marriage timing calculator',
    'vedic astrology marriage prediction',
    'kundali marriage age calculator',
    'when will I get married astrology',
    '7th house analysis',
    'navamsa d9 marriage',
    'manglik dosha calculator',
    'vimshottari dasha marriage timing',
    'jupiter transit double transit vivaha'
  ],
  authors: [{ name: 'AstroVed' }],
  publisher: 'AstroVed',
  openGraph: {
    title: 'Vedic Marriage Timing Calculator | Kundali Vivaha Timing',
    description: 'Discover your astrological marriage window, 7th house strength, Dasha activation, and partner indications.',
    url: 'https://www.astroved.com/marriage-timing-calculator',
    siteName: 'AstroVed',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vedic Marriage Timing Calculator | Accurate Kundali Vivaha Timing',
    description: 'Discover your astrological marriage window, 7th house strength, Dasha activation, and partner indications.',
    site: '@astroved',
    creator: '@astroved',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  const jsonLdData = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'AstroVed Vedic Marriage Timing Calculator',
      url: 'https://www.astroved.com/marriage-timing-calculator',
      applicationCategory: 'LifestyleApplication',
      operatingSystem: 'All',
      offers: [
        {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'INR',
          name: 'Free Online Vedic Marriage Timing Reading',
        },
      ],
      publisher: {
        '@type': 'Organization',
        name: 'AstroVed',
        url: 'https://www.astroved.com',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is the marriage calculator free to use?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes! The online calculator is completely free. You can view your most favorable marriage timing window, 7th house analysis, Manglik status, and active Dasha periods directly on screen.',
          },
        },
        {
          '@type': 'Question',
          name: 'How is marriage timing determined in Vedic astrology?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Classical Parashari Jyotish evaluates several core factors simultaneously: the 7th house (Kalatra Bhava), the dignity of the 7th house lord, Venus (and Jupiter for female charts), operating Vimshottari Dasha sub-periods, and the Double Transit of Jupiter and Saturn.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is Manglik (Mangal) Dosha and how is it evaluated?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Manglik Dosha occurs when Mars is posited in the 1st, 4th, 7th, 8th, or 12th house. Our calculator checks both the placement and classical planetary conditions that neutralize or cancel the dosha.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need an exact birth time for this reading?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'An exact birth time ensures maximum precision for your Ascendant (Lagna) and D9 Navamsa chart. If your birth time is approximate, the calculator still derives meaningful timing indications from planetary Dasha and major transits.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is my birth information private and secure?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Calculations are processed in-session strictly to compute your planetary positions. Your personal details are never stored in a database, profiled, or shared with any third party.',
          },
        },
      ],
    },
  ];

  return (
    <html lang="en" className={`${cinzel.variable} ${plusJakartaSans.variable} scroll-smooth`}>
      <head>
        <link rel="canonical" href="https://www.astroved.com/marriage-timing-calculator" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </head>
      <body className="min-h-screen bg-[#FAF5F7] text-[#2B162C] font-sans antialiased selection:bg-[#6D144E] selection:text-white">
        <div className="relative min-h-screen flex flex-col overflow-x-hidden">
          {/* Ambient Cosmic Background Lighting */}
          <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-purple-900/15 to-transparent blur-3xl opacity-70" />
            <div className="absolute top-[40%] -left-[200px] w-[600px] h-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-600/10 via-indigo-900/10 to-transparent blur-3xl opacity-50" />
            <div className="absolute top-[70%] -right-[200px] w-[600px] h-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-600/10 via-rose-900/10 to-transparent blur-3xl opacity-40" />
            <div className="absolute inset-0 bg-[radial-gradient(#d4af37_0.6px,transparent_0.6px)] [background-size:36px_36px] opacity-[0.035]" />
          </div>

          <div className="relative z-10 flex flex-col flex-grow">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
