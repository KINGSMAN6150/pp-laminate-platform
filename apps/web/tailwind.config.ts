import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fdf8f4',
          100: '#faeee2',
          200: '#f4dbc3',
          300: '#ecc09a',
          400: '#e19d6d',
          500: '#d77f44',
          600: '#cb6838',
          700: '#a9502f',
          800: '#87412c',
          900: '#6d3626',
        },
      },
    },
  },
  plugins: [],
};

export default config;
