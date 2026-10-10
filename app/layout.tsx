import { Inter, Montserrat } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin', 'cyrillic'], variable: '--font-inter' })
const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  weight: ['600', '700', '800', '900'],
  variable: '--font-montserrat',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="bg-ink">
      <head>
        <title>Monro Casino — официальный сайт и рабочее зеркало | Монро казино играть онлайн</title>
        <meta
          name="description"
          content="Monro Casino официальный сайт и рабочее зеркало Монро Казино. Играть в Monro Casino онлайн: слоты, live-казино, спорт и бонус +150% на депозит. Вход и регистрация на официальном сайте Monro Casino."
        />
        <meta
          name="keywords"
          content="monro casino, monro casino официальный сайт, monro casino официальный, monro казино, monro casino зеркало, монро казино официальный, монро казино официальный сайт, monro casino играть, монро казино играть, монро казино онлайн, монро казино зеркало рабочее, монро казино зеркало"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://monro4casino.vercel.app" />
        <meta name="theme-color" content="#0b1322" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://monro4casino.vercel.app" />
        <meta property="og:title" content="Monro Casino — официальный сайт и рабочее зеркало | Монро казино играть онлайн" />
        <meta
          property="og:description"
          content="Monro Casino официальный сайт и рабочее зеркало Монро Казино. Играть в Monro Casino онлайн: слоты, live-казино, спорт и бонус +150% на депозит."
        />
        <meta property="og:image" content="https://monro4casino.vercel.app/images/hero-casino.jpg" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:site_name" content="Monro Casino" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Monro Casino — официальный сайт и рабочее зеркало | Монро казино играть онлайн" />
        <meta
          name="twitter:description"
          content="Monro Casino официальный сайт и рабочее зеркало Монро Казино. Играть в Monro Casino онлайн: слоты, live-казино, спорт и бонус +150% на депозит."
        />
        <meta name="twitter:image" content="https://monro4casino.vercel.app/images/hero-casino.jpg" />
      </head>
      <body className={`${inter.variable} ${montserrat.variable} bg-ink font-sans text-fog antialiased`}>
        {children}
      </body>
    </html>
  )
}
