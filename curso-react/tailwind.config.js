module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: "#ffffff",
      black: "#000000",
      main_blue: "#001E6C",
      second_blue: "#035397",
      third_blue: "#5089C6",
      yellow: "#FFAA4C",
      red: "#B61919",
      transparent: "transparent"
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
};
