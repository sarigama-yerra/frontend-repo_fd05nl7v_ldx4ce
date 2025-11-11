import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Moon, Sun, HeartPulse, Waves, Sparkles, ArrowRight, Star, Quote, ChevronRight } from 'lucide-react'
import Spline from '@splinetool/react-spline'

function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light'
    return localStorage.getItem('theme') || 'light'
  })

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') root.classList.add('dark')
    else root.classList.remove('dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggle = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'))
  return { theme, toggle }
}

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Companies', href: '#companies' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

function Badge({ children, tone = 'red' }) {
  const tones = {
    red: 'from-red-500/20 to-rose-500/20 text-red-700 dark:text-rose-200 border-red-400/30',
    neutral: 'from-slate-200 to-slate-100 text-slate-700 dark:text-slate-200 border-white/10',
  }
  return (
    <div className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm bg-gradient-to-b ${tones[tone]}`}>
      {children}
    </div>
  )
}

function GlassCard({ children, className = '' }) {
  return (
    <div className={`relative rounded-2xl bg-white/50 dark:bg-white/5 backdrop-blur-xl border border-white/60 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] ${className}`}>
      {children}
    </div>
  )
}

const companies = [
  'Audionyx',
  'ClearWave',
  'ToneLabs',
  'Resona',
  'Voxis',
  'EchoPulse',
]

const products = [
  {
    name: 'AuralCare Basic',
    desc: 'Entry-level hearing aid with smart noise reduction.',
    price: '$299',
  },
  {
    name: 'Voxi Pro',
    desc: 'Speech therapy companion app with daily exercises.',
    price: '$9/mo',
  },
  {
    name: 'Echo Max',
    desc: 'Rechargeable, Bluetooth-enabled premium hearing solution.',
    price: '$899',
  },
]

const testimonials = [
  {
    name: 'Priya',
    role: 'Parent',
    quote:
      'Our son found his voice again. The team blended tech and empathy beautifully.',
  },
  {
    name: 'Michael',
    role: 'Founder, Resona',
    quote: 'Their clinic set the gold standard for outcomes and care.',
  },
  {
    name: 'Aisha',
    role: 'Client',
    quote: 'The progress in just 6 weeks was beyond what I expected.',
  },
]

export default function App() {
  const { theme, toggle } = useTheme()

  const grid = useMemo(
    () => [
      {
        title: 'Hearing Rehab',
        icon: <Waves className="h-5 w-5 text-red-600 dark:text-rose-300" />,
        text: 'Personalized programs built on audiology and behavioral science.',
        col: 'md:col-span-2',
      },
      {
        title: 'Speech Therapy',
        icon: <HeartPulse className="h-5 w-5 text-red-600 dark:text-rose-300" />,
        text: 'Evidence-based articulation and fluency training for all ages.',
      },
      {
        title: 'Tinnitus Relief',
        icon: <Sparkles className="h-5 w-5 text-red-600 dark:text-rose-300" />,
        text: 'Sound therapy protocols tuned to your unique profile.',
      },
      {
        title: 'Tele-Care',
        icon: <ChevronRight className="h-5 w-5 text-red-600 dark:text-rose-300" />,
        text: 'Secure, convenient sessions wherever you are.',
        col: 'md:col-span-2',
      },
    ],
    []
  )

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-[#0B0B0F] dark:text-slate-100">
      {/* Navbar */}
      <header className="fixed top-0 inset-x-0 z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/60 bg-white/70 dark:border-white/10 dark:bg-white/5 backdrop-blur-xl px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-red-500 to-rose-600 shadow-lg" />
              <div className="font-semibold tracking-tight">AuralCare Clinic</div>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              {navItems.map((n) => (
                <a key={n.href} href={n.href} className="hover:text-red-600 dark:hover:text-rose-300 transition-colors">
                  {n.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              <button
                onClick={toggle}
                aria-label="Toggle theme"
                className="inline-flex items-center justify-center rounded-xl border border-white/60 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-xl h-10 w-10"
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
              <a href="#contact" className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-gradient-to-tr from-red-600 to-rose-500 text-white px-4 py-2 shadow-lg shadow-red-500/20 hover:shadow-red-500/30">
                Book a session <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero with Spline */}
      <section className="relative pt-28">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        {/* overlay gradients should not block interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-white/80 dark:from-black/40 dark:via-black/50 dark:to-black/80" />
        <div className="relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28">
            <div className="max-w-2xl">
              <Badge>
                <div className="h-2 w-2 rounded-full bg-red-500" />
                Advanced Hearing & Speech Care
              </Badge>
              <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow [text-shadow:_0_2px_24px_rgba(244,63,94,0.45)]">
                Find clarity in every sound, confidence in every word.
              </h1>
              <p className="mt-6 text-white/90 max-w-xl">
                A modern clinic blending compassionate experts with premium, research-backed programs. Available in-person and online.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href="#products" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/90 text-slate-900 hover:bg-white px-5 py-3 font-medium">
                  Explore solutions <ChevronRight className="h-4 w-4" />
                </a>
                <a href="#about" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/60 bg-white/20 text-white backdrop-blur-xl px-5 py-3 font-medium">
                  How we help
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Services */}
      <section id="about" className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-center justify-between">
            <div>
              <Badge tone="neutral">What we do</Badge>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">Care, elevated</h2>
            </div>
            <span className="text-sm text-slate-500 dark:text-slate-400">Tailored programs • Outcome-driven</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {grid.map((g, i) => (
              <GlassCard key={i} className={`p-6 ${g.col || ''}`}>
                <div className="flex items-center gap-3">
                  {g.icon}
                  <h3 className="text-lg font-semibold">{g.title}</h3>
                </div>
                <p className="mt-3 text-slate-600 dark:text-slate-300">{g.text}</p>
                <div className="mt-6 h-24 rounded-xl bg-gradient-to-br from-red-500/10 to-rose-500/10 dark:from-red-500/20 dark:to-rose-500/10" />
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Collaborated Companies */}
      <section id="companies" className="relative py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <GlassCard className="p-6">
            <div className="flex flex-wrap items-center justify-center gap-8">
              {companies.map((c) => (
                <div key={c} className="flex items-center gap-2 text-sm sm:text-base text-slate-600 dark:text-slate-300">
                  <div className="h-2 w-2 rounded-full bg-gradient-to-br from-red-500 to-rose-500" />
                  <span className="font-medium">{c}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <Badge tone="neutral">Care solutions</Badge>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">Products & plans</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p, idx) => (
              <motion.div
                key={p.name}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 250, damping: 20 }}
                className="group"
              >
                <GlassCard className="p-6 h-full">
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg font-semibold">{p.name}</h3>
                    <div className="rounded-lg bg-gradient-to-br from-red-500/20 to-rose-500/20 px-2 py-1 text-sm">
                      {p.price}
                    </div>
                  </div>
                  <p className="mt-3 text-slate-600 dark:text-slate-300">{p.desc}</p>
                  <div className="mt-6 h-28 rounded-xl bg-gradient-to-br from-red-500/10 to-rose-500/10 group-hover:from-red-500/20 group-hover:to-rose-500/20 transition-colors" />
                  <button className="mt-6 inline-flex items-center gap-2 rounded-xl border border-slate-200 dark:border-white/10 px-4 py-2 text-sm hover:border-red-400/50 hover:text-red-600 dark:hover:text-rose-300">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </button>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <Badge tone="neutral">Voices</Badge>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">What people say</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <GlassCard key={t.name} className="p-6">
                <Quote className="h-6 w-6 text-red-500/70" />
                <p className="mt-4 text-slate-700 dark:text-slate-200">“{t.quote}”</p>
                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">{t.role}</div>
                  </div>
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star className="h-4 w-4 fill-amber-400" />
                    <Star className="h-4 w-4 fill-amber-400" />
                    <Star className="h-4 w-4 fill-amber-400" />
                    <Star className="h-4 w-4 fill-amber-400" />
                    <Star className="h-4 w-4 fill-amber-400" />
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <GlassCard className="p-8">
            <div className="grid gap-6 md:grid-cols-2 items-center">
              <div>
                <h3 className="text-2xl font-bold tracking-tight">Ready to start your care plan?</h3>
                <p className="mt-3 text-slate-600 dark:text-slate-300">Book an assessment and receive a personalized roadmap in your first visit.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-end">
                <a href="#" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-tr from-red-600 to-rose-500 text-white px-5 py-3 shadow-lg shadow-red-500/20 hover:shadow-red-500/30">
                  Book now <ArrowRight className="h-4 w-4" />
                </a>
                <a href="mailto:hello@auralcare.clinic" className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 dark:border-white/10 px-5 py-3">
                  hello@auralcare.clinic
                </a>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-slate-100 dark:border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-red-500 to-rose-600" />
            <span className="text-sm text-slate-500 dark:text-slate-400">© {new Date().getFullYear()} AuralCare Clinic</span>
          </div>
          <div className="text-sm text-slate-500 dark:text-slate-400">Privacy • Terms • Accessibility</div>
        </div>
      </footer>
    </div>
  )
}
