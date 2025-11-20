import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const backend = import.meta.env.VITE_BACKEND_URL || ''

export default function Product(){
  const { id } = useParams()
  const [p, setP] = useState(null)
  const [size, setSize] = useState('M')

  useEffect(() => {
    fetch(`${backend}/api/products/${id}`).then(r=>r.json()).then(setP).catch(()=>setP(null))
  }, [id])

  if(!p) return <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">Loading...</div>

  const wa = `https://wa.me/03491840640?text=I'm%20interested%20in%20${encodeURIComponent(p.title)}%20(size%20${size})%20%7C%20${window.location.href}`

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid lg:grid-cols-2 gap-10">
      <div className="border rounded-lg overflow-hidden bg-neutral-100">
        <img src={p.images?.[0]} alt={p.title} className="w-full h-full object-cover" />
      </div>
      <div>
        <h1 className="text-2xl font-semibold">{p.title}</h1>
        <div className="mt-2 flex items-center gap-3">
          <span className="text-2xl font-bold">Rs. {p.on_sale && p.sale_price ? p.sale_price.toLocaleString() : p.price.toLocaleString()}</span>
          {p.on_sale && (
            <span className="line-through text-neutral-400">Rs. {p.price.toLocaleString()}</span>
          )}
        </div>
        <p className="mt-4 text-neutral-600">{p.description}</p>

        <div className="mt-6">
          <div className="text-sm font-medium">Sizes</div>
          <div className="mt-2 flex flex-wrap gap-2">
            {(p.sizes || ['S','M','L','XL']).map(s => (
              <button key={s} onClick={()=>setSize(s)} className={`px-3 py-2 rounded border ${size===s?'bg-black text-white border-black':'border-neutral-300'}`}>{s}</button>
            ))}
          </div>
        </div>

        <div className="mt-6 flex gap-3">
          <button className="px-5 py-3 bg-black text-white rounded hover:bg-neutral-800">Add to Cart</button>
          <a href={wa} target="_blank" className="px-5 py-3 bg-emerald-500 text-white rounded hover:bg-emerald-400">Order on WhatsApp</a>
        </div>
      </div>
    </div>
  )
}
