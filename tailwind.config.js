/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [],
  theme: {
    extend: {
      colors: {
        gradient1: "#ff5f6d",
        gradient2: "#ffc371",
        card: "#1C1C1E",
      },
      fontSize: {
        header: [
          "clamp(1.25rem, 4vw+1rem, 1.5rem)",
          {
            lineHeight: "2rem",
            letterSpacing: "-0.02em",
            fontWeight: "600",
          },
        ],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
