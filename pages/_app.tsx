import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { ChakraProvider } from "@chakra-ui/react";
import Main from "../components/layouts/Main";
import theme from "../lib/theme";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Main router={router}>
        <AnimatePresence exitBeforeEnter initial>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Main>
    </ChakraProvider>
  );
}

export default MyApp;
