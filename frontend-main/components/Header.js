import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, m } from "framer-motion";
import { NAV_LINKS } from "@/data/site";
import { RESTAURANTS } from "@/data/restaurants";
import CallButton from "./CallButton";

export default function Header({ solid = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event) => event.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const compact = solid || scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        // Pas de flou quand le menu est ouvert : backdrop-filter casserait le position: fixed du menu
        open ? "bg-garden-ink" : compact ? "border-b border-garden-line/60 bg-garden-ink/85 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className={`mx-auto flex max-w-7xl items-center justify-between px-4 transition-all duration-300 sm:px-6 ${compact ? "py-2" : "py-4"}`}>
        <Link href="/#accueil" aria-label="Garden Pizz, retour à l’accueil" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo.webp"
            alt="Garden Pizz"
            width={771}
            height={296}
            priority
            className={`w-auto transition-all duration-300 ${compact ? "h-11" : "h-14 sm:h-16"}`}
          />
        </Link>

        <nav aria-label="Navigation principale" className="hidden md:block">
          <ul className="flex items-center gap-8 font-display text-lg font-bold uppercase tracking-wide text-garden-cream">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="nav-link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href="/#pizzerias"
          className="hidden rounded-full bg-garden-red px-5 py-2.5 font-display text-lg font-bold uppercase tracking-wide text-white transition hover:scale-105 hover:bg-garden-red-dark md:inline-flex"
        >
          Commander
        </Link>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-garden-cream/20 text-garden-cream md:hidden"
        >
          <span className="relative block h-3.5 w-5" aria-hidden="true">
            <span className={`absolute left-0 h-0.5 w-5 rounded bg-current transition-all duration-300 ${open ? "top-1.5 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 top-1.5 h-0.5 w-5 rounded bg-current transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 h-0.5 w-5 rounded bg-current transition-all duration-300 ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <m.div
            id="menu-mobile"
            className="fixed inset-x-0 bottom-0 top-0 -z-10 flex flex-col justify-between overflow-y-auto bg-garden-ink px-6 pb-10 pt-28 md:hidden"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav aria-label="Navigation mobile">
              <ul className="space-y-2">
                {NAV_LINKS.map((link, index) => (
                  <m.li
                    key={link.href}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + index * 0.06 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block py-2 font-display text-5xl font-extrabold uppercase italic text-garden-cream transition hover:text-garden-gold"
                    >
                      {link.label}
                    </Link>
                  </m.li>
                ))}
              </ul>
            </nav>
            <m.div
              className="mt-10 space-y-3"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <p className="font-display text-sm font-bold uppercase tracking-[0.3em] text-garden-gold">Appeler une pizzeria</p>
              {RESTAURANTS.map((restaurant, index) => (
                <CallButton
                  key={restaurant.id}
                  restaurant={restaurant}
                  variant={index === 0 ? "red" : "gold"}
                  label={`${restaurant.shortName} · ${restaurant.phone}`}
                  className="w-full"
                />
              ))}
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}
