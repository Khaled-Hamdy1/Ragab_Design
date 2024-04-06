/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        slider1: "url('@/assets/Memnon-Reisen-Hurghada-slider-1.jpg')",
        slider2: "url('@/assets/Memnon-Reisen-Hurghada-slider-2.jpg')",
        slider3: "url('@/assets/Tour-to-Cairo-11.jpg')",
      },
      boxShadow: {
        list: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
      },
    },
    fontFamily: {
      list: ["Roboto", "sans-serif"],
      siteName: ["Merienda One","sans-serif"],
    },
  },
  plugins: [],
};
