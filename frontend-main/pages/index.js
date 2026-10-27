import About from "@/components/About";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import Menu from "@/components/Menu";
import OfferBand from "@/components/OfferBand";
import Partners from "@/components/Partners";
import Restaurants from "@/components/Restaurants";
import Seo from "@/components/Seo";
import { SITE_URL, SOCIALS } from "@/data/site";
import { RESTAURANTS } from "@/data/restaurants";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": RESTAURANTS.map((restaurant) => ({
    "@type": "Restaurant",
    "@id": `${SITE_URL}/#${restaurant.id}`,
    name: restaurant.name,
    url: SITE_URL,
    image: `${SITE_URL}/og.jpg`,
    telephone: restaurant.tel,
    servesCuisine: "Pizza",
    priceRange: "€",
    acceptsReservations: false,
    hasMenu: `${SITE_URL}/#carte`,
    address: { "@type": "PostalAddress", addressLocality: restaurant.city, addressRegion: "Var", addressCountry: "FR" },
    geo: { "@type": "GeoCoordinates", ...restaurant.geo },
    areaServed: restaurant.delivery,
    sameAs: SOCIALS.map((social) => social.href),
  })),
};

export default function Home() {
  return (
    <Layout>
      <Seo
        title="Garden Pizz | Pizzeria à Six-Fours-les-Plages et Mar Vivo · 2 achetées = la 3e offerte"
        description="Garden Pizz, deux pizzerias à Six-Fours-les-Plages et Mar Vivo (La Seyne-sur-Mer). Ouvert 7j/7, sur place, à emporter ou en livraison. Deux pizzas achetées, la troisième offerte."
        jsonLd={jsonLd}
      />
      <Hero />
      <OfferBand />
      <Menu />
      <Restaurants />
      <About />
      <Partners />
    </Layout>
  );
}
