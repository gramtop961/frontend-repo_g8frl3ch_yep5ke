import { Outlet, Link, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

function AppLayout() {
  const location = useLocation()
  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col">
      <Navbar />
      <main className="flex-1"> 
        <Outlet />
      </main>
      <Footer />
      {location.pathname !== '/contact' && <WhatsAppFloat phone="03491840640" />}
    </div>
  )
}

export default AppLayout