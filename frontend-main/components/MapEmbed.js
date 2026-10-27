import { useState } from "react";
import { PinIcon } from "./Icons";

// La carte Google ne se charge qu'au clic : page plus légère et aucun cookie Google avant l'action de l'internaute
export default function MapEmbed({ restaurant }) {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <iframe
        src={restaurant.mapEmbed}
        title={`Plan d’accès ${restaurant.name}`}
        className="h-72 w-full rounded-2xl border-0 sm:h-80"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setLoaded(true)}
      className="map-placeholder group relative flex h-72 w-full flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border border-garden-line text-garden-cream sm:h-80"
    >
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-garden-red text-white shadow-lg shadow-garden-red/40 transition group-hover:scale-110">
        <span className="absolute inset-0 rounded-full bg-garden-red motion-safe:animate-ping opacity-40" aria-hidden="true" />
        <PinIcon className="relative h-7 w-7" />
      </span>
      <span className="font-semibold">Afficher le plan Google Maps</span>
      <span className="text-xs text-garden-muted">Le plan est chargé depuis Google au clic</span>
    </button>
  );
}
