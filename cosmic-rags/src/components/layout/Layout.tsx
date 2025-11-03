import { Outlet } from 'react-router-dom'

import Footer from './Footer'
import Navbar from './Navbar'
import ScrollProgress from './ScrollProgress'
import ScrollToTop from './ScrollToTop'
import CookieConsentBanner from './CookieConsentBanner'
import SupportWidget from './SupportWidget'

export const Layout = () => {
  return (
    <div className="relative flex min-h-screen flex-col bg-background dark:bg-background-dark">
      <ScrollProgress />
      <Navbar />
      <div className="pointer-events-none absolute inset-0 -z-10 select-none">
        <div className="absolute left-1/2 top-[120px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-brand-gold/10 blur-[140px] dark:bg-brand-gold/5" />
        <div className="absolute left-10 top-44 h-[380px] w-[380px] rounded-full bg-brand-navy/10 blur-[160px] dark:bg-brand-navy/40" />
      </div>
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
      <CookieConsentBanner />
      <SupportWidget />
    </div>
  )
}

export default Layout
