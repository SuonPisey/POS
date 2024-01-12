import "./App.css";
import BaseLayout from "./layout/baseLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppRouter from "./routes/root";
import LoginPage from "./pages/Auth/login";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {/* <BaseLayout /> */}
        <AppRouter />
        {/* <LoginPage /> */}
      </QueryClientProvider>
    </>
  );
}

export default App;
