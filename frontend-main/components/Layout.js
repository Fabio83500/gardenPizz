import Analytics from "./Analytics";
import CallBar from "./CallBar";
import CookieConsent from "./CookieConsent";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ solidHeader = false, children }) {
  return (
    <>
      <a href="#contenu" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-garden-red focus:px-4 focus:py-2 focus:text-white">
        Aller au contenu
      </a>
      <Header solid={solidHeader} />
      <main id="contenu">{children}</main>
      <Footer />
      <CallBar alwaysVisible={solidHeader} />
      <CookieConsent />
      <Analytics />
    </>
  );
}
