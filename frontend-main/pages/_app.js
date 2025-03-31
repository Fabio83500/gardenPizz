import "@/styles/globals.css";
import Layout from "../components/Layout/layout";
import Script from "next/script";
import { GA_TRACKING_ID, pageview } from "../lib/gtag";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Ajoute les poids que tu veux
  variable: "--font-poppins",
});
export default function App({ Component, pageProps }) {
  return (
    <Layout >
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <div className={poppins.variable}>
      <Component {...pageProps} />
      </div>
    </Layout>
  );
}
