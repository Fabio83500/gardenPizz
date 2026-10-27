import Image from "next/image";
import { PARTNERS } from "@/data/partners";
import SectionTitle from "./SectionTitle";

function Row({ hidden }) {
  return (
    <ul className="flex shrink-0 items-center gap-16 pr-16" aria-hidden={hidden || undefined}>
      {PARTNERS.map((partner) => (
        <li key={partner.name} className="shrink-0">
          <Image
            src={partner.logo}
            alt={hidden ? "" : partner.name}
            width={partner.width}
            height={partner.height}
            sizes="10rem"
            className="h-20 w-auto max-w-[10rem] object-contain grayscale transition duration-300 hover:scale-110 hover:grayscale-0"
          />
        </li>
      ))}
    </ul>
  );
}

export default function Partners() {
  return (
    <section aria-labelledby="partenaires-title" className="pb-24 sm:pb-32">
      <div className="px-4 sm:px-6">
        <SectionTitle id="partenaires-title" eyebrow="Ils nous soutiennent" title="Nos partenaires" />
      </div>
      <div className="marquee-mask group mt-12 overflow-hidden bg-garden-cream py-8">
        <div className="flex w-max motion-safe:animate-marquee-slow group-hover:[animation-play-state:paused]">
          <Row />
          <Row hidden />
        </div>
      </div>
    </section>
  );
}
