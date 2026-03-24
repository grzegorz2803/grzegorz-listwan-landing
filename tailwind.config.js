/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          cyan: "#06b6d4",
          dark: "#0a0a0a",
        },
      },
    },
  },
  plugins: [],
};
