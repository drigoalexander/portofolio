/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        gradient1: "#ff5f6d",
        gradient2: "#ffc371",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
