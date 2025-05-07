import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from "./components/layout/Layout";

export const App = () => {
  return (
    <ChakraProvider>
      <Layout />
    </ChakraProvider>
  );
};
