import "@fontsource-variable/manrope";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <title>Мартин Казино — официальный сайт, рабочее зеркало и игра онлайн | Martin Casino</title>
        <meta
          name="description"
          content="Martin Casino — Мартин Казино официальный сайт: играть онлайн в слоты, live-казино и crash games. Мартин казино зеркало рабочее, вход и регистрация, бонус до 225% + 600 фриспинов."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="martin casino, мартин казино, martin casino официальный сайт, мартин казино зеркало, мартин казино зеркало рабочее, martin casino играть, мартин казино онлайн"
        />
        <link rel="canonical" href="https://martin5casino.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://martin5casino.vercel.app/" />
        <meta
          property="og:title"
          content="Мартин Казино — официальный сайт, рабочее зеркало и игра онлайн | Martin Casino"
        />
        <meta
          property="og:description"
          content="Martin Casino — Мартин Казино официальный сайт: играть онлайн в слоты, live-казино и crash games. Мартин казино зеркало рабочее, вход и регистрация, бонус до 225% + 600 фриспинов."
        />
        <meta property="og:image" content="https://martin5casino.vercel.app/img/hero.jpg" />
        <meta property="og:locale" content="ru_RU" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Мартин Казино — официальный сайт, рабочее зеркало и игра онлайн | Martin Casino"
        />
        <meta
          name="twitter:description"
          content="Martin Casino — Мартин Казино официальный сайт: играть онлайн в слоты, live-казино и crash games. Мартин казино зеркало рабочее, вход и регистрация, бонус до 225% + 600 фриспинов."
        />
        <meta name="twitter:image" content="https://martin5casino.vercel.app/img/hero.jpg" />
        <meta name="theme-color" content="#0d0d13" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
