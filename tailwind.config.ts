import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f1f5ff',
          100: '#e3ebff',
          200: '#c2d1ff',
          300: '#99b3ff',
          400: '#6f93ff',
          500: '#4b75ff',
          600: '#335bef',
          700: '#2748c4',
          800: '#203c9b',
          900: '#1d377c'
        }
      }
    }
  },
  plugins: []
}

export default config
