import { Link } from 'react-router-dom'

export default function Breadcrumb({ items=[] }){
  return (
    <nav className="text-sm text-neutral-500 mb-4">
      <Link to="/" className="hover:text-black">Home</Link>
      {items.map((it, i)=> (
        <span key={i}>
          <span className="mx-2">/</span>
          {it.to ? <Link to={it.to} className="hover:text-black">{it.label}</Link> : <span className="text-neutral-800">{it.label}</span>}
        </span>
      ))}
    </nav>
  )}
