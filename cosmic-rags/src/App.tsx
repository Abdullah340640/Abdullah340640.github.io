import { Suspense } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'

import Layout from './components/layout/Layout'
import BlogPage from './pages/Blog/BlogPage'
import ContactPage from './pages/Contact/ContactPage'
import FAQPage from './pages/FAQ/FAQPage'
import HomePage from './pages/Home/HomePage'
import AboutPage from './pages/About/AboutPage'
import ProductsPage from './pages/Products/ProductsPage'
import ProductDetailPage from './pages/ProductDetail/ProductDetailPage'
import PrivacyPolicyPage from './pages/Legal/PrivacyPolicy'
import TermsOfServicePage from './pages/Legal/TermsOfService'
import RefundPolicyPage from './pages/Legal/RefundPolicy'
import DisclaimerPage from './pages/Legal/Disclaimer'
import CookiePolicyPage from './pages/Legal/CookiePolicy'
import LoginPage from './pages/Auth/LoginPage'
import SignupPage from './pages/Auth/SignupPage'
import DashboardPage from './pages/Dashboard/DashboardPage'
import NotFoundPage from './pages/Error/NotFoundPage'

const App = () => {
  const location = useLocation()

  return (
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center text-brand-navy">Loading?</div>}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="products/:productId" element={<ProductDetailPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="faq" element={<FAQPage />} />
            <Route path="legal">
              <Route index element={<PrivacyPolicyPage />} />
              <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="terms-of-service" element={<TermsOfServicePage />} />
              <Route path="refund-policy" element={<RefundPolicyPage />} />
              <Route path="disclaimer" element={<DisclaimerPage />} />
              <Route path="cookie-policy" element={<CookiePolicyPage />} />
            </Route>
            <Route path="auth">
              <Route path="login" element={<LoginPage />} />
              <Route path="signup" element={<SignupPage />} />
            </Route>
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </Suspense>
  )
}

export default App
