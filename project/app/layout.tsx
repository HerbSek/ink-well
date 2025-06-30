import './globals.css';
import type { Metadata } from 'next';
import { Crimson_Text, Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';
import Navigation from '@/components/layout/Navigation';
import Navigation_noAuth from '@/components/layout/Navigation_noAuth';

const crimsonText = Crimson_Text({ 
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-crimson'
});

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'Inkwell - Modern Blogging Platform',
  description: 'A beautiful and minimal blogging platform for writers',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${crimsonText.variable} ${inter.variable}`}>
      <body className="font-serif bg-paper text-stone-800 antialiased">
        <Navigation_noAuth />
        <main className="min-h-screen">
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}