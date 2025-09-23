/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neutreal900: "#02012C",
        neutreal800: "#262540",
        neutreal700: "#302f4a ",
        neutreal600: "#3c3b5e",
        neutreal300: "#acacb7 ",
        neutreal200: "#d4d3d9",
        neutreal0:   "#ffffff",
        orange500:   "#ff820a",
        blue500:   "#4658d9",
        blue700 :   "#2b1b9c",
      },
       fontFamily: {
        textPreset1: ["var(--font-dm-sans)", "semibold italic"], // default
        bricolage: ["var(--font-bricolage)", "sans-serif"], // secundaria
      },
    },
  },
  plugins: [],
};
