const K7V2_WINS = [
  { name: "L**ar", sum: "1 800 000 ₽", img: "/img/game1.jpg", hot: true },
  { name: "M**ha", sum: "1 090 000 ₽", img: "/img/game2.jpg", hot: true },
  { name: "X**k", sum: "180 440 ₽", img: "/img/game3.jpg", hot: false },
  { name: "ma**ra", sum: "252 100 ₽", img: "/img/game4.jpg", hot: false },
  { name: "j**a", sum: "198 300 ₽", img: "/img/game2.jpg", hot: false },
  { name: "B**ec", sum: "499 900 ₽", img: "/img/game3.jpg", hot: false },
  { name: "K**v", sum: "74 500 ₽", img: "/img/game1.jpg", hot: false },
  { name: "D**n", sum: "312 000 ₽", img: "/img/game4.jpg", hot: false },
];

function K7v2Win({ name, sum, img, hot }: (typeof K7V2_WINS)[number]) {
  return (
    <div className="k7v2-win">
      <img src={img} alt="" loading="lazy" width={42} height={42} />
      <span className="k7v2-win-name">{name}</span>
      <span className={hot ? "k7v2-win-sum k7v2-win-hot" : "k7v2-win-sum"}>{sum}</span>
    </div>
  );
}

export function K7v2Ticker() {
  return (
    <section className="k7v2-ticker" aria-label="Последние крупные выигрыши в Martin Casino">
      <div className="k7v2-ticker-track">
        <div className="k7v2-ticker-half">
          {K7V2_WINS.map((win) => (
            <K7v2Win key={win.name} {...win} />
          ))}
        </div>
        <div className="k7v2-ticker-half" aria-hidden="true">
          {K7V2_WINS.map((win) => (
            <K7v2Win key={`${win.name}-dup`} {...win} />
          ))}
        </div>
      </div>
    </section>
  );
}
