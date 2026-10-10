import { Menu, Search, ShieldCheck } from 'lucide-react'
import { REF_URL } from '@/lib/site'

export function TopBar() {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-panel">
      <div className="flex items-center gap-1.5 px-2.5 py-2 sm:gap-3 sm:px-4">
        <a
          href="#x4v7-rail"
          aria-label="Открыть меню"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-fog hover:bg-panel2 lg:hidden"
        >
          <Menu size={20} />
        </a>

        <a href={REF_URL} className="flex shrink-0 items-center gap-1.5 sm:gap-2" aria-label="Monro Casino — перейти на сайт">
          <img src="/images/logo-mark.jpg" alt="Логотип Monro Casino" width={32} height={32} className="h-7 w-7 rounded-md sm:h-8 sm:w-8" />
          <span className="font-heading text-base font-extrabold tracking-widest text-fog sm:text-lg">MONRO</span>
        </a>

        <form action={REF_URL} method="get" role="search" className="hidden min-w-0 flex-1 md:flex md:max-w-xl">
          <label htmlFor="x4v7-q" className="sr-only">
            Название игры или провайдера
          </label>
          <div className="flex w-full items-center gap-2 rounded-full bg-panel2 px-4 py-2">
            <Search size={18} className="shrink-0 text-fog/60" />
            <input
              id="x4v7-q"
              name="q"
              type="search"
              placeholder="НАЗВАНИЕ ИГРЫ ИЛИ ПРОВАЙДЕРА"
              className="w-full bg-transparent text-sm uppercase tracking-wide text-fog placeholder:text-fog/50 focus:outline-none"
            />
            <button type="submit" aria-label="Искать игру" className="shrink-0 text-fog/60 hover:text-flame">
              <Search size={18} />
            </button>
          </div>
        </form>

        <div className="ml-auto flex shrink-0 items-center gap-1 sm:gap-3">
          <a
            href={REF_URL}
            aria-label="Безопасная игра"
            className="hidden h-10 w-10 items-center justify-center rounded-full bg-royal/20 text-royal sm:flex"
          >
            <ShieldCheck size={20} />
          </a>
          <a href={REF_URL} className="rounded-full px-2 py-2 font-heading text-xs font-bold text-fog hover:text-flame sm:px-3 sm:text-sm">
            ВХОД
          </a>
          <a
            href={REF_URL}
            className="rounded-full bg-flame px-3.5 py-2 font-heading text-xs font-extrabold text-fog shadow-lg shadow-flame/25 sm:px-6 sm:py-2.5 sm:text-sm"
          >
            РЕГИСТРАЦИЯ
          </a>
        </div>
      </div>
    </header>
  )
}
