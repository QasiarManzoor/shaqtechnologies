import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  ShieldCheck,
} from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import Seo from '../components/Seo';
import { getService } from '../data/services';

const whatsappUrl = "https://wa.me/923028913283?text=I'm%20interested%20in%20your%20services";

function ServicePage() {
  const { slug } = useParams();
  const service = getService(slug);

  if (!service) return <Navigate to="/not-found" replace />;

  const Icon = service.icon;
  const path = `/services/${service.slug}`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: service.title,
        url: `https://www.shaqtechnologies.com${path}`,
        provider: {
          '@type': 'Organization',
          name: 'ShaQ Technologies',
          url: 'https://www.shaqtechnologies.com/',
        },
        description: service.metaDescription,
        areaServed: 'Worldwide',
        serviceType: service.serviceType,
      },
      {
        '@type': 'FAQPage',
        mainEntity: service.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
    ],
  };

  return (
    <>
      <Seo title={service.metaTitle} description={service.metaDescription} path={path} schema={schema} />

      <section className="container-shell py-14 md:py-20">
        <Link
          to="/#services"
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:text-brand-navy dark:hover:text-brand-cyan"
        >
          <ArrowLeft size={16} /> All services
        </Link>

        <div className="mt-8 max-w-5xl">
          <div className="inline-flex rounded-2xl bg-gradient-to-br from-brand-blue to-brand-cyan p-4 text-white shadow-lg shadow-sky-500/20">
            <Icon size={28} />
          </div>
          <p className="eyebrow mt-7">{service.serviceType}</p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-brand-navy dark:text-white md:text-6xl md:leading-[1.08]">
            {service.hero.title}
          </h1>
          <p className="mt-6 max-w-4xl text-xl font-semibold leading-8 text-slate-700 dark:text-slate-200">
            {service.hero.subtitle}
          </p>
          <div className="mt-7 max-w-4xl space-y-4 text-base leading-8 text-slate-600 dark:text-slate-300">
            {service.hero.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/contact" className="primary-button gap-2">
              {service.hero.primaryCta} <ArrowRight size={18} />
            </Link>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="secondary-button gap-2">
              <MessageCircle size={18} /> {service.hero.secondaryCta}
            </a>
          </div>
        </div>
      </section>

      <section className="container-shell py-12 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow">What we solve</p>
            <h2 className="section-title mt-4">{service.challenge.title}</h2>
            <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">{service.challenge.intro}</p>
          </div>
          <div>
            <div className="glass-panel p-7 md:p-9">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-blue dark:text-brand-cyan">
                {service.challenge.label}
              </p>
              <div className="mt-6 space-y-5">
                {service.challenge.items.map((item) => (
                  <div key={item.title} className="flex gap-4 border-b border-slate-200 pb-5 last:border-0 last:pb-0 dark:border-white/10">
                    <CheckCircle2 className="mt-1 shrink-0 text-brand-blue" size={20} />
                    <p className="leading-7 text-slate-600 dark:text-slate-300">
                      <strong className="text-brand-navy dark:text-white">{item.title}:</strong> {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-6 rounded-2xl bg-brand-blue/10 p-6 font-semibold leading-7 text-brand-navy dark:bg-brand-cyan/10 dark:text-white">
              {service.challenge.conclusion}
            </p>
          </div>
        </div>
      </section>

      <section className="container-shell py-12 md:py-20">
        <p className="eyebrow">Capabilities</p>
        <h2 className="section-title mt-4 max-w-3xl">{service.capabilitiesTitle}</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {service.capabilities.map((item, index) => (
            <article key={item.title} className="glass-panel p-7 md:p-8">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue/10 text-sm font-extrabold text-brand-blue dark:bg-brand-cyan/10 dark:text-brand-cyan">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-5 text-xl font-bold tracking-tight text-brand-navy dark:text-white">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-shell py-12 md:py-20">
        <div className="rounded-[2rem] bg-brand-navy px-7 py-10 text-white md:px-12 md:py-14">
          <div className="flex items-center gap-3 text-brand-cyan">
            <ShieldCheck size={24} />
            <p className="text-sm font-bold uppercase tracking-[0.2em]">Our approach</p>
          </div>
          <h2 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-tight md:text-4xl">{service.approach.title}</h2>
          {service.approach.items?.length ? (
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {service.approach.items.map((item) => (
                <article key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{item.text}</p>
                </article>
              ))}
            </div>
          ) : (
            <p className="mt-5 max-w-3xl leading-7 text-slate-300">
              Every engagement is planned around your goals, validated at each milestone, and engineered for a confident production launch.
            </p>
          )}
        </div>
      </section>

      <section className="container-shell py-12 md:py-20">
        <p className="eyebrow">Frequently Asked Questions</p>
        <h2 className="section-title mt-4">Answers for your next step.</h2>
        <div className="mt-9 grid gap-5">
          {service.faqs.map((faq) => (
            <details key={faq.question} className="glass-panel group p-6 open:border-brand-blue/40 md:p-7">
              <summary className="cursor-pointer list-none pr-8 text-lg font-bold text-brand-navy dark:text-white">
                {faq.question}
              </summary>
              <p className="mt-4 max-w-5xl leading-7 text-slate-600 dark:text-slate-300">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="container-shell pb-20 pt-12 md:pb-24 md:pt-20">
        <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-blue to-brand-cyan px-7 py-10 text-white shadow-lg shadow-sky-500/20 md:px-12 md:py-14">
          <h2 className="max-w-3xl text-3xl font-extrabold tracking-tight md:text-5xl">{service.closing.title}</h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-white/90">{service.closing.text}</p>
          <div className="mt-9 grid gap-4 md:grid-cols-2">
            <Link to="/contact" className="rounded-2xl bg-white p-5 text-brand-navy transition hover:-translate-y-0.5">
              <span className="flex items-center gap-2 font-bold">{service.closing.primaryLabel} <ArrowRight size={18} /></span>
              <span className="mt-2 block text-sm leading-6 text-slate-600">{service.closing.primaryText}</span>
            </Link>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="rounded-2xl border border-white/30 bg-white/10 p-5 transition hover:-translate-y-0.5 hover:bg-white/15">
              <span className="flex items-center gap-2 font-bold">{service.closing.secondaryLabel} <MessageCircle size={18} /></span>
              <span className="mt-2 block text-sm leading-6 text-white/80">{service.closing.secondaryText}</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServicePage;
