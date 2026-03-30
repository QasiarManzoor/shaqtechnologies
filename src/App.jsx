import { useEffect, useState } from 'react';
import About from './components/About';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Services from './components/Services';

const getInitialTheme = () => {
  if (typeof window === 'undefined') {
    return 'light';
  }

  const savedTheme = window.localStorage.getItem('shaq-theme');
  if (savedTheme) {
    return savedTheme;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    window.localStorage.setItem('shaq-theme', theme);
  }, [theme]);

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[38rem] bg-hero-grid bg-[size:120px_120px] opacity-50 dark:opacity-15" />
      <div className="pointer-events-none absolute left-[-8rem] top-24 -z-10 h-72 w-72 rounded-full bg-brand-cyan/20 blur-3xl dark:bg-brand-cyan/15" />
      <div className="pointer-events-none absolute right-[-6rem] top-16 -z-10 h-80 w-80 rounded-full bg-brand-blue/20 blur-3xl dark:bg-brand-blue/15" />

      <Navbar theme={theme} setTheme={setTheme} />

      <main>
        <Hero />
        <Services />
        <About />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
