/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 24px 70px rgba(0, 200, 255, 0.18)',
        soft: '0 24px 80px rgba(13, 27, 46, 0.08)',
      },
      colors: {
        'brand-navy': '#0D1B2E',
        'brand-blue': '#1E88E5',
        'brand-cyan': '#00C8FF',
        'brand-dark': '#101010',
        'brand-white': '#FFFFFF',
        navy: '#0B1324',
      },
      backgroundImage: {
        'hero-grid':
          'radial-gradient(circle at top, rgba(30, 136, 229, 0.08), transparent 30%), linear-gradient(rgba(148, 163, 184, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.08) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};
