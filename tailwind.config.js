/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "main-color": "rgb(56, 221, 221)",
        "second-color": "#2c4755",
        "third-color": "#f6f6f6",
        "paragraph-color": "#777",
        "main-title": "#ebeced",
        "main-paragraph": "#797979"
      },
      backgroundImage: {
        "landing": 'url("imgs/mountain-8496397_1920.jpg")'
      },
      boxShadow: {
        "main-shaddow": "0 2px 10px 1px #ddd",
        "effect-shaddow": "0 2px 10px 5px #ddd"
      }
    },
  },
  plugins: [],
}

