// Carte Garden Pizz : nom, ingrédients (la base en premier), prix en euros
const pizza = (name, ingredients, price) => ({ name, ingredients, price });
const item = (name, price, note) => ({ name, price, note });

export const PIZZA_CATEGORIES = [
  {
    id: "traditionnelles",
    label: "Traditionnelles",
    items: [
      pizza("JC", "Sauce tomate, anchois, origan", 12),
      pizza("Margarita", "Sauce tomate, emmental, mozza, origan", 12),
      pizza("Napolitaine", "Sauce tomate, anchois, emmental, mozza, origan", 12),
      pizza("Jambon fromage", "Sauce tomate ou crème fraîche, jambon cuit, emmental, mozza, origan", 13),
      pizza("Reine", "Crème fraîche, jambon cuit, champignons, emmental, mozza, origan", 14),
      pizza("Royale", "Sauce tomate, jambon cuit, champignons, emmental, mozza, origan", 14),
      pizza("JDL", "Sauce tomate, chèvre, emmental, mozza, origan", 14),
      pizza("Chorizo", "Sauce tomate, chorizo, emmental, mozza, origan", 14),
      pizza("Merguez", "Sauce tomate, merguez, emmental, mozza, origan", 14),
      pizza("Figatelli", "Sauce tomate, figatelli, emmental, mozza, origan", 14),
      pizza("Bolo", "Sauce tomate, viande hachée, emmental, mozza, origan", 14),
      pizza("Moussaka", "Sauce tomate, viande hachée, aubergines, oignons, emmental, mozza, origan", 14),
      pizza("Carbonara", "Crème fraîche parmesan, lardons, œuf, emmental, mozza, origan", 14),
      pizza("L’Italienne", "Sauce tomate, jambon cru, emmental, mozza, parmesan, persillade, origan", 14),
      pizza("Cocorico", "Crème fraîche, poulet, champignons frais, emmental, mozza, origan", 14),
      pizza("Parma", "Sauce tomate, jambon cru, œuf, emmental, mozza, origan", 15),
    ],
  },
  {
    id: "signatures",
    label: "Signatures",
    items: [
      pizza("Fedele", "Crème fraîche, chèvre, miel, emmental, mozza, pignons, origan", 15),
      pizza("Salamone", "Crème fraîche, saumon, emmental, mozza, origan", 15),
      pizza("Indienne", "Crème fraîche, poulet curry, poivrons, emmental, mozza, origan", 15),
      pizza("Végé", "Sauce tomate, aubergines grillées, champignons, poivrons, emmental, mozza, origan", 15),
      pizza("Tartiflette", "Crème fraîche, lardons, pommes de terre, oignons, reblochon, fromage à tartiflette, emmental, mozza, origan", 15),
      pizza("4 fromages", "Sauce tomate, chèvre, roquefort, emmental, mozza, origan", 15),
      pizza("Sudiste", "Sauce tomate, chorizo, merguez, poivrons, emmental, mozza, origan", 15),
      pizza("Corse", "Sauce tomate, figatelli, chèvre, emmental, mozza, origan", 15),
      pizza("Kebab", "Crème fraîche, kebab, oignons, emmental, mozza, roquette, tomates cerises, sauce pita, origan", 15),
      pizza("Atomique", "Sauce tomate, merguez, chorizo, figatelli, emmental, mozza, origan", 15),
      pizza("Tenders", "Sauce tomate (poivre ou samouraï), poulet pané, cheddar, emmental, mozza, origan", 15),
      pizza("Aoste", "Crème fraîche, jambon cru, pommes de terre, oignons, reblochon, fromage à tartiflette, emmental, mozza, origan", 15),
      pizza("Burger", "Sauce tomate, viande hachée, cornichons king-size, cheddar, emmental, mozza, sauce burger, oignons frits, origan", 15),
      pizza("Poulet tandoori", "Crème fraîche, poulet tandoori, poivrons, emmental, mozza, origan", 15),
    ],
  },
  {
    id: "speciales",
    label: "Spéciales",
    items: [
      pizza("Texane", "Sauce tomate, viande hachée, cheddar, tomates fraîches, sauce barbecue, emmental, mozza, origan", 15),
      pizza("La Garden", "Huile d’olive, jambon cuit, chèvre, roquefort, emmental, mozza, origan", 15),
      pizza("Camembert", "Crème fraîche, jambon cuit, camembert, emmental, mozza, origan", 15),
      pizza("Burrata", "Sauce tomate, burrata, roquette, tomates cerises, basilic, balsamique, parmesan, jambon cru, origan", 15),
      pizza("Burrata à la truffe", "Sauce tomate, burrata truffée, roquette, tomates cerises, basilic, parmesan, jambon cuit, huile de truffe, origan", 16),
      pizza("L’Artichaut", "Crème d’artichaut, artichaut, lardons, pommes de terre, champignons, emmental, mozza, origan", 16),
      pizza("La Roma", "Sauce tomate, jambon cru, champignons, emmental, mozza, parmesan, roquette, tomates séchées, balsamique, origan", 16),
    ],
  },
  {
    id: "calzones",
    label: "Calzones",
    items: [
      pizza("Rouge", "Sauce tomate, jambon, champignons, œuf, emmental, mozza, origan", 15),
      pizza("Blanche", "Crème fraîche, jambon, champignons, œuf, emmental, mozza, origan", 15),
    ],
  },
];

export const EXTRA_CATEGORIES = [
  {
    id: "supplements",
    label: "Suppléments",
    groups: [
      {
        title: "Suppléments pizzas, burratas et calzones",
        items: [
          item("Légumes", 1),
          item("Fromages", 1.5),
          item("Viandes", 2),
          item("Burrata", 4),
          item("Burrata truffe", 5),
        ],
      },
    ],
  },
  {
    id: "boissons",
    label: "Boissons",
    groups: [
      {
        title: "Softs",
        items: [
          item("Coca, Coca Zero, Coca Cherry, Oasis, Ice Tea, Perrier, 7up, Orangina", 2),
          item("Red Bull", 3),
          item("Eau 50 cl", 1),
          item("Coca ou Ice Tea 1,25 L", 3.5),
          item("Oasis 2 L", 4),
        ],
      },
      {
        title: "Alcools",
        items: [
          item("Bière Heineken ou Desperados 33 cl", 3),
          item("Vin de pays", 8, "Peut remplacer la pizza offerte"),
          item("Syrah", 9, "Peut remplacer la pizza offerte"),
          item("Côtes de Provence AOC", 12),
          item("Côtes du Rhône AOC", 14),
        ],
      },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    groups: [
      {
        title: "Desserts",
        items: [
          item("Pizza Nutella", 11),
          item("Supplément Smarties", 1),
          item("Supplément coco", 1),
          item("Tiramisu (classique, spéculoos…)", 4),
        ],
      },
    ],
  },
];

export const PIZZA_COUNT = PIZZA_CATEGORIES.reduce((total, category) => total + category.items.length, 0);

// La première partie des ingrédients est la base : tomate, crème ou huile
export function splitBase(ingredients) {
  const [first, ...rest] = ingredients.split(", ");
  const lower = first.toLowerCase();
  const kind = lower.startsWith("sauce tomate") ? "tomate" : lower.startsWith("crème") ? "creme" : lower.startsWith("huile") ? "huile" : null;
  if (!kind) return { base: null, kind: null, toppings: ingredients };
  return { base: first, kind, toppings: rest.join(", ") };
}

export function formatPrice(price) {
  return `${price.toLocaleString("fr-FR", { minimumFractionDigits: Number.isInteger(price) ? 0 : 2 })} €`;
}
