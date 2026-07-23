import { useRef, useEffect } from 'react'
import { ArrowRight, Instagram, Twitter, Globe } from 'lucide-react'
import { Link } from 'react-router-dom'
import AboutSection from '../components/AboutSection'
import FeaturedVideoSection from '../components/FeaturedVideoSection'
import PhilosophySection from '../components/PhilosophySection'
import ServicesSection from '../components/ServicesSection'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Index() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const fadingOutRef = useRef(false)

  function animateOpacity(
    el: HTMLVideoElement,
    from: number,
    to: number,
    duration: number,
    onDone?: () => void
  ) {
    const start = performance.now()
    function step(now: number) {
      const t = Math.min((now - start) / duration, 1)
      el.style.opacity = String(from + (to - from) * t)
      if (t < 1) requestAnimationFrame(step)
      else if (onDone) onDone()
    }
    requestAnimationFrame(step)
  }

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleCanPlay = () => {
      video.play().catch(() => {})
      animateOpacity(video, 0, 1, 500)
    }

    const handleTimeUpdate = () => {
      if (!video.duration) return
      const remaining = video.duration - video.currentTime
      if (remaining <= 0.55 && !fadingOutRef.current) {
        fadingOutRef.current = true
        animateOpacity(video, parseFloat(video.style.opacity) || 1, 0, 500)
      }
    }

    const handleEnded = () => {
      video.style.opacity = '0'
      fadingOutRef.current = false
      setTimeout(() => {
        video.currentTime = 0
        video.play().catch(() => {})
        animateOpacity(video, 0, 1, 500)
      }, 100)
    }

    video.addEventListener('canplay', handleCanPlay)
    video.addEventListener('timeupdate', handleTimeUpdate)
    video.addEventListener('ended', handleEnded)

    return () => {
      video.removeEventListener('canplay', handleCanPlay)
      video.removeEventListener('timeupdate', handleTimeUpdate)
      video.removeEventListener('ended', handleEnded)
    }
  }, [])

  return (
    <div className="bg-black">
      {/* ===== HERO ===== */}
      <section className="min-h-screen relative flex flex-col overflow-hidden">
        {/* Background video */}
        <video
          ref={videoRef}
          muted
          autoPlay
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover object-bottom"
          style={{ opacity: 0 }}
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_074625_a81f018a-956b-43fb-9aee-4d1508e30e6a.mp4"
            type="video/mp4"
          />
        </video>

        {/* Navbar */}
        <Navbar />

        {/* Hero content */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12 text-center -translate-y-[20%]">
          <h1
  className="text-7xl md:text-8xl lg:text-9xl text-white tracking-tight whitespace-nowrap mt-6 mb-6"
  style={{ fontFamily: "'Instrument Serif', serif" }}
>
  Designing what's <em className="italic">next</em>.
</h1>

{/* Email input */}
<div className="liquid-glass rounded-full max-w-xl w-full pl-6 pr-2 py-2 flex items-center gap-3 mb-5">
  <input
    type="email"
    placeholder="Enter your email"
    className="bg-transparent border-none flex-1 text-white text-sm focus:outline-none min-w-0"
  />
  <button className="bg-white rounded-full p-3 text-black flex items-center justify-center">
    <ArrowRight size={20} />
  </button>
</div>

{/* Subtitle */}
<p className="text-white text-sm leading-relaxed px-4 max-w-lg mb-6">
  Explore ideas, innovation, and design thinking. Stay connected with KYNTO and discover what’s shaping the future of creative systems.
</p>

{/* Manifesto button */}
<Link to="/about" className="liquid-glass rounded-full px-8 py-3 text-white text-sm font-medium hover:bg-white/5 transition-colors">
  Explore KYNTO
</Link>
        </div>

        {/* Social icons */}
          <div className="relative z-10 flex justify-center gap-4 pb-12 -mt-12">
          <button className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all">
            <Instagram size={20} />
          </button>
          <button className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all">
            <Twitter size={20} />
          </button>
          <button className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all">
            <Globe size={20} />
          </button>
        </div>
      </section>

      <AboutSection />
      <FeaturedVideoSection />
      <PhilosophySection />
      <ServicesSection />
      <Footer />
    </div>
  )
}
