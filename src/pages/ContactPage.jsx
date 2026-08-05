import { Mail, MessageCircle, Phone } from 'lucide-react';
import Seo from '../components/Seo';

const whatsappUrl = "https://wa.me/923028913283?text=I'm%20interested%20in%20your%20services";

const socialLinks = [
  {
    label: 'Facebook',
    handle: '@ShaQTechnologies',
    href: 'https://www.facebook.com/ShaQTechnologies',
    icon: '/images/social/facebook.svg',
  },
  {
    label: 'Instagram',
    handle: '@shaqtechnologies',
    href: 'https://www.instagram.com/shaqtechnologies/',
    icon: '/images/social/instagram.svg',
  },
  {
    label: 'LinkedIn',
    handle: 'ShaQ Technologies',
    href: 'https://www.linkedin.com/company/shaqtechnologies',
    icon: '/images/social/linkedin.svg',
  },
  {
    label: 'X',
    handle: '@ShaQ_Tech',
    href: 'https://x.com/ShaQ_Tech',
    icon: '/images/social/x.svg',
  },
];

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  url: 'https://www.shaqtechnologies.com/contact',
  name: 'Contact ShaQ Technologies',
  mainEntity: {
    '@type': 'Organization',
    name: 'ShaQ Technologies',
    sameAs: socialLinks.map((social) => social.href),
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+923028913283',
      contactType: 'sales',
      email: 'contact@shaqtechnologies.com',
      availableLanguage: ['English'],
    },
  },
};

const channels = [
  {
    label: 'Email us',
    value: 'contact@shaqtechnologies.com',
    href: 'mailto:contact@shaqtechnologies.com',
    icon: Mail,
  },
  {
    label: 'Call us',
    value: '+92 302 8913283',
    href: 'tel:+923028913283',
    icon: Phone,
  },
  {
    label: 'WhatsApp',
    value: '+92 302 8913283',
    href: whatsappUrl,
    icon: MessageCircle,
    external: true,
  },
];

function ContactPage() {
  return (
    <>
      <Seo
        title="Contact ShaQ Technologies"
        description="Contact ShaQ Technologies by phone, email, WhatsApp, or social media to discuss your next digital project."
        path="/contact"
        schema={contactSchema}
      />

      <section className="container-shell py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-brand-navy dark:text-white md:text-6xl">
            Let&apos;s build what&apos;s next.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Tell us what you are planning, what is slowing your team down, or where your current
            platform needs to go next.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
          {channels.map(({ label, value, href, icon: Icon, external }) => (
            <a
              key={label}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noreferrer' : undefined}
              className="group rounded-[2rem] border border-slate-200/80 bg-white p-7 text-center shadow-soft transition hover:-translate-y-1 dark:border-white/10 dark:bg-white/5 dark:shadow-glow"
            >
              <span className="mx-auto inline-flex rounded-2xl bg-gradient-to-br from-brand-blue to-brand-cyan p-3 text-white">
                <Icon size={22} />
              </span>
              <span className="mt-5 block text-lg font-bold text-brand-navy dark:text-white">{label}</span>
              <span className="mt-2 block break-words text-sm text-slate-600 transition group-hover:text-brand-blue dark:text-slate-300">
                {value}
              </span>
            </a>
          ))}
        </div>

        <div className="mx-auto mt-20 max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Social Media</p>
            <h2 className="section-title mt-4">Connect with ShaQ Technologies.</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600 dark:text-slate-300">
              Follow our channels for company updates, technology insights, and new product announcements.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {socialLinks.map(({ label, handle, href, icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Follow ShaQ Technologies on ${label}`}
                className="group flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:border-brand-blue/40 dark:border-white/10 dark:bg-white/5 dark:shadow-glow"
              >
                <span className="inline-flex shrink-0 rounded-xl bg-slate-100 p-3 transition group-hover:bg-slate-200 dark:bg-white dark:group-hover:bg-slate-100">
                  <img src={icon} alt="" width="20" height="20" className="block h-5 w-5 object-contain" />
                </span>
                <span className="min-w-0">
                  <span className="block font-bold text-brand-navy dark:text-white">{label}</span>
                  <span className="mt-1 block truncate text-xs text-slate-500 dark:text-slate-400">{handle}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
