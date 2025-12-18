import flowbite from 'flowbite-react/tailwind';
import type { Config } from 'tailwindcss';
import flowbiteReact from 'flowbite-react/plugin/tailwindcss';

/** @type {import('tailwindcss').Config} */

const config: Config = {
  darkMode: 'selector',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/flowbite-react/lib/esm/**/*.js'
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
  plugins: [flowbite, flowbiteReact]
};

export default config;
