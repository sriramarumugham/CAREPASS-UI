
import './App.css'

import { Route, Routes, BrowserRouter } from "react-router-dom"
import Home from './pages/home'
import { ROUTES } from './utils/routes'
import { CheckoutPage } from './pages/checkout';
import PaymentStatusPage from './pages/payment-status'
import ProfilePage from './pages/profile'
import { CartPage } from './pages/cart'
import SilverPlanPage from './pages/silver-plan'
import GoldPlan from './pages/gold-plan'
import TaxSaverPage from './pages/tax-saver'
import SuperTopUpPage from './pages/super-topup'
import PageWrapper from './utils/framer-motion'
import { Toaster } from 'react-hot-toast';
import ContactUs from './pages/contact-us'
import AboutUs from './pages/about-us'
import FAQPage from './pages/faq';



function App() {

  return (
    <>
      <PageWrapper>
        <BrowserRouter>
          <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.ABOUT} element={<AboutUs />} />
            <Route path={ROUTES.FAQ} element={<FAQPage />} />
            <Route path={ROUTES.CONTACT_US} element={<ContactUs />} />
            <Route path={ROUTES.CHECKOUT} element={<CheckoutPage />} />
            <Route path={`${ROUTES.PAYMENT_DETAILS}/*`} element={<PaymentStatusPage />} />
            <Route path={ROUTES.PROFILE} element={<ProfilePage />} />
            <Route path={ROUTES.CART} element={<CartPage />} />
            <Route path={ROUTES.TAX_SAVER} element={<TaxSaverPage />} />
            <Route path={ROUTES.SILVER_PLAN} element={<SilverPlanPage />} />
            <Route path={ROUTES.GOLD_PLAN} element={<GoldPlan />} />
            <Route path={ROUTES.SUPER_TOPUP} element={<SuperTopUpPage />} />
          </Routes>
          <Toaster />
        </BrowserRouter>
      </PageWrapper>
    </>
  )
}

export default App
