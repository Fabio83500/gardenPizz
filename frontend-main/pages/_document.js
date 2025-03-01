import { Html, Head, Main, NextScript } from 'next/document'
import { GTM_ID } from "../lib/gtm";

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
      <link href="https://fonts.googleapis.com/css2?family=Inspiration:wght@400;700&display=swap" rel="stylesheet" />
      
      </Head>
      <body>
      <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
