export const GA_TRACKING_ID = "G-GXEVQS2WFX";

// Envoie un événement de page vue
export const pageview = (url) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

// Envoie un événement personnalisé
export const event = ({ action, category, label, value }) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
