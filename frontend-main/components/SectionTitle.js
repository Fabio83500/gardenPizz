import Reveal from "./Reveal";

export default function SectionTitle({ eyebrow, title, children, align = "center", id }) {
  const centered = align === "center";
  return (
    <Reveal className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className={`flex items-center gap-3 font-display text-sm font-bold uppercase tracking-[0.3em] text-garden-gold ${centered ? "justify-center" : ""}`}>
        <span className="tricolore h-1 w-8 rounded-full" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 id={id} className="mt-3 font-display text-5xl font-extrabold uppercase italic leading-none text-garden-cream sm:text-6xl">
        {title}
      </h2>
      {children && <p className="mt-5 text-lg text-garden-muted">{children}</p>}
    </Reveal>
  );
}
