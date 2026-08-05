import { AnimatePresence, motion } from 'framer-motion';
import { Menu, UserRound, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/#services' },
  { label: 'Products', href: '/#services' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/contact' },
];

function Navbar({ theme, setTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-navy/95 backdrop-blur-xl">
      <nav className="container-shell flex items-center justify-between py-4">
        <Link
          to="/"
          aria-label="ShaQTechnologies home"
          className="inline-flex shrink-0 items-center gap-2 leading-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy sm:gap-2.5"
        >
          <img
            src="/shaq-logo-web-safe-transparent.png"
            alt="ShaQTechnologies"
            width="60"
            height="40"
            className="block h-9 w-[54px] shrink-0 object-contain sm:h-10 sm:w-[60px]"
          />
          <span
            aria-hidden="true"
            className="hidden whitespace-nowrap text-lg font-extrabold tracking-tight text-white min-[380px]:block sm:text-xl md:text-[1.35rem]"
          >
            ShaQTechnologies
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-medium text-slate-300 transition hover:text-white"
          >
            <UserRound size={16} />
            Login
          </Link>
          <Link to="/contact" className="primary-button">
            Get Started
          </Link>
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle theme={theme} setTheme={setTheme} />
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-100 transition-colors hover:bg-white/10"
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
            className="border-t border-white/10 bg-brand-navy/95 lg:hidden"
          >
            <div className="container-shell flex flex-col gap-4 py-5">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-medium text-slate-200 transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center gap-2 rounded-2xl px-1 py-2 text-sm font-medium text-slate-200 transition hover:text-white"
              >
                <UserRound size={16} />
                Login
              </Link>
              <Link to="/contact" className="primary-button w-full" onClick={() => setMenuOpen(false)}>
                Get Started
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;

