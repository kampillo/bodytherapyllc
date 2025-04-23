/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#889535',
          50: '#F7FAE9',
          100: '#EFF5D3',
          200: '#DFEBA7',
          300: '#CFE17C',
          400: '#BFD750',
          500: '#AFCD25',
          600: '#99B321',
          700: '#889535', // Color principal verde oliva
          800: '#6E782B',
          900: '#535A21',
        },
        secondary: {
          DEFAULT: '#74196E',
          50: '#F9EDF8',
          100: '#F3DBF1',
          200: '#E6B7E3',
          300: '#D994D5',
          400: '#CC70C6',
          500: '#BF4DB8',
          600: '#A32D99',
          700: '#88227F',
          800: '#74196E', // Color secundario púrpura
          900: '#5B135D',
        },
        light: '#FFFFFF',
        dark: '#333333',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: ['var(--font-playfair)', 'ui-serif', 'Georgia', 'serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
        'hover': '0 10px 40px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}