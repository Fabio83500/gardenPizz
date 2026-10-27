import { Barlow_Condensed, Kaushan_Script, Poppins } from "next/font/google";
import { LazyMotion, MotionConfig, domMax } from "framer-motion";
import "@/styles/globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-poppins" });
const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["700", "800"],
  style: ["normal", "italic"],
  variable: "--font-barlow",
});
const kaushan = Kaushan_Script({ subsets: ["latin"], weight: "400", variable: "--font-kaushan" });


export default function App({ Component, pageProps }) {
  return (
    <LazyMotion features={domMax} strict>
      <MotionConfig reducedMotion="user">
        {/* Les polices sont posées sur l'enveloppe commune : header, footer et pages en profitent */}
        <div className={`${poppins.variable} ${barlow.variable} ${kaushan.variable} font-sans`}>
          <Component {...pageProps} />
        </div>
      </MotionConfig>
    </LazyMotion>
  );
}
