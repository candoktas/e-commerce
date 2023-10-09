/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    fontFamily: {
      "sans": ["Inter", "sans-serif"],
    },
    extend: {
      maxWidth: {
        "6xl": "73.125rem",
      },
      borderRadius: {
        "4xl": "1.875rem",
      },
      fontSize: {
        "3xl": "28px",
        "5xl": "44px",
      },
      padding: {
        "7.5": "1.875rem",
        "0.75": "0.1875rem",
        "3.75": "0.9375rem",
      },
      colors: {
        "primary": {
          DEFAULT: "#3056D3"
        },
        "secondary": {
          DEFAULT: "#13C296"
        },
        "dark": {
          DEFAULT: "#090E34"
        },
        "light": {
          DEFAULT: "#637381"
        },
        "black": {
          DEFAULT: "#212B36"
        }
      }
    },
  },
  plugins: [],
}

