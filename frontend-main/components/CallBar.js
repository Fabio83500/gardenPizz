import { useEffect, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { RESTAURANTS } from "@/data/restaurants";
import CallButton from "./CallButton";

// Barre d'appel fixée en bas de l'écran sur mobile, une fois le hero dépassé
export default function CallBar({ alwaysVisible = false }) {
  const [visible, setVisible] = useState(alwaysVisible);

  useEffect(() => {
    if (alwaysVisible) return;
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [alwaysVisible]);

  return (
    <AnimatePresence>
      {visible && (
        <m.div
          className="fixed inset-x-0 bottom-0 z-40 border-t border-garden-line bg-garden-ink/95 px-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 backdrop-blur-md md:hidden"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <p className="sr-only">Appeler une pizzeria</p>
          <div className="grid grid-cols-2 gap-2">
            {RESTAURANTS.map((restaurant, index) => (
              <CallButton
                key={restaurant.id}
                restaurant={restaurant}
                variant={index === 0 ? "red" : "gold"}
                className="px-3 py-3 text-sm"
              />
            ))}
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
