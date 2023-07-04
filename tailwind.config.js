/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      colors: {
        black: "#1B1D24",
        darker: "#52595D",
        white: "#FEFCFF",
        purlpe: "#976bed",
        darkPurple: "#730080",
        red: "#ed493d",
        greyLight: "#d7d7d7",
        pink: "#9D0B51",
        darkPink: "#5A0834",
        lightPink: "#E44EC3",
        inputField: "#f7f7f7",
      },
    },
    extend: {
      animation: {
        headerAnimation: "slideDown 0.7s ease-in-out",
        arrowDisapear: "disapear 1s ease-in forwards",
        arrowAppear: "appear 2s ease-in-out",
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },

        disapear: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        appear: {
          "0%": { opacity: 0 },
          "70%": { opacity: 1, transform: "translateY(-20%)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      boxShadow: {
        container: "0 10px 15px rgba(0, 0, 0, 0.3)",
        img: "2px 10px 14px 0px rgba(38,37,37,0.75)",
      },
      scale: {
        40: "0.4",
        200: "2",
        103: "1.03",
      },
    },
  },
  plugins: [],
};
