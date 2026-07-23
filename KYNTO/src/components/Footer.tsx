import { Instagram, Twitter, Globe } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black px-6 py-3">
      {/* Full Top Line */}
      <div className="w-full h-px bg-white/10 mb-4" />

      {/* Footer Content */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left Empty Space for Balance */}
        <div className="hidden md:block w-20" />

        {/* Center Copyright */}
        <p className="text-white/40 text-sm text-center">
          © 2026 KYNTO. All rights reserved.
        </p>

        {/* Right Side Social Icons */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white transition"
          >
            <Instagram size={18} />
          </a>

          <a
            href="#"
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white transition"
          >
            <Twitter size={18} />
          </a>

          <a
            href="#"
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white transition"
          >
            <Globe size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}