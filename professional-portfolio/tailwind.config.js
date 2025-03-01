/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(var(--color-primary)/1)",
        secondary: "hsl(var(--color-secondary)/1)",
        accent: "hsl(var(--color-accent)/1)",
        text: "hsl(var(--color-text)/1)",
      },
    },
  },
  plugins: [],
};
