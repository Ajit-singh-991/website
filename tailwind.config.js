module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          500: "#a6a6a6",
          600: "#6f6f6f",
          800: "#3a3a3a",
          900: "#202020",
          "600_02": "#7e7e7e",
          "600_01": "#707070",
        },
        white: {
          A700_99: "#ffffff99",
          A700_66: "#ffffff66",
          A700_7e: "#ffffff7e",
          A700: "#ffffff",
        },
        black: { 900: "#000000", "900_33": "#00000033" },
      },
      boxShadow: { bs: "0px 4px  12px -1px #000000" },
      fontFamily: {
        inter: "Inter",
        daysone: "Days One",
        roboto: "Roboto",
        permanentmarker: "Permanent Marker",
        caveat: "Caveat",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
