import { m } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

// Fait apparaître un bloc (fondu + montée) quand il entre à l'écran
export default function Reveal({ as = "div", delay = 0, y = 24, className, children }) {
  const Component = m[as];
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: EASE }}
    >
      {children}
    </Component>
  );
}
