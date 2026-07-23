import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import PageLayout from '../components/PageLayout'

const methods = [
  { label: '01', title: 'Deep context', desc: 'We move beyond surface insights embedding ourselves in real environments to understand how people think, behave, and make decisions in context.' },
  { label: '02', title: 'System decoding', desc: 'We analyze products, markets, and behaviors as interconnected systems revealing patterns, tensions, and overlooked opportunities.' },
  { label: '03', title: 'Clarity shaping', desc: 'We distill complexity into clear, actionable thinking giving direction to design, strategy, and innovation.' },
  { label: '04', title: 'Forward signals', desc: 'We track emerging shifts across culture and technology to design work that feels ahead not just relevant.' },
]

export default function ResearchPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="pt-24 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.04)_0%,_transparent_60%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto">
          <motion.p className="text-white/40 text-xs tracking-widest uppercase mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            Service · Intelligence
          </motion.p>
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl text-white tracking-tight mb-6"
            style={{ fontFamily: "'Instrument Serif', serif" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Research &{' '}
            <em className="italic text-white/50">Perspective.</em>
          </motion.h1>
          <motion.p
            className="text-white/50 text-lg max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            We uncover the patterns beneath behavior, systems, and culture — turning complexity into perspective that drives meaningful design and innovation.
          </motion.p>
        </div>
      </section>

      {/* Full width video */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="rounded-3xl overflow-hidden aspect-video relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <video muted autoPlay loop playsInline className="w-full h-full object-cover">
              <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Methods */}
      <section className="px-6 pb-32">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-white mb-12" style={{ fontFamily: "'Instrument Serif', serif" }}>
            How we approach it
          </h2>
          <div className="flex flex-col gap-4">
            {methods.map((m, i) => (
              <motion.div
                key={m.label}
                className="liquid-glass rounded-2xl p-6 md:p-8 flex items-start gap-8 group cursor-pointer hover:bg-white/5 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <span className="text-white/20 text-sm font-mono shrink-0 mt-1">{m.label}</span>
                <div className="flex-1">
                  <h3 className="text-white text-xl mb-2" style={{ fontFamily: "'Instrument Serif', serif" }}>{m.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{m.desc}</p>
                </div>
                <ArrowUpRight size={18} className="text-white/20 group-hover:text-white/60 mt-1 shrink-0 transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}