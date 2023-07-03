/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        B50: '#F8F8FF',
        B100: '#F3F3FF',
        B200: '#ECECFF',
        B300: '#DFDEFD',
        B400: '#BCBCD9',
        B500: '#9D9DB9',
        B600: '#73748F',
        B700: '#5F607A',
        B900: '#1E2036',
        PURPLE: '#8E48FF',
        PINK: '#FF2897',
        LIGHT_PINK: 'rgba(255, 40, 151, 0.10)',
        GREEN: '#35CB00',
        LIGHT_GREEN: 'rgba(113, 255, 64, 0.25)',
        ORANGE: '#FFB341',
        LIGHT_ORANGE: 'rgba(255, 179, 65, 0.10)',
        GRAY: '#F8F8F8',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
