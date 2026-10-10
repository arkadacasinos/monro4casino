import { HeroBoard } from '@/components/casino/hero-board'
import { NavRail } from '@/components/casino/nav-rail'
import { SeoArticle } from '@/components/casino/seo-article'
import { SiteFooter } from '@/components/casino/site-footer'
import { TopBar } from '@/components/casino/top-bar'
import { WinTicker } from '@/components/casino/win-ticker'

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col">
      <TopBar />
      <div className="flex flex-1 flex-col lg:flex-row">
        <NavRail />
        <div className="flex min-w-0 flex-1 flex-col">
          <HeroBoard />
          <WinTicker />
        </div>
      </div>
      <SeoArticle />
      <SiteFooter />
    </div>
  )
}
