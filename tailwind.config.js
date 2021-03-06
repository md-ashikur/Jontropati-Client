module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  themes: [
    {
      mytheme: {
        primary: "#a991f7",
        secondary: "#f6d860",
        accent: "#37cdbe",
        neutral: "white",
        "base-100": "#ffffff",
      },
    },
    "dark",
    "cupcake",
  ],

  plugins: [require("daisyui")],
}
