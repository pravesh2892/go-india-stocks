import '@/styles/globals.css';
import { Navbar } from '@/containers';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Go India Stocks',
  description:
    'Bringing Indian Corporates to Investors. An Investor Relations Company',
  author: 'pravesh meena',
  openGraph: {
    title: 'Go India Stocks',
    description:
      'Bringing Indian Corporates to Investors. An Investor Relations Company',
    url: 'https://go-india-stocks-kv.vercel.app/',
    siteName: 'Go India Stocks',
    images: [
      {
        url: 'https://github.com/vatsalsinghkv/go-india-stocks/assets/68834718/30f61616-4cea-4d19-b4d0-a7796b103439',
        width: 800,
        height: 600,
      },
      {
        url: 'https://github.com/vatsalsinghkv/go-india-stocks/assets/68834718/30f61616-4cea-4d19-b4d0-a7796b103439',
        width: 1800,
        height: 1600,
        alt: 'Go India Stocks',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`text-text bg-bg scroll-smooth ${inter.className} h-screen overflow-hidden`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
