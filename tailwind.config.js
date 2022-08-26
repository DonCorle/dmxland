const defaultTheme = require('tailwindcss/defaultConfig');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  important: true,
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    ...defaultTheme,
    colors: {
      ...defaultTheme.colors,
      primary: '#3B81F6',
      white: '#ffffff',
      text: {
        DEFAULT: '#1F2937',
        light: '#6C7281',
      },
      light: {
        DEFAULT: '#FAFBFC',
        lighter: '#F3F4F6',
      },
    },
    extend: {
      colors: {
        primary: {
          100: '#E6F6FE',
          200: '#C0EAFC',
          300: '#9ADDFB',
          400: '#4FC3F7',
          500: '#03A9F4',
          600: '#0398DC',
          700: '#026592',
          800: '#014C6E',
          900: '#013349',
          950: '#2e71ba',
        },
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
      },
      lineHeight: {
        hero: '4.5rem',
      },
      logo: { 100: '#2e71ba' },
    },
  },
  variants: {},
  plugins: [],
};
