'use client'
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'; // Opcjonalne, do debugowania
import type { AppProps } from 'next/app'; // do rozkminy
import MainComponent from '../lib/test'
import { Link } from '@nextui-org/react';
import './globals.css'

const queryClient = new QueryClient();

function Home({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <MainComponent /> */}
      {/* <Component {...pageProps} /> */}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default Home;
