/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      colors: {
        black: "#090909",
        darker: "#52595D",
        white: "#FEFCFF",
        purlpe: "#976bed",
        darkPurple: "#730080",
      },
    },
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
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
