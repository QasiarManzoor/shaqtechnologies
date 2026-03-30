import { motion } from 'framer-motion';
import { CloudCog, LayoutDashboard, Layers3, Workflow } from 'lucide-react';

const services = [
  {
    title: 'AI Solutions',
    description:
      'Intelligent copilots, automations, and decision systems designed to help businesses move faster with confidence.',
    icon: Workflow,
  },
  {
    title: 'SaaS Development',
    description:
      'Scalable multi-tenant products with modern architecture, smooth user journeys, and strong platform foundations.',
    icon: Layers3,
  },
  {
    title: 'CRM / ERP Systems',
    description:
      'Connected business software that brings customers, operations, finance, and reporting into one streamlined flow.',
    icon: LayoutDashboard,
  },
  {
    title: 'Cloud Platforms',
    description:
      'Cloud-native infrastructure and deployment systems built for reliability, security, and long-term growth.',
    icon: CloudCog,
  },
];

function Services() {
  return (
    <section id="services" className="container-shell py-20 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6 }}
      >
        <p className="eyebrow">Services</p>
        <h2 className="section-title mt-4 max-w-2xl">Solutions built with clarity, scale, and precision.</h2>
        <p className="section-copy mt-4">
          We create modern software platforms that combine strong engineering with clean product
          design, helping teams launch faster and operate with more confidence.
        </p>
      </motion.div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="group rounded-[2rem] border border-slate-200/80 bg-white p-7 shadow-soft transition duration-300 hover:-translate-y-1 dark:border-white/10 dark:bg-white/5 dark:shadow-glow"
            >
              <div className="inline-flex rounded-2xl bg-gradient-to-br from-brand-blue to-brand-cyan p-3 text-white shadow-lg shadow-sky-500/20 transition duration-300 group-hover:scale-105">
                <Icon size={22} />
              </div>
              <h3 className="mt-6 text-xl font-bold tracking-tight text-brand-navy dark:text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {service.description}
              </p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

export default Services;
