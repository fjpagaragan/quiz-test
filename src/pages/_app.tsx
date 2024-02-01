import "@/styles/globals.css";
import { Box, ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Box maxW="container.xl" mx={'auto'} p={'4'}>
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
    );
}
