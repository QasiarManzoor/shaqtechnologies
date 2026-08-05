import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services } from '../data/services';

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
          From secure AI and cloud platforms to custom web, mobile, and organic growth programs,
          we help ambitious teams launch faster and operate with confidence.
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
                {service.shortDescription}
              </p>
              <Link to={`/services/${service.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue transition hover:text-brand-navy dark:hover:text-brand-cyan">Explore service <ArrowUpRight size={16} /></Link>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

export default Services;
