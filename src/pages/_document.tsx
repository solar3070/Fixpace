import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <meta name="description" content="AI 기반의 한글 띄어쓰기 연습 서비스" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Fixpace" />
        <meta property="og:title" content="Fixpace | 띄어쓰기 연습 공간" />
        <meta property="og:description" content="AI가 제공하는 문장에 올바른 띄어쓰기를 하며 띄어쓰기를 연습해요." />
        <meta property="og:image" content="/images/thumbnail.png" />
        <meta property="og:url" content="https://fixpace.site/" />
        <meta property="og:locale" content="ko_KR" />
        <meta name="keywords" content="AI, 띄어쓰기, 한글 띄어쓰기, 띄어쓰기 교정, 띄어쓰기 연습" />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:site" content="Fixpace" />
        <meta property="twitter:title" content="Fixpace | 띄어쓰기 연습 공간" />
        <meta
          property="twitter:description"
          content="AI가 제공하는 문장에 올바른 띄어쓰기를 하며 띄어쓰기를 연습해요."
        />
        <meta property="twitter:image" content="/images/thumbnail.png" />
        <meta property="twitter:url" content="https://fixpace.site/" />
        <link rel="icon" type="image/png" href="/favicon/favicon-16x16.png" sizes="16x16" />
        <link rel="icon" type="image/png" href="/favicon/favicon-32x32.png" sizes="32x32" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
