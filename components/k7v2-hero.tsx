import { K7V2_REF } from "@/lib/k7v2-ref";

const K7V2_PAYS = ["СБП", "MIR", "VISA", "Mastercard", "USDT"];

export function K7v2Hero() {
  return (
    <section className="k7v2-hero" aria-label="Приветственный пакет Martin Casino">
      <img
        className="k7v2-hero-img"
        src="/img/hero.jpg"
        alt="Синий попугай Martin Casino с золотыми монетами"
        fetchPriority="high"
      />
      <div className="k7v2-hero-veil" aria-hidden="true" />
      <div className="k7v2-hero-in">
        <p className="k7v2-hero-welcome">Welcome package</p>
        <p className="k7v2-hero-line">
          <span className="k7v2-hero-do">до</span>
          <span className="k7v2-hero-pct">225%</span>
          <span className="k7v2-hero-spins">
            <span className="k7v2-hero-spins-b">+600</span>
            <span className="k7v2-hero-spins-t">FREE SPINS</span>
          </span>
        </p>
        <a className="k7v2-hero-cta" href={K7V2_REF}>
          Получить
        </a>
        <p className="k7v2-pays" aria-label="Способы оплаты Martin Casino">
          {K7V2_PAYS.map((pay) => (
            <span key={pay} className="k7v2-pay">
              {pay}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
