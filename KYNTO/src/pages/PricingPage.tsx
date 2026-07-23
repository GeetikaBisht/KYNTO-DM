import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageLayout from '../components/PageLayout'

const plans = [
  {
    name: 'Starter',
    price: '$0',
    period: 'forever',
    desc: 'For individuals exploring ideas and early concepts.',
    features: [
      'Up to 3 projects',
      'Basic insights',
      'Community access',
      '1GB storage',
      'Public sharing',
    ],
    cta: 'Start exploring',
    href: '/signup',
    highlight: false,
  },
  {
    name: 'Builder',
    price: '$49',
    period: 'per month',
    desc: 'For teams shaping products and meaningful experiences.',
    features: [
      'Unlimited projects',
      'Advanced insights',
      'Priority support',
      '50GB storage',
      'Private sharing',
      'Custom domains',
      'Team collaboration',
    ],
    cta: 'Start building',
    href: '/signup',
    highlight: true,
  },
  {
    name: 'Studio',
    price: '$149',
    period: 'per month',
    desc: 'For studios creating at scale with precision.',
    features: [
      'Everything in Builder',
      'Dedicated support',
      'Performance SLA',
      'Unlimited storage',
      'Advanced security',
      'Custom integrations',
      'Onboarding support',
    ],
    cta: 'Talk to us',
    href: '/about',
    highlight: false,
  },
]

export default function PricingPage() {
  return (
    <PageLayout>
      <section className="pt-24 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.04)_0%,_transparent_60%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center">
          <motion.p
            className="text-white/40 text-xs tracking-widest uppercase mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Pricing
          </motion.p>
          <motion.h1
            className="text-5xl md:text-7xl text-white tracking-tight mb-6"
            style={{ fontFamily: "'Instrument Serif', serif" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Clear,{' '}
            <em className="italic text-white/50">flexible</em>{' '}
            plans.
          </motion.h1>
          <motion.p
            className="text-white/50 text-lg max-w-lg mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Designed to support how you explore, design, and build — from first idea to finished experience.
          </motion.p>
        </div>
      </section>

      {/* Plans */}
      <section className="px-6 pb-32">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              className={`rounded-3xl p-8 flex flex-col relative overflow-hidden ${plan.highlight ? 'bg-white text-black' : 'liquid-glass text-white'}`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
            >
              {plan.highlight && (
                <div className="absolute top-6 right-6">
                  <span className="bg-black text-white text-xs tracking-widest uppercase px-3 py-1 rounded-full">Recommended</span>
                </div>
              )}
              <p className={`text-xs tracking-widest uppercase mb-4 ${plan.highlight ? 'text-black/40' : 'text-white/40'}`}>{plan.name}</p>
              <div className="mb-2">
                <span className="text-5xl font-bold" style={{ fontFamily: "'Instrument Serif', serif" }}>{plan.price}</span>
                <span className={`text-sm ml-2 ${plan.highlight ? 'text-black/50' : 'text-white/40'}`}>/ {plan.period}</span>
              </div>
              <p className={`text-sm mb-8 ${plan.highlight ? 'text-black/60' : 'text-white/50'}`}>{plan.desc}</p>
              <ul className="flex flex-col gap-3 mb-10 flex-1">
                {plan.features.map(f => (
                  <li key={f} className="flex items-center gap-3 text-sm">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${plan.highlight ? 'bg-black text-white' : 'bg-white/10 text-white'}`}>
                      <Check size={11} />
                    </div>
                    <span className={plan.highlight ? 'text-black/80' : 'text-white/70'}>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to={plan.href}
                className={`w-full rounded-full py-4 flex items-center justify-center gap-2 font-medium text-sm transition-colors ${plan.highlight ? 'bg-black text-white hover:bg-black/80' : 'liquid-glass text-white hover:bg-white/5'}`}
              >
                {plan.cta}
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* FAQ teaser */}
        <div className="max-w-2xl mx-auto mt-20 text-center">
          <p className="text-white/30 text-sm">
            Questions about working with KYNTO?{' '}
            <a href="mailto:hello@kynto.studio" className="text-white/60 underline underline-offset-4 hover:text-white transition-colors">
              Get in touch
            </a>
          </p>
        </div>
      </section>
    </PageLayout>
  )
}