import { useEffect, useState } from 'react'

const backend = import.meta.env.VITE_BACKEND_URL || ''

export default function Home(){
  const [banners, setBanners] = useState([])
  const [trending, setTrending] = useState([])
  const [newArrivals, setNewArrivals] = useState([])
  const [bestSellers, setBestSellers] = useState([])

  useEffect(() => {
    fetch(`${backend}/api/banners`).then(r=>r.json()).then(setBanners).catch(() => setBanners([]))
    fetch(`${backend}/api/products?trending=true&limit=8`).then(r=>r.json()).then(setTrending).catch(()=>setTrending([]))
    fetch(`${backend}/api/products?new=true&limit=8`).then(r=>r.json()).then(setNewArrivals).catch(()=>setNewArrivals([]))
    fetch(`${backend}/api/products?best=true&limit=8`).then(r=>r.json()).then(setBestSellers).catch(()=>setBestSellers([]))
  }, [])

  return (
    <div>
      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,163,6,0.08)_0,transparent_60%)] pointer-events-none"/>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-black">LuxWear</h1>
            <p className="mt-4 text-neutral-600 text-lg">Premium fashion with a minimal, luxurious edge.</p>
            <div className="mt-6 flex gap-3">
              <a href="/shop" className="px-5 py-3 bg-black text-white rounded hover:bg-neutral-800">Shop Now</a>
              <a href="#new" className="px-5 py-3 border border-black rounded hover:bg-black hover:text-white transition">New Arrivals</a>
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-3 gap-3">
              {banners.length > 0 ? (
                banners.slice(0,3).map((b,i)=> (
                  <img key={i} src={b.image} alt={b.title} className="h-40 w-full object-cover rounded-lg border" />
                ))
              ) : (
                [
                  'https://images.unsplash.com/photo-1520975922203-b5d0b0d75136?w=600&auto=format&fit=crop&q=80',
                  'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=80',
                  'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=600&auto=format&fit=crop&q=80',
                ].map((u,i)=>(<img key={i} src={u} className="h-40 w-full object-cover rounded-lg border"/>))
              )}
            </div>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-amber-500 text-black font-medium px-4 py-2 rounded shadow">Mega Sale • New Collection 2025 • Limited Stock</div>
          </div>
        </div>
      </section>

      <Section title="Trending Products">
        <ProductGrid items={trending} />
      </Section>

      <Section id="new" title="New Arrivals">
        <ProductGrid items={newArrivals} />
      </Section>

      <Section title="Best Sellers">
        <ProductGrid items={bestSellers} />
      </Section>
    </div>
  )
}

function Section({ id, title, children }){
  return (
    <section id={id} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
        <a href="/shop" className="text-amber-600 hover:underline">View all</a>
      </div>
      {children}
    </section>
  )
}

function ProductGrid({ items }){
  const show = (items && items.length) ? items : Array.from({length:8}).map((_,i)=>({
    id: `s${i}`,
    title: 'Sample Product',
    price: 2499,
    images: ['https://images.unsplash.com/photo-1520975922203-b5d0b0d75136?w=800&auto=format&fit=crop&q=80']
  }))
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      {show.map((p,i)=> (
        <a key={p.id || i} href={`/product/${p.id}`} className="group block border rounded-lg overflow-hidden hover:shadow-lg transition">
          <div className="aspect-square bg-neutral-100 overflow-hidden">
            <img src={p.images?.[0]} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition" />
          </div>
          <div className="p-3">
            <div className="text-sm text-neutral-600">{p.title}</div>
            <div className="mt-1 font-semibold">Rs. {p.price?.toLocaleString?.() || p.price}</div>
          </div>
        </a>
      ))}
    </div>
  )
}
