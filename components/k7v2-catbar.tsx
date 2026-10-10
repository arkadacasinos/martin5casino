import { Club, Crown, Dices, Headphones, Home, Play, Trophy, Zap } from "lucide-react";
import { K7V2_REF } from "@/lib/k7v2-ref";

const K7V2_CATS = [
  { label: "Лобби", icon: Home, on: true },
  { label: "Слоты", icon: Dices, on: false },
  { label: "Live-казино", icon: Play, on: false },
  { label: "Спорт", icon: Trophy, on: false },
  { label: "Crash Games", icon: Zap, on: false },
  { label: "Настольные", icon: Club, on: false },
  { label: "Провайдеры", icon: Crown, on: false },
];

export function K7v2Catbar() {
  return (
    <>
      <nav className="k7v2-catbar" aria-label="Категории игр Martin Casino">
        {K7V2_CATS.map(({ label, icon: Icon, on }) => (
          <a key={label} className={on ? "k7v2-cat k7v2-cat--on" : "k7v2-cat"} href={K7V2_REF}>
            <Icon size={18} />
            {label}
          </a>
        ))}
      </nav>
      <a className="k7v2-help" href={K7V2_REF} aria-label="Поддержка Martin Casino">
        <Headphones size={24} />
      </a>
    </>
  );
}
