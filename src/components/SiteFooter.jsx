import { Link } from 'react-router-dom';

function SiteFooter() {
  return (
    <footer className="container-shell pb-10">
      <div className="border-t border-slate-200/80 pt-7 text-sm text-slate-500 dark:border-white/10 dark:text-slate-400">
        <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
          <Link
            to="/"
            aria-label="ShaQTechnologies home"
            className="inline-flex w-fit shrink-0 items-center leading-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
          >
            <span className="inline-flex items-center gap-3">
              <img
                src="/shaq-logo-web-safe-transparent.png"
                alt="ShaQTechnologies"
                width="72"
                height="48"
                className="block h-12 w-[72px] shrink-0 object-contain"
                loading="lazy"
              />
              <span aria-hidden="true">
                <span className="block text-xl font-extrabold tracking-tight text-brand-navy dark:text-white">
                  ShaQTechnologies
                </span>
                <span className="mt-1 block text-xs font-medium text-slate-500 dark:text-slate-400">
                  One Platform. Unlimited Solutions.
                </span>
              </span>
            </span>
          </Link>

          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between lg:flex-1 lg:justify-end lg:gap-10">
            <p>&copy; 2026 ShaQ Technologies. All rights reserved.</p>
            <div className="flex flex-wrap gap-5">
              <Link to="/" className="transition hover:text-brand-blue">Home</Link>
              <Link to="/#services" className="transition hover:text-brand-blue">Services</Link>
              <Link to="/#about" className="transition hover:text-brand-blue">About</Link>
              <Link to="/contact" className="transition hover:text-brand-blue">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
