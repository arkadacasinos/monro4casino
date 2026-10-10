import { ChevronUp, X } from 'lucide-react'
import { REF_URL } from '@/lib/site'

const wins = [
  { img: '/images/win-1.jpg', game: 'Gates of Monro', user: 'Але***ндр 22:51 x11.77', sum: '23 535 ₽' },
  { img: '/images/win-2.jpg', game: 'Sweet Monro', user: 'А**а 22:54 x160.3', sum: '3 206 ₽' },
  { img: '/images/win-3.jpg', game: 'Coin Fortune', user: 'В**ек 22:54 x163.75', sum: '3 275 ₽' },
  { img: '/images/win-1.jpg', game: 'Gates of Monro', user: 'М**ия 22:57 x8.4', sum: '1 940 ₽' },
  { img: '/images/win-2.jpg', game: 'Sweet Monro', user: 'Д**ис 22:58 x42.1', sum: '9 812 ₽' },
  { img: '/images/win-3.jpg', game: 'Coin Fortune', user: 'С**ей 23:01 x27.9', sum: '6 480 ₽' },
]

function WinCard({ win }: { win: (typeof wins)[number] }) {
  return (
    <a href={REF_URL} className="flex shrink-0 items-center gap-2 rounded-lg bg-panel2 px-2 py-1.5 hover:bg-line/60">
      <img src={win.img} alt="" aria-hidden="true" width={40} height={40} className="h-10 w-10 rounded-md" />
      <span className="flex min-w-0 flex-col">
        <span className="max-w-24 truncate text-xs font-bold text-fog">{win.game}</span>
        <span className="text-[10px] text-fog/60">{win.user}</span>
      </span>
      <span className="rounded-full bg-flame px-2 py-0.5 text-[11px] font-black text-ink">{win.sum}</span>
    </a>
  )
}

export function WinTicker() {
  return (
    <section aria-label="Сейчас выигрывают" className="border-t border-line bg-panel">
      <div className="flex items-stretch">
        <div className="x4v7-marquee flex-1 py-2">
          <div className="x4v7-marquee-track gap-3 px-3">
            {wins.map((w, i) => (
              <WinCard key={`a-${i}`} win={w} />
            ))}
            {wins.map((w, i) => (
              <WinCard key={`b-${i}`} win={w} />
            ))}
          </div>
        </div>
        <div className="hidden items-center gap-3 border-l border-line px-4 md:flex">
          <a href={REF_URL} className="flex items-center gap-1.5 font-heading text-sm font-extrabold uppercase tracking-wide text-flame">
            Сейчас выигрывают <ChevronUp size={16} />
          </a>
          <a href={REF_URL} aria-label="Закрыть ленту выигрышей" className="text-fog/60 hover:text-fog">
            <X size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}
