module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Add other paths if you have them
  ],
  theme: {
    extend: {
      fontFamily: {
        aurora: ["aurora", "sans-serif"],
        almarai: ["almarai", "sans-serif"],
      },
      colors: {
        accent: "#6448FF",
      },
    },
  },
  plugins: [],
};
