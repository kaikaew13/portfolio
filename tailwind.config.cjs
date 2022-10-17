/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'san-serif'],
      },
      colors: {
        primary: '#212529',
        secondary: '#FFFFFF',
        secondary_d: '#CCCCCC',
      },
      keyframes: {
        animateFadeIn: {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        },
      },
      animation: {
        'fade-in': 'animateFadeIn 2s forwards',
      },
    },
    screens: {
      xs: '480px',
      ss: '620px',
      sm: '768px',
      md: '1060px',
      lg: '1200px',
      xl: '1700px',
    },
  },
  plugins: [require('tailwindcss-animation-delay')],
};
