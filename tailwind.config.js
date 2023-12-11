/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        fraunces: ["Fraunces", "serif"],
      },
      colors: {
        "soft-red": "hsl(6, 99%, 72%)",
        yellow: "hsl(50, 100%, 50%)",
        cyan: "hsl(200, 100%, 62%)",
        "soft-cyan": "hsl(196, 100%, 66%)",
        "dark-desaturated-cyan": "hsl(167, 40%, 24%)",
        "dark-blue": "hsl(198, 62%, 26%)",
        "dark-moderate-cyan": "hsl(168, 34%, 41%)",
        "dark-cyan": "hsl(165, 46%, 73%)",
        "very-dark-desaturated-blue": "hsl(212, 27%, 19%)",
        "very-dark-grayish-blue": "hsl(213, 9%, 39%)",
        "dark-grayish-blue": "hsl(232, 10%, 55%)",
        "grayish-blue": "hsl(210, 4%, 67%)",
        "soft-white": "hsl(26, 100%, 99%)",
        white: "hsl(0, 0%, 100%)",
      },
      gridTemplateRows: {
        // "6-1fr-auto": "minmax(1fr, auto) minmax(1fr, auto) 1fr 1fr 1fr 1fr",
        "6-1fr-auto": "repeat(6, minmax(1fr, auto))",
      },
    },
  },
  plugins: [],
};
