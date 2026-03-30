import { AnimatePresence, motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';

function ThemeToggle({ theme, setTheme }) {
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="relative inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white/85 text-slate-700 shadow-lg shadow-slate-200/60 backdrop-blur transition-all duration-500 hover:-translate-y-0.5 dark:border-white/10 dark:bg-white/5 dark:text-slate-100 dark:shadow-cyan-500/10"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ rotate: -20, opacity: 0, scale: 0.8 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 20, opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.25 }}
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

export default ThemeToggle;
