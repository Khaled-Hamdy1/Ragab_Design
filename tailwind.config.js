/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "login-pattern": "url('./src/assets/login-background3.jpg')",
      },
      container: {
        center: true,
        padding: "2rem",
      },
      height: {
        display: "calc(100vh - 5rem)", // 5rem is the height of the navbar(4rem) + gap (1rem)
      },
    },
  },
  plugins: [],
};