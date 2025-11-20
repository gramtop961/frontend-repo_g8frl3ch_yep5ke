export default function About(){
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold tracking-tight">About Us</h1>
      <p className="mt-4 text-neutral-600">We are a modern fashion house crafting premium essentials with a minimal, luxurious aesthetic. Every piece is made to elevate your everyday style.</p>

      <div className="mt-10 grid sm:grid-cols-2 gap-6">
        <Card title="Why shop from us" text="Curated designs, premium materials, and fair pricing. We obsess over the details so you don't have to."/>
        <Card title="Quality guarantee" text="Each product undergoes strict quality checks. If you're not satisfied, we’ll make it right."/>
        <Card title="Fast delivery" text="Nationwide delivery with tracked shipments so you get your order quickly and safely."/>
        <Card title="Customer support" text="Need help? Reach us via WhatsApp or email for quick, friendly support."/>
      </div>
    </div>
  )
}

function Card({ title, text }){
  return (
    <div className="border rounded-xl p-6 hover:shadow-lg transition">
      <div className="font-semibold">{title}</div>
      <p className="mt-2 text-neutral-600 text-sm">{text}</p>
    </div>
  )
}
