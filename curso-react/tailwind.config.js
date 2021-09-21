module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gold: "#c39967",
      red: "#FF4848",
      yellow: "#FFD371",
      light_green: "#C2FFD9",
      main_green: "#9DDAC6",
      black: "#000000",
      white: "#ffffff"
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
};
