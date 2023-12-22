module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // or 'media' or false
  theme: {
    extend: {
      colors: {
        primary: "#02897A",
        text: "#22343D",
      },
      backgroundImage: {},
      boxShadow:{
          "borderShadow" : "0px 2px 8px rgba(0, 0, 0, 0.25)"
      }
    },
  },
  plugins: [  ],
};
