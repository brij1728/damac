import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        oswald: ['var(--font-oswald)', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
      colors: {
        primary: {
          100: '#17ABFF',
          200: '#00357B',
          300: '#004572',
          400: '#5790BE',
          500: '#98C5E8',
        },
        secondary: {
          100: '#E7EBEF',
          200: '#F5F5F5',
          300: '#FCFCFC',
          400: '#F4F9FF',
        },
      },
    },
  },
  plugins: [],
};

export default config;
