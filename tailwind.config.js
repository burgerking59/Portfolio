/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontSize: {
        'title': '200%',
        'heading': '150%',
        'base': '100%'
      }
    },
    colors: {
      'black': '#303745',
      'gradBottom': '#4C5260',
      'gradTop': '#1D2634',
      'white': '#DDD8C4',
      'whiteBg': '#E5E5E5',
      'yellow': '#CCA43B',
      'text': '#242F40',
      'buttonBorder': '#343940'
    },
  },
  plugins: [],
}
