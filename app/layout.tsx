import type { Metadata } from 'next';
// import { Geist, Geist_Mono } from "next/font/google";
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: 'WingsAI',
  description:
    'Channeling the energy within you to soar high in programming world',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased flex flex-col min-h-screen bg-white text-gray-900 dark:bg-slate-900 dark:text-gray-300 font-sans`}
      >
          <Navbar />
          <main className="grow">{children}</main>
          <Footer />
      </body>
    </html>
  );
}
