import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import View from './pages/View'
import PNF from './pages/PNF'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/wishlist' element={<Wishlist/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/:id/view' element={<View/>} />
        <Route path='/*' element={<PNF/>} />
      </Routes>
    </>
  )
}

export default App
