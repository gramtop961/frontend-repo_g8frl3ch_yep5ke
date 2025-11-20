export default function Contact(){
  const phone = '03491840640'
  const wa = `https://wa.me/${phone}?text=Hi%20I%20need%20assistance`
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold tracking-tight">Contact Us</h1>
      <p className="mt-4 text-neutral-600">We're here to help with sizing, orders, or anything else.</p>

      <div className="mt-8 grid md:grid-cols-2 gap-8">
        <div className="border rounded-xl p-6">
          <div className="font-semibold">Phone</div>
          <div className="mt-1">{phone}</div>
          <a href={wa} target="_blank" className="inline-block mt-4 px-4 py-2 bg-emerald-500 text-white rounded hover:bg-emerald-400">Chat on WhatsApp</a>

          <div className="mt-8">
            <div className="font-semibold">Opening Hours</div>
            <p className="text-sm text-neutral-600 mt-1">Mon - Sat: 10:00 AM - 8:00 PM</p>
            <p className="text-sm text-neutral-600">Sunday: 12:00 PM - 6:00 PM</p>
          </div>
        </div>

        <form className="border rounded-xl p-6 space-y-4">
          <div>
            <label className="text-sm">Name</label>
            <input className="mt-1 w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="Your name"/>
          </div>
          <div>
            <label className="text-sm">Email</label>
            <input type="email" className="mt-1 w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="you@email.com"/>
          </div>
          <div>
            <label className="text-sm">Message</label>
            <textarea className="mt-1 w-full border rounded px-3 py-2 h-28 focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="How can we help?"/>
          </div>
          <button type="button" className="px-4 py-2 bg-black text-white rounded">Send</button>
        </form>
      </div>
    </div>
  )
}
