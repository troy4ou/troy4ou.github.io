/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        chicago: {
          50: "#f6f5f5",
          100: "#e7e6e6",
          200: "#d1d0d0",
          300: "#b1b0af",
          400: "#898887",
          500: "#6e6d6c",
          600: "#5f5e5d",
          700: "#50504e",
          800: "#1F1F23",
          900: "#18181B",
          950: "#262626",
        },
      },
    },
  },
  plugins: [],
};
