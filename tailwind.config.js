/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,tx,jsx,html}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
}
