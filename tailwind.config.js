const { tailwindExtractor } = require('tailwindcss/lib/lib/purgeUnusedStyles');

const svelteClassColonExtractor = content => {
  return content.match(/(?<=class:)([a-zA-Z0-9_-]+)/gm) || [];
};

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  plugins: [],
  purge: {
    content: ["./src/**/*.svelte"],
    enabled: process.env.NODE_ENV === 'production',
    content: ['./src/**/*.svelte', './src/**/*.html', './src/**/*.css', './index.html'],
    preserveHtmlElements: true,
    options: {
      safelist: [/svelte-/],
      defaultExtractor: content => {
        return [...tailwindExtractor(content), ...svelteClassColonExtractor(content)];
      },
      keyframes: true,
    },
  },
  theme: {
    extend: {},
  },
  variants: {},
};