import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Box, CSSReset, ChakraProvider, Container } from "@chakra-ui/react";
import NavBar from "@/common/components/NavBar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <CSSReset />
      <NavBar />
      <Box maxW="container.2xl" mx="auto" my={'auto'} p={4}>
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
    );
}
