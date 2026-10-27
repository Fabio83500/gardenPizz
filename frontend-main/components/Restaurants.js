import { HOURS } from "@/data/site";
import { RESTAURANTS } from "@/data/restaurants";
import CallButton from "./CallButton";
import Hexagon from "./Hexagon";
import { ArrowIcon, ClockIcon, ScooterIcon } from "./Icons";
import MapEmbed from "./MapEmbed";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

export default function Restaurants() {
  return (
    <section id="pizzerias" aria-labelledby="pizzerias-title" className="relative scroll-mt-16 overflow-hidden bg-garden-coal py-24 sm:py-32">
      <div className="hex-pattern absolute inset-0 opacity-[0.04]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle id="pizzerias-title" eyebrow="Où nous trouver" title="Nos deux pizzerias">
          Appelez la pizzeria la plus proche de chez vous pour commander, sur place, à emporter ou en livraison.
        </SectionTitle>

        <Reveal className="mx-auto mt-10 flex max-w-3xl flex-col items-stretch justify-center gap-3 sm:flex-row">
          {HOURS.map((slot) => (
            <div key={slot.label} className="flex flex-1 items-center gap-4 rounded-2xl border border-garden-line bg-garden-card/80 px-5 py-4">
              <Hexagon className="h-12 w-12 shrink-0" fill="bg-garden-ink" border="bg-garden-gold">
                <ClockIcon className="h-5 w-5 text-garden-gold" />
              </Hexagon>
              <div>
                <p className="font-display text-xl font-extrabold uppercase italic text-garden-cream">
                  {slot.label} · {slot.time}
                </p>
                <p className="text-sm text-garden-muted">{slot.days}</p>
              </div>
            </div>
          ))}
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {RESTAURANTS.map((restaurant, index) => (
            <Reveal key={restaurant.id} delay={index * 0.12}>
              <article className="group flex h-full flex-col rounded-3xl border border-garden-line bg-garden-card p-6 transition duration-300 hover:-translate-y-1 hover:border-garden-gold/40 hover:shadow-2xl hover:shadow-black/40 sm:p-8">
              <p className="font-display text-sm font-bold uppercase tracking-[0.3em] text-garden-gold">{restaurant.city}</p>
              <h3 className="mt-2 font-display text-4xl font-extrabold uppercase italic text-garden-cream">{restaurant.name}</h3>
              <a href={`tel:${restaurant.tel}`} className="mt-1 inline-block w-fit text-2xl font-semibold text-garden-cream hover:text-garden-gold">
                {restaurant.phone}
              </a>

              <div className="mt-6">
                <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-garden-muted">
                  <ScooterIcon className="h-5 w-5 text-garden-red" />
                  Zone de livraison
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {restaurant.delivery.map((place) => (
                    <li key={place} className="rounded-full border border-garden-line bg-garden-ink/60 px-3 py-1 text-sm text-garden-cream">
                      {place}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <CallButton restaurant={restaurant} variant={index === 0 ? "red" : "gold"} label="Appeler" className="sm:flex-1" />
                <a
                  href={restaurant.directions}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center justify-center gap-2 rounded-full border border-garden-cream/30 px-6 py-3.5 font-semibold text-garden-cream transition hover:border-garden-gold hover:text-garden-gold sm:flex-1"
                >
                  Itinéraire
                  <ArrowIcon className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>

              <div className="mt-auto pt-6">
                <MapEmbed restaurant={restaurant} />
              </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
