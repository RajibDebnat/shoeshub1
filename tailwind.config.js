/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "19.5px"],
      lg: ["18px", "21.94px"],

      xl: ["20px", "24.38px"],
      "2xl": ["24px", "29.26px"],
      "3xl": ["28px", "50px"],
      "4xl": ["48px", "58px"],
      "8xl": ["96px", "106px"],
    },
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],

        poppins: ["Poppins", " sans-serif"],

        "roboto-mono": ["Roboto Mono", "monospace"],
      },
      colors: {
       "main-bg":"#0f172a",
       "para-color":"#e7e8ea",
        primary: "#ECEEFF",
        "view-section": "#c1c4de",
        "coral-red": "#FF6452",
        "light-coral-red": "#ffc1ba",
        "mid-coral": "#d61f17",
        dim: "#FF8E76",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "tant-coral-red": "#902519",
        "white-400": "rgba(255, 255, 255, 0.80)",
      },
      boxShadow: {
        "3xl": "0 10px 40px rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {
        hero: "url('assets/images/HeroBackground')",
        card: "url('assets/images/thumbnail-background.svg')",
      },
      screens: {
        wide: "1440px",
      },
    },
  },
  plugins: [],
};
