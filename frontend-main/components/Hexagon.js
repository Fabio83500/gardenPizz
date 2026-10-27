// Hexagone repris de l'écusson du logo (badges 2=3, 4=6, 6=9…) : liseré + fond
export default function Hexagon({ className = "", fill = "bg-garden-red", border = "bg-white", style, children }) {
  return (
    <span className={`hexagon inline-flex p-[3px] ${border} ${className}`} style={style}>
      <span className={`hexagon flex h-full w-full items-center justify-center ${fill}`}>{children}</span>
    </span>
  );
}
