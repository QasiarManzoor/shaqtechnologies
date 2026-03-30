import { motion } from 'framer-motion';
import {
  ArrowRight,
  Bot,
  Cloud,
  Cpu,
  Database,
  LineChart,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

const badges = ['AI Automation', 'Enterprise SaaS', 'Cloud Native'];

function Hero() {
  return (
    <section id="home" className="container-shell relative py-16 md:py-24">
      <div className="grid items-center gap-16 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <div className="mb-6 flex flex-wrap gap-3">
            {badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-700 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200"
              >
                {badge}
              </span>
            ))}
          </div>

          <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.02] tracking-tight text-[#0D1B2E] dark:text-white md:text-6xl xl:text-[4.75rem]">
            Modern software systems for ambitious businesses.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            We build scalable SaaS, AI-powered solutions, CRM, ERP, and enterprise software with a
            clean product mindset, strong architecture, and room to grow.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#contact" className="primary-button gap-2">
              Get Started
              <ArrowRight size={18} />
            </a>
            <a href="#services" className="secondary-button">
              Our Services
            </a>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {[
              ['40+', 'Platforms Delivered'],
              ['99.9%', 'Cloud Reliability'],
              ['24/7', 'AI-Driven Support'],
            ].map(([value, label]) => (
              <div key={label} className="glass-panel p-5">
                <div className="text-2xl font-bold text-[#0D1B2E] dark:text-white">{value}</div>
                <div className="mt-1 text-sm text-slate-600 dark:text-slate-300">{label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto w-full max-w-xl"
        >
          <div className="absolute left-4 top-10 h-48 w-48 rounded-full bg-cyan-300/30 blur-3xl dark:bg-cyan-500/20" />
          <div className="absolute bottom-6 right-8 h-56 w-56 rounded-full bg-blue-300/30 blur-3xl dark:bg-blue-500/20" />

          <div className="relative rounded-[2rem] border border-white/60 bg-white/80 p-5 shadow-soft backdrop-blur-xl transition-all duration-500 dark:border-white/10 dark:bg-white/5 dark:shadow-glow">
            <div className="glass-panel mb-5 p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    AI Infrastructure
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-[#0D1B2E] dark:text-white">
                    Adaptive Intelligence Core
                  </h3>
                </div>
                <div className="rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 p-3 text-white shadow-lg shadow-cyan-500/30">
                  <Cpu size={24} />
                </div>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3">
                {[
                  ['Data sync', Database],
                  ['Model ops', Bot],
                  ['Security', ShieldCheck],
                ].map(([label, Icon]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-slate-200/70 bg-white/70 p-4 text-center dark:border-white/10 dark:bg-white/5"
                  >
                    <Icon className="mx-auto text-cyan-500" size={18} />
                    <p className="mt-2 text-xs font-medium text-slate-600 dark:text-slate-300">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-[1.2fr_0.8fr]">
              <div className="glass-panel p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Analytics pulse</p>
                    <h4 className="mt-1 text-lg font-semibold text-[#0D1B2E] dark:text-white">
                      Smart growth dashboard
                    </h4>
                  </div>
                  <LineChart className="text-cyan-500" size={22} />
                </div>

                <div className="mt-6 flex h-36 items-end gap-3">
                  {[52, 78, 66, 90, 76, 108].map((height, index) => (
                    <motion.div
                      key={height}
                      initial={{ height: 0 }}
                      animate={{ height }}
                      transition={{ duration: 0.6, delay: 0.2 + index * 0.08 }}
                      className="w-full rounded-t-2xl bg-gradient-to-t from-blue-600 to-cyan-400"
                    />
                  ))}
                </div>
              </div>

              <div className="space-y-5">
                <div className="glass-panel p-5">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-cyan-100 p-3 text-cyan-700 dark:bg-cyan-400/10 dark:text-cyan-200">
                      <Cloud size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#0D1B2E] dark:text-white">
                        Cloud Sync
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Real-time deployment pipeline
                      </p>
                    </div>
                  </div>
                </div>

                <div className="glass-panel p-5">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-blue-100 p-3 text-blue-700 dark:bg-blue-400/10 dark:text-blue-200">
                      <Sparkles size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#0D1B2E] dark:text-white">
                        AI Assistant
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Workflow orchestration across teams
                      </p>
                    </div>
                  </div>
                </div>

                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="glass-panel ml-10 p-4"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-200">
                    Live Metrics
                  </p>
                  <div className="mt-3 flex items-end gap-2">
                    {[35, 22, 44, 30, 52].map((height) => (
                      <div
                        key={height}
                        style={{ height }}
                        className="w-8 rounded-t-xl bg-gradient-to-t from-cyan-400 to-blue-600"
                      />
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
