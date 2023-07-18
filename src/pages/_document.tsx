import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <meta name="description" content="AI 기반의 한글 띄어쓰기 연습 서비스" />
        <link rel="icon" href="/favicon.ico" />
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
