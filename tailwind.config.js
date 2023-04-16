/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.vue"],
  darkMode: "class",

  safelist: [
    {
      pattern:
        /text-(primary1|primary2|primary3|primary4|primary5|primary6|primary7)/,
      variants: ["hover", "group-hover"],
    },
    {
      pattern:
        /bg-(primary1|primary2|primary3|primary4|primary5|primary6|primary7|transparent|bgDark|bgRed|bgBlue)/,
      variants: ["hover", "group-hover"],
    },
    {
      pattern:
        /border-(primary1|primary2|primary3|primary4|primary5|primary6|primary7|white|ash)/,
      variants: ["hover", "group-hover"],
    },
    {
      pattern:
        /fill-(primary1|primary2|primary3|primary4|primary5|primary6|primary7|white|ash)/,
      variants: ["hover", "group-hover"],
    },
    {
      pattern:
        /stroke-(primary1|primary2|primary3|primary4|primary5|primary6|primary7|white|black|ash)/,
      variants: ["hover", "group-hover"],
    },
    {
      pattern:
        /ring-(primary1|primary2|primary3|primary4|primary5|primary6|primary7)/,
      variants: ["hover", "group-hover"],
    },
    {
      pattern:
        /scrollbar-(thumb|track)-(primary1|primary2|primary3|primary4|primary5|primary6|primary7|bgDark|bgRed|bgBlue)/,
      variants: ["hover", "group-hover"],
    },
  ],
  theme: {
    screens: {
      xs: "380px",
      // => @media (min-width: 380px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1330px",
      // => @media (min-width: 1330px) { ... }
      "3xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        black: "#000",
        bgRed: "#180507",
        bgDark: "#1E1E20",
        bgBlue: "#09173A",
        blue: "#1e3a8a",
        red: "#991b1b",
        white: "#fff",
        overlay: "#2B2B2B",
        ash: {
          100: "#999999",
          200: "#E9E9E9",
        },

        primary1: "#28E98C",
        primary2: "#E4AF12",
        primary3: "#FE6F1D",
        primary4: "#14C5FD",
        primary5: "#1338F3",
        primary6: "#F31313",
        primary7: "#FF99CC",
      },
      fontFamily: {
        body: ["Poppins"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar"), require("tailwind-clip-path")],
};
