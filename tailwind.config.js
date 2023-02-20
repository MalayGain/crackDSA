/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {

      keyframes: {
        typing: {
          "0%": {
            width: 0,
          },
          "100%": {
            width: 400,
          }
        },
        // wiggle: {
        //   "0%, 100%": { transform: "rotate(-3deg)" },
        //   "50%": { transform: "rotate(3deg)" },
        // },
      },

      animation: {
        typing: "typing 3s steps(20, end) infinite",//"typing 5s ease-in-out infinite",
        // wiggle: 'wiggle 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
