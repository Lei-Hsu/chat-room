module.exports = {
  mode: 'jit',
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        '70p': '70%',
      },
      zIndex: {
        '999': '999',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    'tailwindcss',
    'postcss-preset-env',
  ],
};
