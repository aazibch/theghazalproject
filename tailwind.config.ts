import flowbite from 'flowbite-react/tailwind';
import type { Config } from 'tailwindcss';

/** @type {import('tailwindcss').Config} */

const config: Config = {
  darkMode: 'selector',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    flowbite.content()
  ],
  theme: {
    container: {
      padding: '1rem'
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        crimson_text: ['var(--font-crimson_text)'],
        merriweather: ['var(--font-merriweather)']
      },
      colors: {
        primary_blue: '#0F52BA'
      }
    }
  },
  plugins: [flowbite.plugin()]
};

export default config;
