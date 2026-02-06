import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          400: '#E5C558',
          500: '#D4AF37', // Classic Gold
          600: '#AA8C2C',
        },
        navy: {
          800: '#0A192F', // Deep Royal Navy
          900: '#050D18',
        },
        marble: '#F9F9F9',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      backgroundImage: {
        'luxury-gradient': 'linear-gradient(to right bottom, #0A192F, #050D18)',
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #E5C558 50%, #AA8C2C 100%)',
      }
    },
  },
  plugins: [],
};
export default config;