import "@styles/globals.css";
import type { AppProps } from "next/app";
import { Box, CSSReset, ChakraProvider, Container } from "@chakra-ui/react";
import NavBar from "@components/NavBar";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const showNavBar = router.pathname !== '/quiz';
  return (
    <ChakraProvider>
      <CSSReset />
      {showNavBar && <NavBar />}
      <Box maxW="container.2xl" mx="auto" my={'auto'} p={4}>
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
    );
}
