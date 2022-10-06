module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui:{
    themes: [
      {
        mytheme: {
          primary: "#fac65f",
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "white",
          "base-100": "#ffffff",
        },
      },
    
    ],
  },
}
