import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Globe, ArrowRight, Eye, EyeOff, Github, Twitter } from 'lucide-react'

export default function SignUpPage() {
  const [showPass, setShowPass] = useState(false)
  const [step, setStep] = useState<'form' | 'verify'>('form')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStep('verify')
  }

  return (
    <div className="min-h-screen bg-black flex overflow-hidden">
      {/* Left: video panel */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <video
          muted autoPlay loop playsInline preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260319_015952_e1deeb12-8fb7-4071-a42a-60779fc64ab6.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/60" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute bottom-12 left-12 right-12">
          <p className="text-white/30 text-xs tracking-widest uppercase mb-4">KYNTO</p>
          <p
            className="text-white text-3xl leading-tight"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            "Where curiosity meets<br />
            <em className="italic text-white/60">extraordinary craft."</em>
          </p>
        </div>
        {/* Top left brand */}
        <Link to="/" className="absolute top-8 left-8 flex items-center gap-2">
          <img
            src="/KYNTO.png"
            alt="KYNTO logo"
            className="w-6 h-6 object-contain"
          />
          <span className="text-white font-semibold" style={{ fontFamily: "'Instrument Serif', serif" }}>KYNTO</span>
        </Link>
      </div>

      {/* Right: form panel */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12 relative">
        {/* Background grain */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.03)_0%,_transparent_60%)] pointer-events-none" />

        {/* Mobile brand */}
        <Link to="/" className="lg:hidden flex items-center gap-2 mb-12">
          <Globe size={20} className="text-white" />
          <span className="text-white font-semibold text-lg" style={{ fontFamily: "'Instrument Serif', serif" }}>KYNTO</span>
        </Link>

        <div className="w-full max-w-md">
          {step === 'form' ? (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-white/60 text-xs tracking-widest uppercase mb-2">Get started</p>
              <h1
                className="text-4xl text-white mb-2"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                Create your account
              </h1>
              <p className="text-white/60 text-sm mb-8">
                Already have an account?{' '}
                <Link to="/login" className="text-white hover:text-white/70 underline underline-offset-4 transition-colors">
                  Sign in
                </Link>
              </p>

              {/* OAuth buttons */}
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
                <span className="text-white/30 text-xs">or continue with email</span>
                <div className="flex-1 h-px bg-white/10" />
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="text-white/60 text-xs tracking-widest uppercase mb-2 block">Full Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full liquid-glass rounded-2xl px-5 py-4 text-white text-sm focus:outline-none focus:ring-1 focus:ring-white/20 bg-transparent placeholder:text-white/30 transition-all"
                  />
                </div>

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
                  <label className="text-white/60 text-xs tracking-widest uppercase mb-2 block">Password</label>
                  <div className="relative">
                    <input
                      type={showPass ? 'text' : 'password'}
                      required
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      placeholder="Min. 8 characters"
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

                <p className="text-white/30 text-xs">
                  By creating an account, you agree to our{' '}
                  <a href="#" className="text-white/50 underline underline-offset-4">Terms of Service</a>{' '}
                  and{' '}
                  <a href="#" className="text-white/50 underline underline-offset-4">Privacy Policy</a>.
                </p>

                <motion.button
                  type="submit"
                  className="w-full bg-white rounded-full py-4 text-black font-medium flex items-center justify-center gap-2 mt-2 hover:bg-white/90 transition-colors"
                  whileTap={{ scale: 0.98 }}
                >
                  Create account
                  <ArrowRight size={16} />
                </motion.button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 liquid-glass rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe size={28} className="text-white" />
              </div>
              <h2
                className="text-3xl text-white mb-3"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                Check your email
              </h2>
              <p className="text-white/50 text-sm mb-2">
                We sent a verification link to
              </p>
              <p className="text-white font-medium mb-8">{email}</p>
              <button
                onClick={() => setStep('form')}
                className="text-white/60 text-sm hover:text-white/70 underline underline-offset-4 transition-colors"
              >
                Back to sign up
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}
