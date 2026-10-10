import { REF_URL } from '@/lib/site'

const pays = ['СБП', 'G Pay', 'Pay', 'VISA', 'МИР', 'CRYPTO']

export function HeroBoard() {
  return (
    <section aria-label="Промо Monro Casino" className="flex-1 px-3 pb-6 pt-4 sm:px-4 lg:px-6">
      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-3 lg:grid-cols-[1.15fr_1fr]">
          <a href={REF_URL} className="block overflow-hidden rounded-2xl border border-line" aria-label="Начать в казино Monro">
            <img
              src="/images/hero-casino.jpg"
              alt="Слоты Monro Casino и маскот-фенек"
              width={1200}
              height={800}
              className="h-48 w-full object-cover sm:h-64 lg:h-[380px]"
            />
          </a>
          <a href={REF_URL} className="block overflow-hidden rounded-2xl border border-line" aria-label="Начать в спорте Monro">
            <img
              src="/images/hero-sport.jpg"
              alt="Ставки на спорт в Monro Casino"
              width={1000}
              height={800}
              className="h-48 w-full object-cover sm:h-64 lg:h-[380px]"
            />
          </a>
        </div>

        <div className="x4v7-bubble absolute left-1/2 top-[34%] z-10 w-52 -translate-x-1/2 rounded-2xl bg-fog px-4 py-3 text-center shadow-2xl sm:w-60 lg:left-[52%] lg:top-[30%] lg:w-64">
          <p className="font-heading text-xs font-extrabold uppercase tracking-wide text-ink">Куда ты применишь</p>
          <p className="font-heading text-2xl font-black text-flame">+ 150%</p>
          <p className="font-heading text-xs font-extrabold uppercase tracking-wide text-ink">на депозит</p>
        </div>

        <div className="x4v7-felt relative z-10 mx-auto -mt-9 flex w-[min(94%,660px)] flex-col items-center gap-3 px-6 py-7 sm:flex-row sm:justify-center sm:gap-5 sm:py-9 lg:-mt-14">
          <a
            href={REF_URL}
            className="w-full rounded-full bg-ruby px-6 py-3.5 text-center font-heading text-sm font-extrabold uppercase tracking-wide text-fog shadow-xl shadow-ruby/30 sm:w-auto"
          >
            Начать в казино
          </a>
          <img src="/images/logo-mark.jpg" alt="" aria-hidden="true" width={24} height={24} className="hidden h-6 w-6 rounded sm:block" />
          <a
            href={REF_URL}
            className="w-full rounded-full bg-royal px-6 py-3.5 text-center font-heading text-sm font-extrabold uppercase tracking-wide text-fog shadow-xl shadow-royal/30 sm:w-auto"
          >
            Начать в спорте
          </a>
        </div>

        <div className="mx-auto mt-5 flex max-w-3xl flex-wrap items-center justify-center gap-x-6 gap-y-2 rounded-xl border border-line bg-panel px-4 py-3">
          {pays.map((p) => (
            <span key={p} className="font-heading text-xs font-bold tracking-wider text-fog/70">
              {p}
            </span>
          ))}
          <span className="flex items-center gap-1 font-heading text-xs font-bold tracking-wider text-fog/70">
            <i className="x4v7-dot bg-ruby" />
            <i className="x4v7-dot -ml-1.5 bg-flame" />
            MC
          </span>
        </div>
      </div>
    </section>
  )
}
