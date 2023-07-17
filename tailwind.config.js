/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        creme: {
          50: '#f8ecde',
          100: '#dfd4c7',
          200: '#c6bcb1',
          300: '#ada59b',
          400: '#948d85',
          500: '#7c766f',
          600: '#635e58',
          700: '#4a4642',
          800: '#312f2c',
          900: '#181716'
        }
      }
    }
  },
  plugins: []
};
