import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import PageLayout from '../components/PageLayout'

const posts = [
  {
    tag: 'Strategy',
    title: 'Unlearning is where strategy begins',
    desc: 'The strongest ideas rarely come from adding more — but from removing what no longer holds.',
    date: 'Apr 18, 2026',
    read: '5 min read',
    videoUrl: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260402_054547_9875cfc5-155a-4229-8ec8-b7ba7125cbf8.mp4',
    featured: true,
  },
  {
    tag: 'Design',
    title: 'What great design hides',
    desc: 'The most powerful parts of an experience are often the ones you never notice.',
    date: 'Apr 10, 2026',
    read: '4 min read',
    videoUrl: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_151826_c7218672-6e92-402c-9e45-f1e0f454bdc4.mp4',
    featured: false,
  },
  {
    tag: 'Innovation',
    title: 'Designing for what doesn’t exist yet',
    desc: 'The challenge isn’t solving today’s problems it’s anticipating tomorrow’s realities.',
    date: 'Apr 04, 2026',
    read: '3 min read',
    videoUrl:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_151826_c7218672-6e92-402c-9e45-f1e0f454bdc4.mp4',
    featured: false,
  },
  {
    tag: 'Culture',
    title: 'Thinking beyond the quarter',
    desc: 'Meaningful work compounds over time but only if you resist the pressure of short-term thinking.',
    date: 'Mar 24, 2026',
    read: '6 min read',
    videoUrl:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4',
    featured: false,
  },
]

export default function BlogPage() {
  const featured = posts.find(p => p.featured)!
  const rest = posts.filter(p => !p.featured)

  return (
    <PageLayout>
      {/* Hero */}
      <section className="pt-24 pb-16 px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.04)_0%,_transparent_60%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto">
          <motion.p className="text-white/40 text-xs tracking-widest uppercase mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            Blog
          </motion.p>
          <motion.h1
            className="text-5xl md:text-7xl text-white tracking-tight"
            style={{ fontFamily: "'Instrument Serif', serif" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Thoughts &{' '}
            <em className="italic text-white/50">ideas.</em>
          </motion.h1>
        </div>
      </section>

      {/* Featured post */}
      <section className="px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="liquid-glass rounded-3xl overflow-hidden group cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid md:grid-cols-2">
              <div className="aspect-video md:aspect-auto overflow-hidden">
                <video muted autoPlay loop playsInline className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
                  <source src={featured.videoUrl} type="video/mp4" />
                </video>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-white/40 text-xs tracking-widest uppercase">{featured.tag}</span>
                  <span className="text-white/20 text-xs">·</span>
                  <span className="text-white/40 text-xs">{featured.date}</span>
                  <span className="text-white/20 text-xs">·</span>
                  <span className="text-white/40 text-xs">{featured.read}</span>
                </div>
                <h2 className="text-white text-2xl md:text-3xl mb-4 tracking-tight" style={{ fontFamily: "'Instrument Serif', serif" }}>{featured.title}</h2>
                <p className="text-white/50 text-sm leading-relaxed mb-6">{featured.desc}</p>
                <div className="flex items-center gap-2 text-white/60 text-sm group-hover:text-white transition-colors">
                  Read article <ArrowUpRight size={14} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Post grid */}
      <section className="px-6 pb-32">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {rest.map((post, i) => (
            <motion.div
              key={post.title}
              className="liquid-glass rounded-3xl overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className="aspect-video overflow-hidden">
                <video muted autoPlay loop playsInline className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
                  <source src={post.videoUrl} type="video/mp4" />
                </video>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-white/40 text-xs tracking-widest uppercase">{post.tag}</span>
                  <span className="text-white/20 text-xs">·</span>
                  <span className="text-white/30 text-xs">{post.read}</span>
                </div>
                <h3 className="text-white text-lg mb-2 tracking-tight" style={{ fontFamily: "'Instrument Serif', serif" }}>{post.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{post.desc}</p>
                <div className="flex items-center gap-1 text-white/30 text-xs mt-4 group-hover:text-white/60 transition-colors">
                  {post.date} <ArrowUpRight size={12} className="ml-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </PageLayout>
  )
}
