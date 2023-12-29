/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "*",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        Primary:"#1597E4",
        Error : "#D86161",
        Placeholder: "#7A7A7A",
        Dark : "#212121",
        White : "#FAFAFA",
        CardBorder: "#E6E6E6",
        CardColor: "#FFFFFF"
      },
      fontFamily: {
        'poppins': ['Poppins'],
     }
    },
  },
  plugins: [],
}
