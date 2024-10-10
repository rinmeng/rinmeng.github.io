/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.glass-amber': {
          '@apply bg-amber-800  backdrop-filter backdrop-blur-lg shadow-lg bg-opacity-50': {},
        },
        '.glass-slate': {
          '@apply bg-slate-800 backdrop-filter backdrop-blur-lg shadow-lg bg-opacity-50': {},
        },
        '.mp5': {
          '@apply m-5 p-5': {},
        },
        '.t200e': {
          '@apply transition-all duration-200 ease-in-out': {},
        }
      });
    }
  ],
}