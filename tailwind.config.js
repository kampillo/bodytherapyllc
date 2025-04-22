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
            DEFAULT: '#3D7B80',
            50: '#F2F7F7',
            100: '#E5F0F0',
            200: '#CCE0E1',
            300: '#B2D1D2',
            400: '#99C1C3',
            500: '#7FB2B4',
            600: '#66A2A5',
            700: '#4C9396',
            800: '#3D7B80',
            900: '#2D5D61',
          },
          secondary: {
            DEFAULT: '#EAAC8B',
            50: '#FDF8F5',
            100: '#FBF1EA',
            200: '#F7E3D4',
            300: '#F3D5BF',
            400: '#EFC7AA',
            500: '#EAAC8B',
            600: '#E39169',
            700: '#DB7647',
            800: '#C05C2E',
            900: '#964625',
          },
          light: '#F9F9FB',
          dark: '#2D3142',
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