import GlobalStyle from "@/styles/GlobalStyle";
import type { AppProps } from "next/app";
import Head from "next/head";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Head>
        <title>Fixpace | 띄어쓰기 연습 공간</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
