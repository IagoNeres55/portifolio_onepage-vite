import Index from "./pages";
import { ChakraProvider } from "@chakra-ui/react";
function App() {
  return (
    <ChakraProvider>
      <Index />
    </ChakraProvider>
  );
}

export default App;
