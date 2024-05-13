/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      fontFamily: {
        "body": ["Inter", "sans-serif"],
        "display": ["Playfair Display", "serif"]
      }
    }
  },
  plugins: []
};
