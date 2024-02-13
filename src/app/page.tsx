'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'; // do rozkminy
import './globals.css'

const queryClient = new QueryClient();

function Home({ Component, pageProps }: AppProps) {
  return (
    <>
      Main page
    </>
  );
}

export default Home;
