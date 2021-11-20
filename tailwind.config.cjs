const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}'],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '321px',
      ...defaultTheme.screens,
    },
    container: {
      center: true,
    },
    fontWeight: {
      // normal: 200,
      // semibold: 200,
      // bold: 200,
    },
    fontFamily: {
      sans: [
        '"Roboto Mono"',
        'monospace',
        "system-ui",
        "-apple-system",
        '"Segoe UI"',
        "Roboto",
        "Helvetica",
        "Arial",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
      ],
      display: [
        '"Roboto Mono"',
        'monospace',
        "system-ui",
        "-apple-system",
        '"Segoe UI"',
        "Roboto",
        "Helvetica",
        "Arial",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
      ],
      body: [
        '"Roboto Mono"',
        'monospace',
        "system-ui",
        "-apple-system",
        '"Segoe UI"',
        "Roboto",
        "Helvetica",
        "Arial",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
      ],
    },
    extend: {
      colors: {
        'ungu': {
          DEFAULT: '#7862FF'
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
