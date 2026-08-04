import { Link } from 'react-router-dom';

function SiteFooter() {
  return (
    <footer className="container-shell pb-10">
      <div className="flex flex-col gap-4 border-t border-slate-200/80 pt-6 text-sm text-slate-500 dark:border-white/10 dark:text-slate-400 md:flex-row md:items-center md:justify-between">
        <p>&copy; 2026 ShaQ Technologies. All rights reserved.</p>
        <div className="flex flex-wrap gap-5">
          <Link to="/" className="transition hover:text-brand-blue">Home</Link>
          <Link to="/#services" className="transition hover:text-brand-blue">Services</Link>
          <Link to="/#about" className="transition hover:text-brand-blue">About</Link>
          <Link to="/contact" className="transition hover:text-brand-blue">Contact</Link>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
