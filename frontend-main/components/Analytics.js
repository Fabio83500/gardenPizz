import { useEffect } from "react";
import Script from "next/script";
import { CONSENT_EVENT, GA_TRACKING_ID, useConsent } from "@/lib/analytics";

export default function Analytics() {
  const granted = useConsent() === "granted";

  useEffect(() => {
    // Retrait du consentement : on recharge la page pour décharger Google Analytics
    const onChange = (event) => {
      if (event.detail !== "granted" && typeof window.gtag === "function") window.location.reload();
    };
    window.addEventListener(CONSENT_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_EVENT, onChange);
  }, []);

  if (!granted) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_TRACKING_ID}');`}
      </Script>
    </>
  );
}
