import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, m } from "framer-motion";
import { EXTRA_CATEGORIES, PIZZA_CATEGORIES, PIZZA_COUNT, formatPrice, splitBase } from "@/data/menu";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

const TABS = [...PIZZA_CATEGORIES, ...EXTRA_CATEGORIES].map(({ id, label, items }) => ({
  id,
  label,
  count: items ? items.length : null,
}));

const BASE_STYLES = {
  tomate: { dot: "bg-garden-red", label: "Base tomate" },
  creme: { dot: "bg-garden-cream", label: "Base crème" },
  huile: { dot: "bg-garden-gold", label: "Base huile" },
};

const OFFERS = [
  { src: "/images/offre-2-3.webp", width: 420, height: 238, text: "2 pizzas achetées, la 3e offerte" },
  { src: "/images/offre-4-6.webp", width: 420, height: 250, text: "4 pizzas achetées, 2 offertes" },
  { src: "/images/offre-6-9.webp", width: 420, height: 236, text: "6 pizzas achetées, 3 offertes" },
];

const listVariants = { show: { transition: { staggerChildren: 0.035 } } };
const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
};

function PizzaCard({ pizza }) {
  const { base, kind, toppings } = splitBase(pizza.ingredients);
  const style = kind ? BASE_STYLES[kind] : null;
  return (
    <m.li variants={itemVariants}>
      <div className="group h-full rounded-2xl border border-garden-line/70 bg-garden-card/70 p-4 transition duration-300 hover:-translate-y-1 sm:p-5 hover:border-garden-gold/50 hover:bg-garden-card">
      <div className="flex items-baseline gap-3">
        <h3 className="font-display text-2xl font-extrabold uppercase italic leading-none text-garden-cream transition group-hover:text-garden-gold">
          {pizza.name}
        </h3>
        <span className="mb-1 flex-1 border-b-2 border-dotted border-garden-line" aria-hidden="true" />
        <span className="shrink-0 rounded-full bg-gold-gradient px-3 py-1 font-display text-lg font-extrabold text-garden-ink">
          {formatPrice(pizza.price)}
        </span>
      </div>
      {base && (
        <p className="mt-2 inline-flex items-center gap-2 text-xs sm:mt-3 font-semibold uppercase tracking-wider text-garden-gold">
          <span className={`h-2.5 w-2.5 rounded-full ${style.dot}`} aria-hidden="true" />
          {base}
        </p>
      )}
      <p className="mt-1.5 text-sm leading-relaxed text-garden-muted">{toppings}</p>
      </div>
    </m.li>
  );
}

function ExtraGroup({ group }) {
  return (
    <div className="rounded-2xl border border-garden-line/70 bg-garden-card/70 p-6">
      <h3 className="font-display text-2xl font-extrabold uppercase italic text-garden-gold">{group.title}</h3>
      <m.ul variants={listVariants} initial="hidden" animate="show" className="mt-4 divide-y divide-garden-line/60">
        {group.items.map((entry) => (
          <m.li key={entry.name} variants={itemVariants} className="flex items-baseline justify-between gap-4 py-3">
            <span className="text-garden-cream">
              {entry.name}
              {entry.note && (
                <span className="mt-1 block w-fit rounded-full bg-garden-red/15 px-2.5 py-0.5 text-xs font-semibold text-garden-gold">
                  {entry.note}
                </span>
              )}
            </span>
            <span className="shrink-0 font-display text-xl font-extrabold text-garden-cream">{formatPrice(entry.price)}</span>
          </m.li>
        ))}
      </m.ul>
    </div>
  );
}

export default function Menu() {
  const [active, setActive] = useState(TABS[0].id);
  const pizzaCategory = PIZZA_CATEGORIES.find((category) => category.id === active);
  const extraCategory = EXTRA_CATEGORIES.find((category) => category.id === active);

  return (
    <section id="carte" aria-labelledby="carte-title" className="relative scroll-mt-16 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle id="carte-title" eyebrow="La carte" title="Notre carte">
          {PIZZA_COUNT} recettes de pizzas et calzones, sur base tomate, crème ou huile d’olive.
        </SectionTitle>

        <Reveal className="mx-auto mt-12 grid max-w-4xl grid-cols-3 gap-3 sm:gap-6">
          {OFFERS.map((offer, index) => (
            <figure key={offer.src} className="group flex flex-col items-center text-center">
              <Image
                src={offer.src}
                alt=""
                width={offer.width}
                height={offer.height}
                sizes="(min-width: 640px) 12rem, 30vw"
                className="h-auto w-28 transition duration-300 group-hover:-rotate-3 group-hover:scale-110 sm:w-44"
                style={{ transitionDelay: `${index * 30}ms` }}
              />
              <figcaption className="mt-2 text-xs text-garden-muted sm:text-sm">{offer.text}</figcaption>
            </figure>
          ))}
        </Reveal>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-garden-muted">
          La pizza offerte peut être remplacée par une bouteille de vin (Syrah ou vin de pays).
        </p>

        <div className="sticky top-[3.6rem] z-20 -mx-4 mt-14 bg-garden-ink/90 px-4 py-3 backdrop-blur-md sm:mx-0 sm:rounded-full sm:px-2">
          <div role="tablist" aria-label="Catégories de la carte" className="no-scrollbar flex gap-2 overflow-x-auto sm:justify-center">
            {TABS.map((tab) => {
              const selected = tab.id === active;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  id={`tab-${tab.id}`}
                  aria-selected={selected}
                  aria-controls="carte-panel"
                  onClick={() => setActive(tab.id)}
                  className={`relative shrink-0 rounded-full px-5 py-2.5 font-display text-lg font-bold uppercase tracking-wide transition-colors ${
                    selected ? "text-white" : "text-garden-muted hover:text-garden-cream"
                  }`}
                >
                  {selected && (
                    <m.span
                      layoutId="tab-pill"
                      className="absolute inset-0 rounded-full bg-garden-red"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative">
                    {tab.label}
                    {tab.count && <span className="ml-1.5 text-sm opacity-70">{tab.count}</span>}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div id="carte-panel" role="tabpanel" aria-labelledby={`tab-${active}`} className="mt-10 min-h-[24rem]">
          <AnimatePresence mode="wait">
            <m.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
            >
              {pizzaCategory && (
                <>
                  <ul className="mb-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-garden-muted" aria-label="Légende des bases">
                    {Object.values(BASE_STYLES).map((style) => (
                      <li key={style.label} className="inline-flex items-center gap-2">
                        <span className={`h-2.5 w-2.5 rounded-full ${style.dot}`} aria-hidden="true" />
                        {style.label}
                      </li>
                    ))}
                  </ul>
                  <m.ul variants={listVariants} initial="hidden" animate="show" className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {pizzaCategory.items.map((pizza) => (
                      <PizzaCard key={pizza.name} pizza={pizza} />
                    ))}
                  </m.ul>
                </>
              )}
              {extraCategory && (
                <div className={`mx-auto grid gap-6 ${extraCategory.groups.length > 1 ? "max-w-5xl md:grid-cols-2" : "max-w-2xl"}`}>
                  {extraCategory.groups.map((group) => (
                    <ExtraGroup key={group.title} group={group} />
                  ))}
                </div>
              )}
            </m.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
