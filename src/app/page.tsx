'use client'
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'; // Opcjonalne, do debugowania
import MainComponent from '../utils/test'

const queryClient = new QueryClient();

function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainComponent />
      {/* <ReactQueryDevtools /> */}
    </QueryClientProvider>
  );
}

export default Home;
