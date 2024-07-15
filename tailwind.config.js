/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        headerColor: "#4d4dff",
        background: "rgba(0, 0, 0, 0.2)",
        footer: "#141414",
      },
      translate: {
        "-1/2": "-50%",
      },
      transitionDuration: {
        350: "350ms",
      },
      minWidth: {
        "100vw": "100vw",
      },
      lineHeight: {
        "64px": "64px",
      },
    },
  },
  plugins: [],
};
