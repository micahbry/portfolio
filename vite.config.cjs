const { defineConfig } = require('vite');
const reactRefresh = require('@vitejs/plugin-react-refresh');

module.exports = defineConfig({
  plugins: [reactRefresh()],
  css: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
});
