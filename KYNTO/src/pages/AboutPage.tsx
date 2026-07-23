import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageLayout from '../components/PageLayout'

const team = [
  { name: 'Aira Solis', role: 'Founder & Creative Lead', initials: 'AS' },
  { name: 'Kenji Watanabe', role: 'Head of Innovation', initials: 'KW' },
  { name: 'Elio Vance', role: 'Lead Product Designer', initials: 'EV' },
  { name: 'Maya Rios', role: 'Engineering Director', initials: 'MR' },
]

const values = [
  {
    label: "Exploration",
    desc: "We constantly push beyond the obvious, searching for ideas that redefine what's possible.",
  },
  { label: 'Precision', desc: 'Every detail matters. We design with intent, clarity, and purpose.' },
  { label: 'Boldness', desc: 'Innovation requires risk. We embrace uncertainty to create breakthrough work.' },
  { label: 'Clarity', desc: 'We transform complexity into elegant, meaningful experiences.' },
]

export default function AboutPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="pt-24 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(255,255,255,0.04)_0%,_transparent_60%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto">
          <motion.p className="text-white/40 text-xs tracking-widest uppercase mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            About us
          </motion.p>
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl text-white tracking-tight mb-8"
            style={{ fontFamily: "'Instrument Serif', serif" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Designing{' '}
            <em className="italic text-white/50">systems</em>{' '}
            for minds that innovate.
          </motion.h1>
        </div>
      </section>

      {/* Video + text split */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            className="rounded-3xl overflow-hidden aspect-[4/3]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <video muted autoPlay loop playsInline className="w-full h-full object-cover">
              <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4" type="video/mp4" />
            </video>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-white/40 text-xs tracking-widest uppercase mb-4">Our story</p>
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              KYNTO was built on the belief that true innovation happens where design intelligence meets forward-thinking strategy.
            </p>
            <p className="text-white/50 text-base leading-relaxed mb-8">
              We collaborate with founders, creators, and teams to craft digital experiences, systems, and products that are not only functional — but future-ready.
            </p>
            <Link to="/careers" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm underline underline-offset-4 transition-colors">
              Join our team <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl text-white tracking-tight mb-12"
            style={{ fontFamily: "'Instrument Serif', serif" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            What we stand for
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.label}
                className="liquid-glass rounded-2xl p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <p className="text-white text-xl mb-3" style={{ fontFamily: "'Instrument Serif', serif" }}>{v.label}</p>
                <p className="text-white/50 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="px-6 pb-32">
        <div className="max-w-6xl mx-auto">
          <div className="w-full h-px bg-white/10 mb-12" />
          <motion.h2
            className="text-4xl md:text-5xl text-white tracking-tight mb-12"
            style={{ fontFamily: "'Instrument Serif', serif" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            The people behind KYNTO
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="rounded-2xl aspect-square overflow-hidden mb-4 group bg-white/5">
                  <img
                    src={
                      [
                        "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
                        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
                        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
                        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
                        "https://images.unsplash.com/photo-1517841905240-472988babdf9",
                      ][i]
                    }
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />

                  <span className="text-white/30 text-3xl font-bold" style={{ fontFamily: "'Instrument Serif', serif" }}>{member.initials}</span>
                </div>
                <p className="text-white text-sm font-medium">{member.name}</p>
                <p className="text-white/40 text-xs mt-1">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}