module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        blue: { 5: "#4A7DFF", 10: "#3460D1" },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
