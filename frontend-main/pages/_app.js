import "@/styles/globals.css";
import Layout from "../components/Layout/layout";
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--poppins-font",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
});

export default function App({ Component, pageProps }) {
  return (
    <Layout className={poppins.className}>
      <Component {...pageProps} />
    </Layout>
  );
}
