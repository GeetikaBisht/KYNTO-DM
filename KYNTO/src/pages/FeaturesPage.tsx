import { motion } from 'framer-motion'
import { ArrowUpRight, Zap, Eye, Globe, BarChart, Shield, Layers } from 'lucide-react'
import PageLayout from '../components/PageLayout'

const features = [
  {
    icon: <Zap size={22} />,
    tag: 'Speed',
    title: 'Lightning-fast execution',
    description: 'From insight to implementation in record time. Our optimized workflows eliminate bottlenecks so your ideas reach the world faster than ever.',
    videoUrl: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4',
  },
 {
    icon: <Eye size={22} />,
    tag: "Vision",
    title: "Deep strategic insight",
    description:
      "We don't just see what's in front of us — we see what's coming. Our research methodology surfaces the signals others miss.",
    videoUrl:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260402_054547_9875cfc5-155a-4229-8ec8-b7ba7125cbf8.mp4",
  },
  {
    icon: <Layers size={22} />,
    tag: 'Craft',
    title: 'Meticulous design craft',
    description: 'Every pixel, every word, every interaction is considered. We believe the best experiences feel effortless — but are built with extraordinary care.',
    videoUrl: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_151826_c7218672-6e92-402c-9e45-f1e0f454bdc4.mp4',
  },
  {
    icon: <BarChart size={22} />,
    tag: 'Data',
    title: 'Analytics that inform',
    description: 'Real decisions need real data. Our analytics layer sits beneath everything we build, turning behavior into insight and insight into action.',
    videoUrl: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4',
  },
  {
    icon: <Shield size={22} />,
    tag: 'Trust',
    title: 'Built to last',
    description: 'We engineer for longevity. Every system we touch is designed to grow, adapt, and withstand the test of time without compromise.',
    videoUrl: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4',
  },
  {
    icon: <Globe size={22} />,
    tag: 'Scale',
    title: 'Global by default',
    description: 'From day one, we think at scale. Whether your audience is ten or ten million, we build infrastructure that grows without friction.',
    videoUrl: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260402_054547_9875cfc5-155a-4229-8ec8-b7ba7125cbf8.mp4',
  },
]

export default function FeaturesPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="pt-24 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.04)_0%,_transparent_60%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto">
          <motion.p
            className="text-white/40 text-xs tracking-widest uppercase mb-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Features
          </motion.p>
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl text-white tracking-tight mb-6"
            style={{ fontFamily: "'Instrument Serif', serif" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Everything you need to{' '}
            <em className="italic text-white/50">excel.</em>
          </motion.h1>
          <motion.p
            className="text-white/50 text-lg max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A complete suite of capabilities designed for teams that refuse to compromise.
          </motion.p>
        </div>
      </section>

      {/* Feature video hero */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="rounded-3xl overflow-hidden aspect-video relative"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <video muted autoPlay loop playsInline className="w-full h-full object-cover">
              <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260402_054547_9875cfc5-155a-4229-8ec8-b7ba7125cbf8.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
            <div className="absolute bottom-8 left-8">
              <div className="liquid-glass rounded-2xl px-6 py-4">
                <p className="text-white/50 text-xs tracking-widest uppercase mb-1">Platform overview</p>
                <p className="text-white text-sm">Watch how KYNTO brings it all together.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature cards grid */}
      <section className="px-6 pb-32">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.tag}
              className="liquid-glass rounded-3xl overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
            >
              <div className="aspect-video overflow-hidden relative">
                <video muted autoPlay loop playsInline className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
                  <source src={feature.videoUrl} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-white/40">
                    {feature.icon}
                    <span className="text-xs tracking-widest uppercase">{feature.tag}</span>
                  </div>
                  <div className="liquid-glass rounded-full p-2">
                    <ArrowUpRight size={14} className="text-white" />
                  </div>
                </div>
                <h3 className="text-white text-xl mb-2 tracking-tight" style={{ fontFamily: "'Instrument Serif', serif" }}>{feature.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </PageLayout>
  )
}
