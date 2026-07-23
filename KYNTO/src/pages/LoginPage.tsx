import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Globe, ArrowRight, Eye, EyeOff, Github, Twitter } from 'lucide-react'

export default function LoginPage() {
  const [showPass, setShowPass] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [forgot, setForgot] = useState(false)
  const [forgotEmail, setForgotEmail] = useState('')
  const [forgotSent, setForgotSent] = useState(false)

  function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    // handle login
  }

  function handleForgot(e: React.FormEvent) {
    e.preventDefault()
    setForgotSent(true)
  }

  return (
    <div className="min-h-screen bg-black flex overflow-hidden">
      {/* Left: form panel */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(255,255,255,0.03)_0%,_transparent_60%)] pointer-events-none" />

        {/* Mobile brand */}
        <Link to="/" className="lg:hidden flex items-center gap-2 mb-12">
                    <img
            src="/KYNTO.png"
            alt="KYNTO logo"
            className="w-6 h-6 object-contain"
          />
          <span className="text-white font-semibold text-lg" style={{ fontFamily: "'Instrument Serif', serif" }}>KYNTO</span>
        </Link>

        <div className="w-full max-w-md">
          {!forgot ? (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-white/60 text-xs tracking-widest uppercase mb-2">Welcome back</p>
              <h1
                className="text-4xl text-white mb-2"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                Sign in
              </h1>
              <p className="text-white/60 text-sm mb-8">
                Don't have an account?{' '}
                <Link to="/signup" className="text-white hover:text-white/70 underline underline-offset-4 transition-colors">
                  Create one
                </Link>
              </p>

              {/* OAuth */}
              <div className="flex gap-3 mb-6">
                <button className="flex-1 liquid-glass rounded-full py-3 flex items-center justify-center gap-2 text-white text-sm hover:bg-white/5 transition-colors">
                  <Github size={16} />
                  GitHub
                </button>
                <button className="flex-1 liquid-glass rounded-full py-3 flex items-center justify-center gap-2 text-white text-sm hover:bg-white/5 transition-colors">
                  <Twitter size={16} />
                  Twitter
                </button>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex-1 h-px bg-white/10" />
                <span className="text-white/40 text-xs">or continue with email</span>
                <div className="flex-1 h-px bg-white/10" />
              </div>

              <form onSubmit={handleLogin} className="flex flex-col gap-4">
                <div>
                  <label className="text-white/60 text-xs tracking-widest uppercase mb-2 block">Email</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full liquid-glass rounded-2xl px-5 py-4 text-white text-sm focus:outline-none focus:ring-1 focus:ring-white/20 bg-transparent placeholder:text-white/30 transition-all"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-white/60 text-xs tracking-widest uppercase">Password</label>
                    <button
                      type="button"
                      onClick={() => setForgot(true)}
                      className="text-white/30 text-xs hover:text-white/60 underline underline-offset-4 transition-colors"
                    >
                      Forgot password?
                    </button>
                  </div>
                  <div className="relative">
                    <input
                      type={showPass ? 'text' : 'password'}
                      required
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      placeholder="Your password"
                      className="w-full liquid-glass rounded-2xl px-5 py-4 pr-14 text-white text-sm focus:outline-none focus:ring-1 focus:ring-white/20 bg-transparent placeholder:text-white/30 transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPass(!showPass)}
                      className="absolute right-5 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors"
                    >
                      {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-white rounded-full py-4 text-black font-medium flex items-center justify-center gap-2 mt-2 hover:bg-white/90 transition-colors"
                  whileTap={{ scale: 0.98 }}
                >
                  Sign in
                  <ArrowRight size={16} />
                </motion.button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {!forgotSent ? (
                <>
                  <p className="text-white/60 text-xs tracking-widest uppercase mb-2">Password reset</p>
                  <h1 className="text-4xl text-white mb-2" style={{ fontFamily: "'Instrument Serif', serif" }}>Forgot password?</h1>
                  <p className="text-white/60 text-sm mb-8">Enter your email and we'll send you a link.</p>
                  <form onSubmit={handleForgot} className="flex flex-col gap-4">
                    <input
                      type="email"
                      required
                      value={forgotEmail}
                      onChange={e => setForgotEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full liquid-glass rounded-2xl px-5 py-4 text-white text-sm focus:outline-none bg-transparent placeholder:text-white/30"
                    />
                    <button type="submit" className="w-full bg-white rounded-full py-4 text-black font-medium flex items-center justify-center gap-2">
                      Send reset link <ArrowRight size={16} />
                    </button>
                  </form>
                  <button onClick={() => setForgot(false)} className="mt-4 text-white/30 text-xs hover:text-white/60 underline underline-offset-4 transition-colors">
                    Back to sign in
                  </button>
                </>
              ) : (
                <div className="text-center">
                  <div className="w-16 h-16 liquid-glass rounded-full flex items-center justify-center mx-auto mb-6">
                    <Globe size={28} className="text-white" />
                  </div>
                  <h2 className="text-3xl text-white mb-3" style={{ fontFamily: "'Instrument Serif', serif" }}>Check your email</h2>
                  <p className="text-white/50 text-sm mb-8">We sent a reset link to <span className="text-white">{forgotEmail}</span></p>
                  <button onClick={() => { setForgot(false); setForgotSent(false) }} className="text-white/60 text-sm hover:text-white/70 underline underline-offset-4 transition-colors">Back to sign in</button>
                </div>
              )}
            </motion.div>
          )}
        </div>
      </div>

      {/* Right: video panel */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <video
          muted autoPlay loop playsInline preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260424_064411_9e9d7f84-9277-41f4-ab10-59172d89e6be.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/50" />
        <div className="absolute bottom-12 left-12 right-12">
          <p
            className="text-white text-3xl leading-tight"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            "Innovation begins with<br />
            <em className="italic text-white/60">a single bold question.</em>"
          </p>
        </div>
        <Link to="/" className="absolute top-8 right-8 flex items-center gap-2">
                    <img
            src="/KYNTO.png"
            alt="KYNTO logo"
            className="w-6 h-6 object-contain"
          />
          <span className="text-white font-semibold" style={{ fontFamily: "'Instrument Serif', serif" }}>KYNTO</span>
        </Link>
      </div>
    </div>
  )
}
