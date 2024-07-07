/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
module.exports = {
  content: ["./src/**/*.{html,js}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors:{
       blue:"3DC2EC" ,
       grey:"EEEEEE"
      }
    },
  },
  darkMode: 'class',// Used to enable dark mode
  plugins: [flowbite.plugin()],
}