import { Routes, Route } from 'react-router-dom'
import AppLayout from '../App'
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Product from '../pages/Product'
import About from '../pages/About'
import Contact from '../pages/Contact'

export default function AppRouter(){
  return (
    <Routes>
      <Route element={<AppLayout />}> 
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}
