import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageLayout from '../components/PageLayout'

const capabilities = [
  { title: 'Brand identity', desc: 'Visual systems that communicate who you are — clearly, beautifully, and without compromise.' },
  { title: 'Product design', desc: 'Interfaces that feel effortless. Every interaction considered, every transition intentional.' },
{ 
  title: 'Motion & animation', 
  desc: "We bring static things to life. Motion is not decoration - it's communication." 
},
  { title: 'Spatial design', desc: 'Physical environments that extend the brand into the world with the same precision as digital.' },
  { title: 'Design systems', desc: 'The architecture beneath great design. We build systems that scale without losing soul.' },
  { title: 'Creative direction', desc: 'The invisible hand that makes everything cohesive. We art-direct campaigns, products, and brands.' },
]

export default function DesignPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="pt-24 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(255,255,255,0.04)_0%,_transparent_60%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto">
          <motion.p className="text-white/40 text-xs tracking-widest uppercase mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            Service · Craft
          </motion.p>
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl text-white tracking-tight mb-6"
            style={{ fontFamily: "'Instrument Serif', serif" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Design &{' '}
            <em className="italic text-white/50">Execution.</em>
          </motion.h1>
          <motion.p
            className="text-white/50 text-lg max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            From concept to launch, we obsess over every detail to deliver experiences that feel effortless and look extraordinary.
          </motion.p>
        </div>
      </section>

      {/* Side by side videos */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
          <motion.div
            className="rounded-3xl overflow-hidden aspect-[4/3]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <video muted autoPlay loop playsInline className="w-full h-full object-cover">
              <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_151826_c7218672-6e92-402c-9e45-f1e0f454bdc4.mp4" type="video/mp4" />
            </video>
          </motion.div>
          <motion.div
            className="rounded-3xl overflow-hidden aspect-[4/3]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <video muted autoPlay loop playsInline className="w-full h-full object-cover">
              <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260402_054547_9875cfc5-155a-4229-8ec8-b7ba7125cbf8.mp4" type="video/mp4" />
            </video>
          </motion.div>
        </div>
      </section>

      {/* Capabilities grid */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-white mb-12" style={{ fontFamily: "'Instrument Serif', serif" }}>
            What we create
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                className="liquid-glass rounded-2xl p-6 group cursor-pointer hover:bg-white/5 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <div className="flex items-center justify-between mb-3">
                  <p className="text-white font-medium" style={{ fontFamily: "'Instrument Serif', serif" }}>{cap.title}</p>
                  <ArrowUpRight size={14} className="text-white/20 group-hover:text-white/60 transition-colors" />
                </div>
                <p className="text-white/50 text-sm leading-relaxed">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-32">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="liquid-glass rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.04)_0%,_transparent_70%)] pointer-events-none" />
            <p className="text-white/40 text-xs tracking-widest uppercase mb-4">Start a project</p>
            <h2 className="text-4xl md:text-5xl text-white mb-6" style={{ fontFamily: "'Instrument Serif', serif" }}>
              Let's build something<br />
              <em className="italic text-white/50">unforgettable.</em>
            </h2>
            <Link to="/signup" className="inline-flex items-center gap-2 bg-white text-black rounded-full px-8 py-4 font-medium hover:bg-white/90 transition-colors">
              Get started <ArrowUpRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  )
}
