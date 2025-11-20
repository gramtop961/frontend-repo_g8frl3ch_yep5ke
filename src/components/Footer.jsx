export default function Footer(){
  return (
    <footer className="bg-black text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="font-semibold text-lg">LuxWear</h3>
          <p className="text-neutral-400 mt-3">Elevated essentials crafted for comfort and style.</p>
          <div className="mt-4 flex gap-3 text-neutral-400">
            <a href="#" className="hover:text-amber-400">Instagram</a>
            <a href="#" className="hover:text-amber-400">Facebook</a>
            <a href="#" className="hover:text-amber-400">TikTok</a>
          </div>
        </div>
        <div>
          <h4 className="font-semibold">Categories</h4>
          <ul className="mt-3 space-y-2 text-neutral-300">
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Winter Collection</li>
            <li>Summer Collection</li>
            <li>Sale Items</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Contact</h4>
          <p className="mt-3 text-neutral-300">Phone: 03491840640</p>
          <p className="text-neutral-300">Support: support@luxwear.store</p>
          <p className="text-neutral-300">Hours: Mon-Sat, 10am - 8pm</p>
        </div>
        <div>
          <h4 className="font-semibold">Newsletter</h4>
          <p className="mt-3 text-neutral-300">Subscribe for new drops and exclusive offers.</p>
          <form className="mt-4 flex gap-2">
            <input type="email" placeholder="Your email" className="flex-1 px-3 py-2 rounded bg-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber-500" />
            <button className="px-4 py-2 bg-amber-500 text-black font-medium rounded hover:bg-amber-400">Join</button>
          </form>
        </div>
      </div>
      <div className="border-t border-neutral-800 py-4 text-center text-neutral-500 text-sm">© {new Date().getFullYear()} LuxWear. All rights reserved.</div>
    </footer>
  )
}
