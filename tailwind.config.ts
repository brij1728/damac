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
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          100: '#17ABFF',
          200: '#00357B',
          300: '#004572',
        },

        secondary: {
          100: '#E7EBEF',
          200: '#F5F5F5',
          300: '#FCFCFC',
        },
      },
    },
  },
  plugins: [],
};
export default config;
