
import { NextUIProvider } from '@nextui-org/react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import AppNavbar from '@/components/navbar/Navbar';
import TanstackProvider from '@/providers/TanstackProvider';

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
      <body className="min-h-screen flex flex-col justify-center items-center bg-dark-900 text-black p-24">
        <TanstackProvider>
          <AppNavbar />
          {children}
        </TanstackProvider>
      </body>
    </html>
    // </NextUIProvider>
  );
}
