import { useSyncExternalStore } from "react";

export const GA_TRACKING_ID = "G-GXEVQS2WFX";

const CONSENT_KEY = "gp-consent";
export const CONSENT_EVENT = "gp-consent-change";
export const OPEN_CONSENT_EVENT = "gp-consent-open";

// Repli en mémoire si le stockage du navigateur est bloqué
let memoryConsent = null;

export function readConsent() {
  try {
    return window.localStorage.getItem(CONSENT_KEY) ?? memoryConsent;
  } catch {
    return memoryConsent;
  }
}

export function saveConsent(value) {
  memoryConsent = value;
  try {
    window.localStorage.setItem(CONSENT_KEY, value);
  } catch {
    // Stockage indisponible (navigation privée) : le choix vaut pour la visite
  }
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: value }));
}

function subscribeConsent(callback) {
  window.addEventListener(CONSENT_EVENT, callback);
  return () => window.removeEventListener(CONSENT_EVENT, callback);
}

// "granted", "denied", null (pas encore choisi) ou "server" pendant le rendu serveur
export function useConsent() {
  return useSyncExternalStore(subscribeConsent, readConsent, () => "server");
}

export function openConsent() {
  window.dispatchEvent(new Event(OPEN_CONSENT_EVENT));
}

// N'envoie rien si l'internaute a refusé (gtag n'est alors pas chargé)
export function trackCall(restaurant) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", "call_button_click", {
    event_category: "Contact",
    event_label: `Appeler ${restaurant}`,
    value: 1,
  });
}
