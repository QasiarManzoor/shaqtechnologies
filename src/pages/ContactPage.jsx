import { Mail, MessageCircle, Phone } from 'lucide-react';
import Seo from '../components/Seo';

const whatsappUrl = "https://wa.me/923028913283?text=I'm%20interested%20in%20your%20services";
const contactSchema = {
  '@context': 'https://schema.org', '@type': 'ContactPage', url: 'https://www.shaqtechnologies.com/contact', name: 'Contact ShaQ Technologies',
  mainEntity: { '@type': 'Organization', name: 'ShaQ Technologies', contactPoint: { '@type': 'ContactPoint', telephone: '+923028913283', contactType: 'sales', email: 'contact@shaqtechnologies.com', availableLanguage: ['English'] } },
};
const channels = [
  { label: 'Email us', value: 'contact@shaqtechnologies.com', href: 'mailto:contact@shaqtechnologies.com', icon: Mail },
  { label: 'Call us', value: '+92 302 8913283', href: 'tel:+923028913283', icon: Phone },
  { label: 'WhatsApp', value: '+92 302 8913283', href: whatsappUrl, icon: MessageCircle, external: true },
];

function ContactPage() {
  return <>
    <Seo title="Contact ShaQ Technologies" description="Contact ShaQ Technologies to discuss your AI, SaaS, CRM, ERP, or cloud platform project." path="/contact" schema={contactSchema} />
    <section className="container-shell py-16 md:py-24">
      <div className="mx-auto max-w-3xl text-center"><p className="eyebrow">Contact</p><h1 className="mt-4 text-4xl font-extrabold tracking-tight text-brand-navy dark:text-white md:text-6xl">Let&apos;s build what&apos;s next.</h1><p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">Tell us what you are planning, what is slowing your team down, or where your current platform needs to go next.</p></div>
      <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">{channels.map(({ label, value, href, icon: Icon, external }) => <a key={label} href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined} className="group rounded-[2rem] border border-slate-200/80 bg-white p-7 text-center shadow-soft transition hover:-translate-y-1 dark:border-white/10 dark:bg-white/5 dark:shadow-glow"><span className="mx-auto inline-flex rounded-2xl bg-gradient-to-br from-brand-blue to-brand-cyan p-3 text-white"><Icon size={22} /></span><span className="mt-5 block text-lg font-bold text-brand-navy dark:text-white">{label}</span><span className="mt-2 block break-words text-sm text-slate-600 transition group-hover:text-brand-blue dark:text-slate-300">{value}</span></a>)}</div>
    </section>
  </>;
}

export default ContactPage;
