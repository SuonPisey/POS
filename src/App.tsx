import "./App.css";
import LiveTime from "./components/liveClock";
import BaseLayout from "./layout/baseLayout";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
  
        <BaseLayout />
      </QueryClientProvider>
    </>
  );
}

export default App;
