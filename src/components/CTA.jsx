import { motion } from 'framer-motion';
import { ArrowRight, Mail, MessageSquareMore, MessageCircle } from 'lucide-react';

function CTA() {
  return (
    <section id="contact" className="container-shell pb-20 pt-8 md:pb-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white px-8 py-12 shadow-soft dark:border-white/10 dark:bg-white/5"
      >
        <div className="absolute -left-16 top-0 h-48 w-48 rounded-full bg-brand-cyan/20 blur-3xl dark:bg-brand-cyan/10" />
        <div className="absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-brand-blue/20 blur-3xl dark:bg-brand-blue/10" />

        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">Launch Faster</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-brand-navy dark:text-white md:text-5xl">
              Ready to launch your next platform?
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
              Let&apos;s build a product that looks polished, works reliably, and gives your business
              room to scale.
            </p>

            <div className="mt-6 space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <a
                href="mailto:contact@shaqtechnologies.com"
                className="flex items-center gap-3 transition hover:text-brand-blue"
              >
                <Mail size={16} className="text-brand-blue" />
                contact@shaqtechnologies.com
              </a>
              <a
                href="https://wa.me/923028913283"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 transition hover:text-brand-blue"
              >
                <MessageCircle size={16} className="text-brand-blue" />
                Business WhatsApp: +923028913283
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a href="#contact" className="primary-button gap-2">
              Start Project
              <ArrowRight size={18} />
            </a>
            <a href="mailto:contact@shaqtechnologies.com" className="secondary-button gap-2">
              <MessageSquareMore size={18} />
              Contact Us
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default CTA;
