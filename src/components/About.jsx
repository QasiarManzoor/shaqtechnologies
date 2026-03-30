import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

const highlights = [
  'Scalable SaaS and cloud platforms',
  'AI-powered workflows and automation',
  'CRM, ERP, and enterprise systems',
];

function About() {
  return (
    <section id="about" className="container-shell py-20 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6 }}
        className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]"
      >
        <div className="glass-panel overflow-hidden px-8 py-10 md:px-12 md:py-14">
          <p className="eyebrow">About</p>
          <h2 className="section-title mt-4 max-w-xl">Modern product thinking for serious business software.</h2>
          <div className="mt-6 space-y-5 text-base leading-8 text-slate-600 dark:text-slate-300">
            <p>
              ShaQTechnologies builds digital platforms for businesses that need more than a basic
              website or generic internal tool. We focus on software that solves operational
              problems, improves visibility, and creates better customer experiences.
            </p>
            <p>
              Our work spans AI-powered products, SaaS applications, CRM and ERP systems, and cloud
              platforms designed to stay reliable as your business grows.
            </p>
          </div>
        </div>

        <div className="glass-panel px-8 py-10 md:px-10 md:py-12">
          <p className="eyebrow">Why Us</p>
          <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-brand-navy dark:text-white">
            Built to feel premium and perform at scale.
          </h3>

          <div className="mt-8 space-y-4">
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-[1.5rem] border border-slate-200/80 bg-white p-5 dark:border-white/10 dark:bg-white/5"
              >
                <CheckCircle2 className="mt-0.5 text-brand-blue" size={18} />
                <p className="text-sm font-medium leading-6 text-brand-navy dark:text-white">{item}</p>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue transition hover:text-brand-navy dark:hover:text-brand-cyan"
          >
            Start your next platform
            <ArrowUpRight size={16} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
