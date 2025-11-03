/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#ffffff',
          dark: '#0a1220',
        },
        surface: {
          light: '#f5f7fb',
          dark: '#111b2e',
        },
        brand: {
          navy: '#001f3f',
          gold: '#d4af37',
          sky: '#4a7dff',
        },
        accent: {
          teal: '#4ad9d9',
          purple: '#5b4bff',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'Lato', 'ui-sans-serif', 'system-ui'],
        display: ['Poppins', 'ui-sans-serif', 'system-ui'],
        body: ['Lato', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(212, 175, 55, 0.25)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

