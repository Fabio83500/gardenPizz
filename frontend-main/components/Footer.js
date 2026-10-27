import Image from "next/image";
import Link from "next/link";
import { openConsent } from "@/lib/analytics";
import { NAV_LINKS, SOCIALS } from "@/data/site";
import { RESTAURANTS } from "@/data/restaurants";
import { FacebookIcon, InstagramIcon, PhoneIcon } from "./Icons";

const SOCIAL_ICONS = { Facebook: FacebookIcon, Instagram: InstagramIcon };

export default function Footer() {
  return (
    <footer className="relative bg-garden-coal pb-28 text-garden-muted md:pb-0">
      <div className="tricolore h-1.5 w-full" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/#accueil" aria-label="Garden Pizz, retour à l’accueil">
            <Image src="/images/logo.webp" alt="Garden Pizz" width={771} height={296} className="h-16 w-auto" />
          </Link>
          <p className="mt-4 max-w-xs text-sm">
            Pizzeria à Six-Fours-les-Plages et Mar Vivo. Deux pizzas achetées, la troisième offerte.
          </p>
        </div>

        <nav aria-label="Navigation du pied de page">
          <p className="font-display text-lg font-extrabold uppercase italic text-garden-cream">Navigation</p>
          <ul className="mt-4 space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-garden-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-display text-lg font-extrabold uppercase italic text-garden-cream">Commander</p>
          <ul className="mt-4 space-y-3">
            {RESTAURANTS.map((restaurant) => (
              <li key={restaurant.id}>
                <a href={`tel:${restaurant.tel}`} className="group flex items-center gap-3 transition hover:text-garden-gold">
                  <PhoneIcon className="h-4 w-4 text-garden-red" />
                  <span>
                    <span className="block text-garden-cream group-hover:text-garden-gold">{restaurant.shortName}</span>
                    {restaurant.phone}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display text-lg font-extrabold uppercase italic text-garden-cream">Suivez-nous</p>
          <ul className="mt-4 flex gap-3">
            {SOCIALS.map((social) => {
              const Icon = SOCIAL_ICONS[social.name];
              return (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Garden Pizz sur ${social.name}`}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-garden-line text-garden-cream transition hover:-translate-y-0.5 hover:border-garden-red hover:bg-garden-red"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="border-t border-garden-line/60">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-sm sm:px-6 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Garden Pizz. Tous droits réservés.</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            <li>
              <Link href="/mentions-legales" className="transition hover:text-garden-gold">
                Mentions légales
              </Link>
            </li>
            <li>
              <button type="button" onClick={openConsent} className="transition hover:text-garden-gold">
                Gestion des cookies
              </button>
            </li>
            <li>
              Site réalisé par{" "}
              <a href="https://www.mfagency.fr" target="_blank" rel="noopener" className="text-garden-cream transition hover:text-garden-gold">
                MF Agency
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
