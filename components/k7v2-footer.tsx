const K7V2_TAGS = [
  { label: "#martin-casino", href: "#k7v2-ofsite" },
  { label: "#martin-casino-официальный-сайт", href: "#k7v2-ofsite" },
  { label: "#martin-casino-официальный", href: "#k7v2-oficial" },
  { label: "#martin-casino-зеркало", href: "#k7v2-zerkalo" },
  { label: "#мартин-казино", href: "#k7v2-online" },
  { label: "#martin-casino-играть", href: "#k7v2-igrat" },
  { label: "#мартин-казино-официальный-сайт", href: "#k7v2-ofsite" },
  { label: "#мартин-казино-официальный", href: "#k7v2-oficial" },
  { label: "#мартин-казино-онлайн", href: "#k7v2-online" },
  { label: "#мартин-казино-играть", href: "#k7v2-igrat" },
  { label: "#мартин-казино-зеркало", href: "#k7v2-zerkalo" },
  { label: "#мартин-казино-зеркало-рабочее", href: "#k7v2-zerkalo-rab" },
];

export function K7v2Footer() {
  return (
    <footer className="k7v2-footer">
      <div className="k7v2-footer-in">
        <p className="k7v2-footer-h">Поиск по сайту</p>
        <nav className="k7v2-tags" aria-label="Хэштеги разделов Martin Casino">
          {K7V2_TAGS.map(({ label, href }) => (
            <a key={label} className="k7v2-tag" href={href}>
              {label}
            </a>
          ))}
        </nav>
        <p className="k7v2-footer-note">
          Martin Casino, Мартин Казино — информационная страница. 18+ Азартные игры могут вызывать
          зависимость. Играйте ответственно и только на средства, которые готовы потратить.
          © 2026 Martin Casino.
        </p>
      </div>
    </footer>
  );
}
