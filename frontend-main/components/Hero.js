import Image from "next/image";
import Link from "next/link";
import { m } from "framer-motion";
import { RESTAURANTS } from "@/data/restaurants";
import CallButton from "./CallButton";
import Hexagon from "./Hexagon";
import { ArrowIcon } from "./Icons";

const EASE = [0.22, 1, 0.36, 1];

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: EASE },
});

// Petits hexagones qui flottent autour de l'écusson, comme sur le logo
const FLOATING = [
  { text: "4=6", className: "-left-2 top-[4%] h-16 w-16 text-xl sm:-left-6 sm:h-20 sm:w-20 sm:text-2xl", rotate: "-8deg", delay: "0s" },
  { text: "6=9", className: "-right-2 top-[22%] h-[4.5rem] w-[4.5rem] text-2xl sm:-right-8 sm:h-24 sm:w-24 sm:text-3xl", rotate: "6deg", delay: "1.2s" },
];

export default function Hero() {
  return (
    <section id="accueil" aria-labelledby="hero-title" className="relative isolate flex min-h-[100svh] items-center overflow-hidden pb-20 pt-28 lg:pt-24">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <Image
          src="/images/hero.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="origin-right object-cover object-right motion-safe:animate-kenburns"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-garden-ink via-garden-ink/85 to-garden-ink/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-garden-ink via-transparent to-garden-ink/60" />
        <div className="hex-pattern absolute inset-0 opacity-[0.05]" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="order-2 lg:order-1">
          <m.p {...fadeUp(0.1)} className="flex flex-wrap items-center gap-x-3 gap-y-1 font-display text-base font-bold uppercase tracking-[0.25em] text-garden-gold">
            <span className="tricolore h-1 w-8 rounded-full" aria-hidden="true" />
            Six-Fours · Mar Vivo · Le soir dès 18h
          </m.p>

          <m.h1 {...fadeUp(0.2)} id="hero-title" className="mt-5 font-display text-6xl font-extrabold uppercase italic leading-[0.9] text-garden-cream sm:text-7xl xl:text-8xl">
            <span className="sr-only">Garden Pizz, pizzeria à Six-Fours-les-Plages et Mar Vivo : </span>
            Deux pizzas achetées,{" "}
            <span className="text-gold-gradient">la troisième offerte</span>
          </m.h1>

          <m.p {...fadeUp(0.3)} className="mt-6 max-w-xl text-lg text-garden-muted">
            Deux pizzerias dans le Var, ouvertes tous les soirs dès 18h. Sur place, à emporter ou en livraison, avec l’offre{" "}
            <span className="font-brush text-2xl text-garden-red">2=3</span> sur toute la carte.
          </m.p>

          <m.div {...fadeUp(0.4)} className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {RESTAURANTS.map((restaurant, index) => (
              <CallButton
                key={restaurant.id}
                restaurant={restaurant}
                variant={index === 0 ? "red" : "gold"}
                label={`Appeler ${restaurant.shortName}`}
              />
            ))}
          </m.div>

          <m.div {...fadeUp(0.5)} className="mt-5">
            <Link href="/#carte" className="group inline-flex items-center gap-2 font-semibold text-garden-cream transition hover:text-garden-gold">
              Voir la carte
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </m.div>
        </div>

        <div className="relative order-1 mx-auto w-full max-w-[15rem] sm:max-w-xs lg:order-2 lg:max-w-md xl:max-w-lg">
          <div className="absolute inset-[8%] -z-10 rounded-full bg-garden-gold/30 blur-3xl motion-safe:animate-glow" aria-hidden="true" />
          <m.div
            initial={{ opacity: 0, scale: 0.7, rotate: -6 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 12, delay: 0.15 }}
          >
            <div className="motion-safe:animate-float" style={{ animationDuration: "7s" }}>
              <Image
                src="/images/ecusson-2-3.webp"
                alt="Écusson Garden Pizz : pizzeria 2=3"
                width={1100}
                height={1129}
                priority
                sizes="(min-width: 1280px) 32rem, (min-width: 640px) 28rem, 15rem"
                className="h-auto w-full drop-shadow-[0_25px_40px_rgba(0,0,0,0.6)]"
              />
            </div>
          </m.div>

          {FLOATING.map((hex, index) => (
            <m.div
              key={hex.text}
              className={`absolute ${hex.className}`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 14, delay: 0.7 + index * 0.15 }}
              aria-hidden="true"
            >
              <Hexagon
                className="h-full w-full font-display font-extrabold italic text-white motion-safe:animate-float"
                style={{ "--r": hex.rotate, animationDelay: hex.delay }}
              >
                {hex.text}
              </Hexagon>
            </m.div>
          ))}
        </div>
      </div>

      <Link href="/#carte" aria-label="Descendre vers la carte" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 sm:block">
        <span className="flex h-11 w-7 justify-center rounded-full border-2 border-garden-cream/40 pt-2">
          <span className="block h-2 w-1 rounded-full bg-garden-gold motion-safe:animate-scrollcue" />
        </span>
      </Link>
    </section>
  );
}
