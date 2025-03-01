export const GTM_ID = "GTM-TVK6Q992";

export const pageview = (url) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "pageview",
    page: url,
  });
};
