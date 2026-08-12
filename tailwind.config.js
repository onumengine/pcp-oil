/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cyan: {
          DEFAULT: '#00FFFF',
          50: '#E0FFFF',
          100: '#B3FFFF',
          200: '#80FFFF',
          300: '#4DFFFF',
          400: '#1AFFFF',
          500: '#00FFFF',
          600: '#00D9D9',
          700: '#00B3B3',
          800: '#008C8C',
          900: '#006666',
        },
        ink: {
          950: '#0A0F14',
          900: '#0F1620',
          850: '#141D28',
          800: '#1A2533',
          700: '#243140',
          600: '#2E3D50',
          500: '#3A4A5E',
          400: '#5A6B7E',
          300: '#7A8A9C',
          200: '#A8B5C4',
          100: '#D0D8E0',
        },
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.7s ease-out forwards',
        'slow-zoom': 'slowZoom 20s ease-out infinite alternate',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
      },
    },
  },
  plugins: [],
};
