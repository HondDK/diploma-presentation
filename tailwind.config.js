/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fadeIn': 'fadeIn 0.6s ease-out forwards',
        'slideUp': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          'from': {
            opacity: '0',
            transform: 'scale(0.9)'
          },
          'to': {
            opacity: '1',
            transform: 'scale(1)'
          }
        },
        slideUp: {
          'from': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        }
      },
      animationDelay: {
        '200': '200ms',
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      }
    },
  },
  plugins: [],
}