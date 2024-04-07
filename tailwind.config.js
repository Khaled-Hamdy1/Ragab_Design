/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        slider1: "url('@/assets/Memnon-Reisen-Hurghada-slider-1.jpg')",
        slider2: "url('@/assets/Memnon-Reisen-Hurghada-slider-2.jpg')",
        slider3: "url('@/assets/Tour-to-Cairo-11.jpg')",
        card1: "url('@/assets/0b.jpg')",
        card2: "url('@/assets/Culture-excursions.jpg')",
        card3: "url('@/assets/snorkling.jpg')",
        discover1: "url('@/assets/kair-egipet.jpg')",
        discover2: "url('@/assets/egipet_kruiz3.jpg')",
        discover3: "url('@/assets/st-paul.jpg')",
        discover4: "url('@/assets/abu-simbel-rock-nubia-egypt-ancient.jpg')",
      },
      boxShadow: {
        list: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
        card: "5px 5px 10px 0 rgba(0, 0, 0, 0.4)",
      },
      animation: {
        "beat": "beat 1s linear infinite",
      },
      keyframes: {
        beat: {
          "0%, 100%": { transform: "scale(1.0)" },
          "50%": { transform: "scale(0.7)" },
        },
      },
    },
    fontFamily: {
      list: ["Roboto", "sans-serif"],
      siteName: ["Merienda One", "sans-serif"],
    },
  },
  plugins: [],
};
