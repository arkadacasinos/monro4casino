import { REF_URL } from '@/lib/site'

const hashtags = [
  { tag: '#monro-casino', href: '#itog' },
  { tag: '#monro-casino-oficialnyj-sajt', href: '#oficialnyj-sajt' },
  { tag: '#monro-casino-oficialnyj', href: '#oficialnyj' },
  { tag: '#monro-kazino', href: '#bonusy' },
  { tag: '#monro-casino-zerkalo', href: '#zerkalo' },
  { tag: '#monro-kazino-oficialnyj', href: '#oficialnyj' },
  { tag: '#monro-kazino-oficialnyj-sajt', href: '#oficialnyj-sajt' },
  { tag: '#monro-casino-igrat', href: '#igrat' },
  { tag: '#monro-kazino-igrat', href: '#mobile' },
  { tag: '#monro-kazino-onlajn', href: '#live-sport' },
  { tag: '#monro-kazino-zerkalo-rabochee', href: '#bezopasnost' },
  { tag: '#monro-kazino-zerkalo', href: '#zerkalo' },
]

const footerLinks = [
  { label: 'Официальный сайт', href: REF_URL },
  { label: 'Зеркало', href: REF_URL },
  { label: 'Вход', href: REF_URL },
  { label: 'Регистрация', href: REF_URL },
  { label: 'Играть онлайн', href: REF_URL },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-panel px-4 py-8">
      <nav aria-label="Хэштеги разделов" className="flex flex-wrap justify-center gap-2">
        {hashtags.map((h) => (
          <a
            key={h.tag}
            href={h.href}
            className="rounded-full border border-line bg-panel2 px-3 py-1 text-xs text-fog/70 hover:border-flame hover:text-flame"
          >
            {h.tag}
          </a>
        ))}
      </nav>
      <nav aria-label="Ссылки Monro Casino" className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2">
        {footerLinks.map((l) => (
          <a key={l.label} href={l.href} className="text-sm font-semibold text-fog/80 hover:text-flame">
            {l.label}
          </a>
        ))}
      </nav>
      <p className="mt-6 text-center text-xs leading-relaxed text-fog/50">
        © 2026 Monro Casino обзор. Информационная страница. 18+ Азартные игры могут вызывать зависимость — играйте
        ответственно.
      </p>
    </footer>
  )
}
