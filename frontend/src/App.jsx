import { useEffect } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from 'react-router-dom'
import Home from './pages/home/Home'
import ItemDetails from './pages/itemDetails/ItemDetails'
import CheckOut from './pages/checkOut/Checkout'
import Confirmation from './pages/checkOut/Confirmation'
import Navbar from './pages/global/Navbar'
import CartMenu from './pages/global/CartMenu'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}



function App() {


  return (
    <div className='app'>
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='item/:id' element={<ItemDetails />} />
          <Route path='checkout' element={<CheckOut />} />
          <Route path='checkout/success' element={<Confirmation />} />
        </Routes>
        <CartMenu/>
      </BrowserRouter>
    </div>
  )
}

export default App
