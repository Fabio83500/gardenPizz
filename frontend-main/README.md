# Garden Pizz : site vitrine

Site de la pizzeria Garden Pizz (Six-Fours-les-Plages et Mar Vivo), réalisé par [MF Agency](https://www.mfagency.fr).
En ligne sur https://www.gardenpizz.fr (Vercel : un push sur `main` met le site en ligne).

## Stack

Next.js 16 (Pages Router), React 19, Tailwind CSS 3, framer-motion pour les animations.

## Commandes

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build
```

## Où modifier quoi

- `data/menu.js` : la carte (pizzas, prix, boissons, desserts, suppléments)
- `data/restaurants.js` : les deux pizzerias (téléphone, zones de livraison, plan Google Maps)
- `data/site.js` : horaires, réseaux sociaux, liens du menu
- `data/partners.js` : logos des partenaires (`public/images/partenaires/`)
- `tailwind.config.js` : couleurs et polices de la charte (tirées du logo)
- `pages/mentions-legales.js` : mentions légales

Google Analytics ne se charge qu'après accord de l'internaute (bandeau cookies).
