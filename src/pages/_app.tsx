import "@/styles/globals.css";
import { Box, CSSReset, ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <CSSReset />
      <Box maxW="container.xl" mx={'auto'} p={'4'}>
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
    );
}
