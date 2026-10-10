import {
  ChevronDown,
  Clock,
  Crown,
  Dice5,
  Gift,
  Globe,
  Layers,
  LayoutGrid,
  Megaphone,
  Radio,
  Trophy,
  X,
  Zap,
} from 'lucide-react'
import { REF_URL } from '@/lib/site'

const groups: { label: string; icon: typeof Gift; active?: boolean; caret?: boolean }[][] = [
  [
    { label: 'Бонусы', icon: Gift },
    { label: 'Промо', icon: Megaphone, active: true },
    { label: 'VIP Club', icon: Crown },
  ],
  [
    { label: 'Слоты', icon: Dice5, caret: true },
    { label: 'Live-казино', icon: Radio, caret: true },
    { label: 'Спорт', icon: Trophy, caret: true },
    { label: 'Instant Games', icon: Zap },
  ],
  [
    { label: 'Все игры', icon: LayoutGrid },
    { label: 'Все провайдеры', icon: Layers },
  ],
]

export function NavRail() {
  return (
    <>
      <nav id="x4v7-rail" aria-label="Меню Monro Casino" className="x4v7-rail flex flex-col border-r border-line bg-panel">
        <div className="flex items-center justify-between px-4 py-3 lg:hidden">
          <span className="font-heading text-sm font-extrabold tracking-widest text-fog">МЕНЮ</span>
          <a href="#!" aria-label="Закрыть меню" className="flex h-9 w-9 items-center justify-center rounded-full text-fog/70 hover:bg-panel2">
            <X size={20} />
          </a>
        </div>

        {groups.map((group, gi) => (
          <ul key={gi} className="space-y-1 border-b border-line px-3 py-3 last:border-b-0">
            {group.map((item) => (
              <li key={item.label}>
                <a
                  href={REF_URL}
                  className={`flex items-center gap-3 rounded-xl px-3 py-2.5 font-heading text-sm font-bold text-fog hover:bg-panel2 ${
                    item.active ? 'bg-panel2 text-flame' : ''
                  }`}
                >
                  <item.icon size={20} className={item.active ? 'text-flame' : 'text-fog/70'} />
                  <span className="flex-1">{item.label}</span>
                  {item.caret ? <ChevronDown size={16} className="text-fog/50" /> : null}
                </a>
              </li>
            ))}
          </ul>
        ))}

        <div className="mt-auto flex items-center gap-4 px-5 py-4 text-xs text-fog/60">
          <span className="flex items-center gap-1.5">
            <Clock size={14} /> 24/7
          </span>
          <span className="flex items-center gap-1.5">
            <Globe size={14} /> RU
          </span>
        </div>
      </nav>
      <a href="#!" aria-hidden="true" tabIndex={-1} className="x4v7-scrim" />
    </>
  )
}
