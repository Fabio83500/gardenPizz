import { PIZZA_COUNT } from "@/data/menu";
import Counter from "./Counter";
import Hexagon from "./Hexagon";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

const STATS = [
  { value: 2, suffix: "", label: "pizzerias, à Six-Fours et Mar Vivo" },
  { value: 7, suffix: "j/7", label: "ouvert toute la semaine" },
  { value: PIZZA_COUNT, suffix: "", label: "recettes de pizzas et calzones" },
];

export default function About() {
  return (
    <section id="a-propos" aria-labelledby="a-propos-title" className="relative scroll-mt-16 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <SectionTitle id="a-propos-title" align="left" eyebrow="À propos" title="Bien manger sans se ruiner" />
          <Reveal delay={0.1} className="mt-8 max-w-prose space-y-5 text-lg leading-relaxed text-garden-muted">
            <p>
              Notre pizzeria vous accueille désormais dans deux établissements, pour encore plus de proximité et de
              gourmandise : l’un à <strong className="text-garden-cream">Six-Fours-les-Plages</strong>, l’autre à{" "}
              <strong className="text-garden-cream">Mar Vivo</strong>. Ouverts 7 jours sur 7, nous vous proposons de
              déguster nos pizzas sur place ou de profiter de notre service de livraison selon votre secteur.
            </p>
            <p>
              Pour vous régaler tout en faisant des économies, notre offre reste la même : pour deux pizzas achetées,{" "}
              <strong className="text-garden-gold">la troisième est offerte</strong>. Notre équipe met un point d’honneur
              à vous servir des pizzas généreuses, préparées avec des ingrédients frais et savoureux.
            </p>
            <p>
              Découvrez notre carte et venez partager un moment gourmand en famille ou entre amis, sur place ou à la
              maison.
            </p>
          </Reveal>
        </div>

        <ul className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {STATS.map((stat, index) => (
            <Reveal as="li" key={stat.label} delay={0.1 + index * 0.1}>
              <div className="group flex items-center gap-5 rounded-2xl border border-garden-line bg-garden-card/80 p-5 transition duration-300 hover:border-garden-red/60">
                <Hexagon
                  className="h-24 w-24 shrink-0 transition-transform duration-500 group-hover:rotate-[30deg]"
                  fill="bg-garden-red"
                  border="bg-garden-gold"
                >
                  <span className="font-display text-3xl font-extrabold italic text-white transition-transform duration-500 group-hover:-rotate-[30deg]">
                    <Counter value={stat.value} />
                    {stat.suffix}
                  </span>
                </Hexagon>
                <p className="font-display text-xl font-bold uppercase leading-tight text-garden-cream">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
