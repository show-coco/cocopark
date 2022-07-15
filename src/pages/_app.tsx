import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "config/chakra-ui";
import { Web3Provider } from "providers/Web3Provider/Web3Provider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3Provider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Web3Provider>
  );
}

export default MyApp;
