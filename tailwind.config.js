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
          primary: "#37cdbe",
          secondary: "#ff6731",
          accent: "#37cdbe",
          neutral: "white",
          "base-100": "#ffffff",
        },
      },
    
    ],
  },
}
