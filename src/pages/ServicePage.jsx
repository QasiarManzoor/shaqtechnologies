import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import Seo from '../components/Seo';
import { getService } from '../data/services';

function ServicePage() {
  const { slug } = useParams();
  const service = getService(slug);
  if (!service) return <Navigate to="/not-found" replace />;

  const Icon = service.icon;
  const path = `/services/${service.slug}`;
  const schema = {
    '@context': 'https://schema.org', '@type': 'Service', name: service.title,
    url: `https://www.shaqtechnologies.com${path}`,
    provider: { '@type': 'Organization', name: 'ShaQ Technologies', url: 'https://www.shaqtechnologies.com/' },
    description: service.description, serviceType: service.serviceType,
  };

  return <>
    <Seo title={`${service.title} | ShaQ Technologies`} description={service.description} path={path} schema={schema} />
    <section className="container-shell py-16 md:py-24">
      <Link to="/#services" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:text-brand-navy dark:hover:text-brand-cyan"><ArrowLeft size={16} /> All services</Link>
      <div className="mt-8 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <div className="inline-flex rounded-2xl bg-gradient-to-br from-brand-blue to-brand-cyan p-4 text-white shadow-lg shadow-sky-500/20"><Icon size={28} /></div>
          <p className="eyebrow mt-7">{service.serviceType}</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold tracking-tight text-brand-navy dark:text-white md:text-6xl">{service.title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">{service.description}</p>
          <Link to="/contact" className="primary-button mt-8 gap-2">Discuss your project <ArrowRight size={18} /></Link>
        </div>
        <div className="glass-panel p-8 md:p-10">
          <p className="eyebrow">What we deliver</p>
          <div className="mt-6 space-y-4">{service.capabilities.map((item) => <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200/80 bg-white p-4 dark:border-white/10 dark:bg-white/5"><CheckCircle2 className="mt-0.5 shrink-0 text-brand-blue" size={18} /><span className="font-medium text-brand-navy dark:text-white">{item}</span></div>)}</div>
        </div>
      </div>
    </section>
    <section className="container-shell pb-20 md:pb-24"><div className="rounded-[2rem] bg-brand-navy px-8 py-12 text-white md:px-12">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-cyan">Business impact</p>
      <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">Technology built around the outcome.</h2>
      <div className="mt-8 grid gap-4 md:grid-cols-3">{service.benefits.map((item) => <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-5 font-semibold">{item}</div>)}</div>
    </div></section>
  </>;
}

export default ServicePage;
