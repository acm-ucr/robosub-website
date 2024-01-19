/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        robosub: {
          yellow: "#FFB400",
          "light-yellow": "#FFD43B",
          orange: "#845C1F",
          blue: "#2E6CC1",
          "light-blue": "#E2EEFF",
          "light-gray": "#E7E7E7",
          "dark-gray": "#494949",
          black: "#191919",
        },
      },
    },
  },
  plugins: [],
};
