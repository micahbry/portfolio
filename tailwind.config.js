const bgPatternsPlugin = require('tailwindcss-bg-patterns');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'grid-sm': 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'4\' height=\'4\' viewBox=\'0 0 4 4\'%3E%3Cpath fill=\'%23ffffff33\' d=\'M1 3h1v1H1V3zm2-2h1v1H3V1zm-2 2h1v1H1V3zm2-2h1v1H3V1z\'/%3E%3C/svg%3E")',
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    bgPatternsPlugin,
  ],
};
