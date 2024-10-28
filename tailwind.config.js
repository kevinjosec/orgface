/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        loginBrown: "#632407",
        input: "#EEEEEE",
      },
      fontFamily: {
        outfit: ['Outfit'],
        roboto: ['Roboto'],
      }
    },
  },
  plugins: [],
};
