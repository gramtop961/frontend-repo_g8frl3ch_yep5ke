import { useEffect, useState } from 'react'

const backend = import.meta.env.VITE_BACKEND_URL || ''

export default function Shop(){
  const [items, setItems] = useState([])
  const [category, setCategory] = useState('All')
  const [categories, setCategories] = useState(['Men','Women','Kids','Winter Collection','Summer Collection','Sale Items'])

  useEffect(() => {
    fetch(`${backend}/api/categories`).then(r=>r.json()).then((cats)=> setCategories(cats)).catch(()=>{})
  },[])

  useEffect(() => {
    const params = new URLSearchParams()
    if(category && category !== 'All') params.set('category', category)
    fetch(`${backend}/api/products?${params.toString()}`).then(r=>r.json()).then(setItems).catch(()=>setItems([]))
  }, [category])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-wrap items-center gap-2 mb-6">
        <button onClick={()=>setCategory('All')} className={`px-4 py-2 rounded-full border ${category==='All'?'bg-black text-white border-black':'border-neutral-300'}`}>All</button>
        {categories.map((c)=> (
          <button key={c} onClick={()=>setCategory(c)} className={`px-4 py-2 rounded-full border ${category===c?'bg-black text-white border-black':'border-neutral-300 hover:border-black'}`}>{c}</button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((p)=> (
          <div key={p.id} className="border rounded-lg overflow-hidden">
            <a href={`/product/${p.id}`}>
              <div className="aspect-square bg-neutral-100">
                <img src={p.images?.[0]} alt={p.title} className="w-full h-full object-cover" />
              </div>
            </a>
            <div className="p-3">
              <div className="text-sm text-neutral-600">{p.title}</div>
              <div className="mt-1 font-semibold">Rs. {p.price.toLocaleString()}</div>
              <a href={`/product/${p.id}`} className="block mt-3 w-full text-center px-4 py-2 bg-amber-500 text-black rounded hover:bg-amber-400">Add to Cart</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
