
import './App.css'

import { Route, Routes, BrowserRouter } from "react-router-dom"
import Home from './pages/home'
import { ROUTES } from './utils/routes'
import Product1 from './pages/product1'
import { CheckoutPage } from './pages/checkout';
import PaymentStatusPage from './pages/payment-status'
import ProfilePage from './pages/profile'
import { CartPage } from './pages/cart'


function App() {


  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.PRODUCT1} element={<Product1 />} />
          <Route path={ROUTES.CHECKOUT} element={<CheckoutPage />} />
          <Route path={`${ROUTES.PAYMENT_DETAILS}/*`} element={<PaymentStatusPage />} />
          <Route path={ROUTES.PROFILE} element={<ProfilePage />} />
          <Route path={ROUTES.CART} element={<CartPage />} />

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
