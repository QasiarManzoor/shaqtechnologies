import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';

function NotFoundPage() {
  return <section className="container-shell flex min-h-[65vh] items-center justify-center py-20 text-center"><Seo title="Page Not Found | ShaQ Technologies" description="The requested page could not be found." path="/not-found" schema={{ '@context': 'https://schema.org', '@type': 'WebPage', name: 'Page Not Found' }} /><div><p className="eyebrow">404</p><h1 className="mt-4 text-4xl font-extrabold text-brand-navy dark:text-white md:text-6xl">Page not found.</h1><p className="mt-4 text-slate-600 dark:text-slate-300">The page may have moved or the address may be incorrect.</p><Link to="/" className="primary-button mt-8 gap-2"><ArrowLeft size={18} /> Back home</Link></div></section>;
}

export default NotFoundPage;
