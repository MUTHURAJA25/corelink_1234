/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: { 
        primary: "#6A44F2",
        "primary-dark": "#6A44F2",

        background: "#050A18",
        surface: "#0B1225",

        heading: "#FFFFFF",
        body: "#ffff",
        muted: "#9CA3AF",

        border: "rgba(255, 255, 255, 0.1)",
      },

      borderRadius: {
        card: "24px",
        button: "9999px",
      },
          fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },

  plugins: [],
};