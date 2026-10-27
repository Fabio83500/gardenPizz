const WORDS = ["2 achetées = la 3e offerte", "4=6", "6=9", "Tous les soirs dès 18h", "Sur place", "À emporter", "En livraison"];

function Row({ hidden }) {
  return (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {WORDS.map((word) => (
        <li key={word} className="flex items-center whitespace-nowrap px-6 font-display text-2xl font-extrabold uppercase italic text-white sm:text-3xl">
          {word}
          <span className="ml-12 text-garden-gold" aria-hidden="true">★</span>
        </li>
      ))}
    </ul>
  );
}

// Bandeau rouge qui défile en continu (deux copies identiques, translation de -50 %)
export default function OfferBand() {
  return (
    <div className="relative z-10 -my-2 -rotate-1 overflow-hidden border-y-4 border-garden-ink bg-garden-red py-4 shadow-2xl">
      <div className="flex w-max motion-safe:animate-marquee">
        <Row />
        <Row hidden />
      </div>
    </div>
  );
}
