/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        zing: ["Zing Rust", "sans-serif"],
        cairo: ["Cairo", "sans-serif"],
      },
    },
  },
  plugins: [],
};
