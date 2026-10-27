import { trackCall } from "@/lib/analytics";
import { PhoneIcon } from "./Icons";

const VARIANTS = {
  red: "bg-garden-red text-white shadow-lg shadow-garden-red/30 hover:bg-garden-red-dark",
  gold: "bg-gold-gradient text-garden-ink shadow-lg shadow-garden-gold/20 hover:brightness-110",
  outline: "border border-garden-cream/30 text-garden-cream hover:border-garden-gold hover:text-garden-gold",
};

export default function CallButton({ restaurant, variant = "red", label, className = "" }) {
  return (
    <a
      href={`tel:${restaurant.tel}`}
      onClick={() => trackCall(restaurant.shortName)}
      className={`group inline-flex items-center justify-center gap-3 rounded-full px-6 py-3.5 font-semibold transition duration-200 hover:scale-[1.03] active:scale-95 ${VARIANTS[variant]} ${className}`}
    >
      <PhoneIcon className="h-5 w-5 group-hover:animate-ring" />
      <span>{label ?? restaurant.shortName}</span>
    </a>
  );
}
