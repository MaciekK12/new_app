
import { NextUIProvider } from '@nextui-org/react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import AppNavbar from '@/components/AppNavbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Generic auction portal',
  description: 'No description available',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <NextUIProvider>
    <html lang="en">
      <body className="min-h-screen flex justify-center items-center p-24">
        <AppNavbar />
        {children}
      </body>
    </html>
    // </NextUIProvider>
  );
}
