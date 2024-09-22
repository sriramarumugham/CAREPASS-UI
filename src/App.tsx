
import './App.css'

import { Route, Routes } from "react-router-dom"
import Home from './pages/home'
import { ROUTES } from './utils/routes'
import Product1 from './pages/product1'
import { CheckoutPage } from './pages/checkout'
function App() {


  return (
    <>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.PRODUCT1} element={<Product1 />} />
        <Route path={ROUTES.CHECKOUT} element={<CheckoutPage />} />


      </Routes>
    </>
  )
}

export default App
