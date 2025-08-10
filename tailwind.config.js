/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: '#10b981', soft: '#a7f3d0' },
        ink: { soft: '#94a3b8', faint: '#64748b' }
      },
      keyframes: {
        floaty: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-4px)' }
        },
        blink: {
          '0%, 48%, 52%, 100%': { opacity: '1' },
          '50%': { opacity: '0.2' }
        }
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        blink: 'blink 4s linear infinite'
      },
      backgroundImage: {
        'hero-gradient':
          'radial-gradient(40% 60% at 10% 10%, rgba(16,185,129,.14), transparent 60%), radial-gradient(40% 60% at 90% 20%, rgba(244,114,182,.10), transparent 60%), radial-gradient(60% 60% at 50% 90%, rgba(14,165,233,.08), transparent 60%)'
      }
    },
  },
  plugins: [],
};
