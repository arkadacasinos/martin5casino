import type { CSSProperties } from "react";
import { ChevronRight } from "lucide-react";
import { K7V2_REF } from "@/lib/k7v2-ref";

const K7V2_PROMOS = [
  { title: "Колесо Фортуны", img: "/img/promo-wheel.jpg", accent: "#2dd4bf" },
  { title: "Скачай приложение", img: "/img/promo-app.jpg", accent: "#38bdf8" },
  { title: "Реферальная программа", img: "/img/promo-ref.jpg", accent: "#e34fa8" },
  { title: "Магазин бонусов", img: "/img/promo-chest.jpg", accent: "#ef4444" },
];

export function K7v2Promos() {
  return (
    <section className="k7v2-promos" aria-label="Акции и сервисы Martin Casino">
      {K7V2_PROMOS.map(({ title, img, accent }) => (
        <a
          key={title}
          className="k7v2-promo"
          href={K7V2_REF}
          style={{ "--k7v2-accent": accent } as CSSProperties}
        >
          <img src={img} alt="" loading="lazy" width={52} height={52} />
          <span className="k7v2-promo-t">{title}</span>
          <ChevronRight size={18} />
        </a>
      ))}
    </section>
  );
}
