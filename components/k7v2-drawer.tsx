import { Club, Crown, Dices, Home, LogIn, Play, Trophy, UserRound, X, Zap } from "lucide-react";
import { K7V2_REF } from "@/lib/k7v2-ref";

const K7V2_MENU = [
  { label: "Лобби", icon: Home },
  { label: "Слоты", icon: Dices },
  { label: "Live-казино", icon: Play },
  { label: "Спорт", icon: Trophy },
  { label: "Crash Games", icon: Zap },
  { label: "Настольные", icon: Club },
  { label: "Провайдеры", icon: Crown },
];

export function K7v2Drawer() {
  return (
    <>
      <aside id="k7v2-menu" className="k7v2-menu" aria-label="Меню сайта Martin Casino">
        <div className="k7v2-menu-head">
          <span className="k7v2-logo">
            <span className="k7v2-logo-m" aria-hidden="true">
              M
            </span>
            ARTIN
          </span>
          <a className="k7v2-menu-close" href="#!" aria-label="Закрыть меню">
            <X size={22} />
          </a>
        </div>
        <nav aria-label="Разделы Martin Casino">
          {K7V2_MENU.map(({ label, icon: Icon }) => (
            <a key={label} className="k7v2-menu-link" href={K7V2_REF}>
              <Icon size={20} />
              {label}
            </a>
          ))}
        </nav>
        <div className="k7v2-menu-cta">
          <a className="k7v2-btn-in" href={K7V2_REF}>
            <LogIn size={16} />
            Вход
          </a>
          <a className="k7v2-btn-reg" href={K7V2_REF}>
            <UserRound size={16} />
            Регистрация
          </a>
        </div>
      </aside>
      <a className="k7v2-scrim" href="#!" aria-label="Закрыть меню" tabIndex={-1} />
    </>
  );
}
