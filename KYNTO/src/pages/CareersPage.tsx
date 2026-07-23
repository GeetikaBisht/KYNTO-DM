import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import PageLayout from '../components/PageLayout'

const openings = [
  { role: 'Senior Experience Designer', team: 'Design', location: 'Remote', type: 'Full-time' },
  { role: 'Innovation Strategist', team: 'Strategy', location: 'Remote / Global', type: 'Full-time' },
  { role: 'Frontend Engineer', team: 'Engineering', location: 'Remote', type: 'Full-time' },
  { role: 'Brand & Content Designer', team: 'Creative', location: 'Remote', type: 'Contract' },
  { role: 'Studio Operations Lead', team: 'Operations', location: 'Remote', type: 'Full-time' },
]

const perks = [
  { label: 'Remote-first', desc: 'Work where you think best — autonomy is part of the craft.' },
  { label: 'Ownership', desc: 'You are not just executing — you are shaping what KYNTO becomes.' },
  { label: 'Continuous learning', desc: 'We invest in curiosity, exploration, and staying ahead of the curve.' },
  { label: 'Creative freedom', desc: 'We value deep thinking, experimentation, and original perspectives.' },
  { label: 'Well-being', desc: 'Sustainable creativity requires balance — we protect it.' },
  { label: 'Off-sites', desc: 'Intentional gatherings designed to spark ideas and build alignment.' },
]

export default function CareersPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="pt-24 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.04)_0%,_transparent_60%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto">
          <motion.p className="text-white/40 text-xs tracking-widest uppercase mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            Careers
          </motion.p>
          <motion.h1
            className="text-5xl md:text-7xl text-white tracking-tight mb-6"
            style={{ fontFamily: "'Instrument Serif', serif" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Design what comes next<br />
            <em className="italic text-white/50">with us.</em>
          </motion.h1>
          <motion.p
            className="text-white/50 text-lg max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            We are a small, focused studio working at the intersection of design, systems, and innovation. Every role is intentional, and every person here contributes to work that defines the future.
          </motion.p>
        </div>
      </section>

      {/* Video */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="rounded-3xl overflow-hidden aspect-video"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <video muted autoPlay loop playsInline className="w-full h-full object-cover">
              <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_151826_c7218672-6e92-402c-9e45-f1e0f454bdc4.mp4" type="video/mp4" />
            </video>
          </motion.div>
        </div>
      </section>

      {/* Perks */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-white mb-10" style={{ fontFamily: "'Instrument Serif', serif" }}>Why KYNTO?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {perks.map((perk, i) => (
              <motion.div
                key={perk.label}
                className="liquid-glass rounded-2xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <p className="text-white font-medium mb-2" style={{ fontFamily: "'Instrument Serif', serif" }}>{perk.label}</p>
                <p className="text-white/50 text-sm">{perk.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section className="px-6 pb-32">
        <div className="max-w-6xl mx-auto">
          <div className="w-full h-px bg-white/10 mb-10" />
          <h2 className="text-3xl md:text-4xl text-white mb-8" style={{ fontFamily: "'Instrument Serif', serif" }}>Open roles</h2>
          <div className="flex flex-col gap-3">
            {openings.map((job, i) => (
              <motion.div
                key={job.role}
                className="liquid-glass rounded-2xl px-6 py-5 flex items-center justify-between group cursor-pointer hover:bg-white/5 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <div>
                  <p className="text-white font-medium">{job.role}</p>
                  <p className="text-white/40 text-sm mt-1">{job.team} · {job.location} · {job.type}</p>
                </div>
                <div className="liquid-glass rounded-full p-2 group-hover:bg-white/10 transition-colors">
                  <ArrowUpRight size={16} className="text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}