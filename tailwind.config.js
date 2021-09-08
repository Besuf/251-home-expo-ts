/* eslint-disable @typescript-eslint/no-var-requires */
module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        base: ["1rem", "1.5rem"],
        lg: ["1.125rem", "1.5rem"],
        xl: ["1.25rem", "1.75rem"],
      },
      colors: {
        primary: "#FEE715",
        textPrimary: "#101820",
      },
      fontFamily: {
        sans: ["Prociono", "serif"],
      },
      maxWidth: {
        xxs: "20vw",
      },
    },
  },
  variants: {
    extend: {
      fontWeight: ["hover", "focus"],

      scrollbar: ["rounded"],
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
    require("@tailwindcss/aspect-ratio"),
    require("tailwind-scrollbar"),
    require("@tailwindcss/line-clamp"),
  ],
};
