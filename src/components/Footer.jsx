function Footer() {
  return (
    <footer className="container-shell pb-10">
      <div className="flex flex-col gap-4 border-t border-slate-200/80 pt-6 text-sm text-slate-500 dark:border-white/10 dark:text-slate-400 md:flex-row md:items-center md:justify-between">
        <p>© 2026 ShaQTechnologies. All rights reserved.</p>
        <div className="flex flex-wrap gap-5">
          <a href="#home" className="transition hover:text-brand-blue">
            Home
          </a>
          <a href="#services" className="transition hover:text-brand-blue">
            Services
          </a>
          <a href="#about" className="transition hover:text-brand-blue">
            About
          </a>
          <a href="#contact" className="transition hover:text-brand-blue">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
