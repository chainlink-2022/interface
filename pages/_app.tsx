import * as React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "../src/createEmotionCache";
import "/public/fonts/inter/inter.css";
import { MainLayout } from "../src/layouts/MainLayout";
import { Web3Provider } from "../src/libs/web3-data-provider";
import { getSupportedChainIds } from "../src/helpers/config/markets-and-network-config";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Web3Provider
            supportedChainIds={getSupportedChainIds()}
          >
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </Web3Provider>
    </CacheProvider>
  );
}
