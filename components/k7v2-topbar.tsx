import { Bell, LogIn, Menu, Search, UserRound } from "lucide-react";
import { K7V2_REF } from "@/lib/k7v2-ref";

export function K7v2Topbar() {
  return (
    <header className="k7v2-topbar">
      <div className="k7v2-topbar-in">
        <a className="k7v2-burger" href="#k7v2-menu" aria-label="Открыть меню">
          <Menu size={22} />
        </a>
        <a className="k7v2-logo" href={K7V2_REF} aria-label="Martin Casino — на главную">
          <span className="k7v2-logo-m" aria-hidden="true">
            M
          </span>
          ARTIN
        </a>
        <a className="k7v2-search" href={K7V2_REF} aria-label="Поиск по сайту Martin Casino">
          <Search size={18} />
          <span>Поиск</span>
        </a>
        <a className="k7v2-bell" href={K7V2_REF} aria-label="Уведомления Martin Casino">
          <Bell size={20} />
          <span className="k7v2-bell-badge" aria-hidden="true">
            1
          </span>
        </a>
        <a className="k7v2-btn-in" href={K7V2_REF}>
          <LogIn size={16} />
          Вход
        </a>
        <a className="k7v2-btn-reg" href={K7V2_REF}>
          <UserRound size={16} />
          Регистрация
        </a>
      </div>
    </header>
  );
}
