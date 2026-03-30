import { AnimatePresence, motion } from 'framer-motion';
import { Menu, UserRound, X } from 'lucide-react';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Products', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

function Navbar({ theme, setTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/82 backdrop-blur-xl transition-colors duration-500 dark:border-white/10 dark:bg-navy/80">
      <nav className="container-shell flex items-center justify-between py-4">
        <a href="#home" className="flex items-center gap-3 md:gap-4">
          <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-1 shadow-lg shadow-slate-200/60 dark:border-white/10 dark:bg-white/10 dark:shadow-cyan-500/10 md:h-14 md:w-14">
            <img
              src="/shaq-logo.png"
              alt="ShaQTechnologies logo"
              className="h-full w-full rounded-xl object-contain"
            />
          </div>
          <div>
            <p className="text-lg font-extrabold tracking-tight text-brand-navy dark:text-white md:text-[1.8rem]">
              ShaQTechnologies
            </p>
            <p className="text-xs font-medium tracking-tight text-slate-600 dark:text-slate-300 md:text-sm">
              One Platform. Unlimited Possibilities.
            </p>
          </div>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-brand-navy dark:text-slate-300 dark:hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:text-brand-navy dark:text-slate-300 dark:hover:text-white"
          >
            <UserRound size={16} />
            Login
          </a>
          <a href="#contact" className="primary-button">
            Get Started
          </a>
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle theme={theme} setTheme={setTheme} />
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white/85 text-slate-700 shadow-lg shadow-slate-200/60 transition-colors dark:border-white/10 dark:bg-white/5 dark:text-slate-100"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-slate-200/70 bg-white/94 lg:hidden dark:border-white/10 dark:bg-slate-950/90"
          >
            <div className="container-shell flex flex-col gap-4 py-5">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-medium text-slate-700 dark:text-slate-200"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center gap-2 rounded-2xl px-1 py-2 text-sm font-medium text-slate-700 dark:text-slate-200"
              >
                <UserRound size={16} />
                Login
              </a>
              <a href="#contact" className="primary-button w-full" onClick={() => setMenuOpen(false)}>
                Get Started
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;

