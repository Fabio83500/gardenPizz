import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, m } from "framer-motion";
import { OPEN_CONSENT_EVENT, saveConsent, useConsent } from "@/lib/analytics";

// Bandeau minimal : Google Analytics ne se charge qu'après « Accepter »
export default function CookieConsent() {
  const consent = useConsent();
  const [reopened, setReopened] = useState(false);
  const open = consent === null || reopened;

  useEffect(() => {
    const onOpen = () => setReopened(true);
    window.addEventListener(OPEN_CONSENT_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, onOpen);
  }, []);

  const choose = (value) => {
    saveConsent(value);
    setReopened(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <m.div
          role="dialog"
          aria-live="polite"
          aria-label="Gestion des cookies"
          className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-lg rounded-2xl border border-garden-line bg-garden-card p-5 text-sm text-garden-muted shadow-2xl shadow-black/60 sm:bottom-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-display text-lg font-extrabold uppercase italic text-garden-cream">Un petit cookie ?</p>
          <p className="mt-2">
            Avec votre accord, nous utilisons Google Analytics pour mesurer la fréquentation du site. Rien n’est déposé
            si vous refusez.{" "}
            <Link href="/mentions-legales#donnees" className="underline hover:text-garden-gold">
              En savoir plus
            </Link>
          </p>
          <div className="mt-4 flex gap-2">
            <button
              type="button"
              onClick={() => choose("denied")}
              className="flex-1 rounded-full border border-garden-cream/30 px-4 py-2.5 font-semibold text-garden-cream transition hover:border-garden-gold hover:text-garden-gold"
            >
              Refuser
            </button>
            <button
              type="button"
              onClick={() => choose("granted")}
              className="flex-1 rounded-full bg-garden-red px-4 py-2.5 font-semibold text-white transition hover:bg-garden-red-dark"
            >
              Accepter
            </button>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
