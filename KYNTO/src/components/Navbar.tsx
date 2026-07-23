import { useState, useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Globe, ChevronDown, ArrowUpRight, X, Menu } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
   {
    label: 'About',
    href: '/about',
    dropdown: [
      { label: 'Our Story', href: '/about', desc: 'Who we are' },
      { label: 'Careers', href: '/careers', desc: 'Join the team' },
      { label: 'Blog', href: '/blog', desc: 'Thoughts & ideas' },
    ],
  },
  {
    label: 'Features',
    href: '/features',
    dropdown: [
      { label: 'Research & Insight', href: '/research', desc: 'Data-driven exploration' },
      { label: 'Design & Execution', href: '/design', desc: 'From concept to launch' },
    ],
  },
  {
    label: 'Pricing',
    href: '/pricing',
  },
 
]

export default function Navbar({ transparent = true }: { transparent?: boolean }) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const navigate = useNavigate()

  function openDropdown(label: string) {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setActiveDropdown(label)
  }

  function scheduleClose() {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 150)
  }

  useEffect(() => () => { if (closeTimer.current) clearTimeout(closeTimer.current) }, [])

  return (
    <>
      <nav className={`relative z-[999] px-6 py-6 overflow-visible ${!transparent ? 'bg-black/80 backdrop-blur-md border-b border-white/[0.06]' : ''}`}>
        <div className="liquid-glass rounded-full max-w-5xl mx-auto px-6 py-3 flex items-center justify-between overflow-visible">
          {/* Left */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/KYNTO.png"
                alt="KYNTO logo"
                className="w-6 h-6 object-contain"
              />
              <span className="text-white font-semibold text-lg" style={{ fontFamily: "'Instrument Serif', serif" }}>KYNTO</span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex gap-1 ml-8">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.dropdown && openDropdown(item.label)}
                  onMouseLeave={() => item.dropdown && scheduleClose()}
                >
                  <Link
                    to={item.href}
                    className="flex items-center gap-1 text-white/80 hover:text-white text-sm font-medium transition-colors px-3 py-2 rounded-full hover:bg-white/5"
                  >
                    {item.label}
                    {item.dropdown && <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />}
                  </Link>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {item.dropdown && activeDropdown === item.label && (
                      <motion.div
                        className="absolute top-full left-0 mt-3 w-56"
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.18 }}
                        onMouseEnter={() => openDropdown(item.label)}
                        onMouseLeave={scheduleClose}
                      >
                        <div className="bg-white rounded-2xl p-2 overflow-hidden shadow-xl border border-black/5">
                          {item.dropdown.map((sub) => (
                            <Link
                              key={sub.label}
                              to={sub.href}
                              className="flex items-start justify-between gap-2 px-4 py-3 rounded-xl hover:bg-gray-100 group transition-colors"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <div>
                                <p className="text-black text-sm font-medium">{sub.label}</p>
                                <p className="text-black/50 text-xs mt-0.5">{sub.desc}</p>
                              </div>
                              <ArrowUpRight size={14} className="text-black/30 group-hover:text-black/70 ..." />
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-3">
            <Link to="/signup" className="hidden md:block text-white text-sm font-medium hover:text-white/70 transition-colors">Sign Up</Link>
            <Link to="/login" className="liquid-glass rounded-full px-6 py-2 text-white text-sm font-medium hover:bg-white/5 transition-colors">Login</Link>
            <button className="md:hidden text-white p-1" onClick={() => setMobileOpen(true)}>
              <Menu size={20} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col p-6"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between mb-10">
              <Link to="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
                <Globe size={22} className="text-white" />
                <span className="text-white font-semibold text-lg" style={{ fontFamily: "'Instrument Serif', serif" }}>KYNTO</span>
              </Link>
              <button className="text-white/60 hover:text-white" onClick={() => setMobileOpen(false)}>
                <X size={22} />
              </button>
            </div>
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    to={item.href}
                    className="block text-white text-2xl py-3 font-medium border-b border-white/[0.06]"
                    style={{ fontFamily: "'Instrument Serif', serif" }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.dropdown && (
                    <div className="pl-4 py-2">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.label}
                          to={sub.href}
                          className="block text-white/50 text-base py-2 hover:text-white transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-auto flex flex-col gap-3">
              <Link to="/signup" className="liquid-glass rounded-full px-6 py-4 text-white text-center font-medium" onClick={() => setMobileOpen(false)}>Sign Up</Link>
              <Link to="/login" className="bg-white rounded-full px-6 py-4 text-black text-center font-medium" onClick={() => setMobileOpen(false)}>Login</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
