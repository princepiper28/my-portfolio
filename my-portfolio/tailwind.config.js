/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF6600",
        gold: "#FFD700",
        dark: "#0A0A0A",
        grayDark: "#1A1A1A",
        light: "#F2F2F2",
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(to right, #0A0A0A, #1A1A1A, #FF6600)",
        "section-gradient": "linear-gradient(180deg, #111111 0%, #0A0A0A 100%)",
      },
    },
  },
  plugins: [],
};
