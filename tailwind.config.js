module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
  "./componennts/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      screens: {
        "3xl": "2000px",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
