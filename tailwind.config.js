/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0)' },
          '10%': { transform: 'translateX(0)' },
          '11%': { transform: 'translateX(-100%)' },
          '21%': { transform: 'translateX(-100%)' },
          '22%': { transform: 'translateX(-200%)' },
          '32%': { transform: 'translateX(-200%)' },
          '33%': { transform: 'translateX(-300%)' },
          '43%': { transform: 'translateX(-300%)' },
          '44%': { transform: 'translateX(-400%)' },
          '54%': { transform: 'translateX(-400%)' },
          '55%': { transform: 'translateX(-500%)' },
          '65%': { transform: 'translateX(-500%)' },
          '66%': { transform: 'translateX(-600%)' },
          '76%': { transform: 'translateX(-600%)' },
          '77%': { transform: 'translateX(-700%)' },
          '87%': { transform: 'translateX(-700%)' },
          '88%': { transform: 'translateX(-800%)' },
          '100%': { transform: 'translateX(-800%)' }
        }
      },
      animation: {
        slide: 'slide 20s infinite'
      }
    }
  },
  plugins: []
};
