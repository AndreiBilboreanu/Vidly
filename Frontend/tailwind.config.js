/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/modules/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/design/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        xxs: "5px",
        xs: "10px",
        sm: "16px",
        md: "20px",
        lg: "24px",
        xl: "30px",
        "2xl": "40px",
        "3xl": "60px",
        "4xl": "70px",
      },
      colors: {
        black: {
          DEFAULT: "#000000",
          light: "#141414",
          lighter: "#242424",
        },
        white: {
          DEFAULT: "#FFFFFF",
        },
        grey: {
          darker: "#595959",
          dark: "#B3B3B3",
          DEFAULT: "#F5F5F5",
          light: "#C7C7C7",
          lighter: "#E5E5E5",
          transparent: "#6D6D6E66",
        },
        blue: {
          DEFAULT: "#54B9C5",
        },
        red: {
          DEFAULT: "#E30E16",
        },
        green: {
          DEFAULT: "#46D369",
        },
      },
      fontFamily: {
        "sans-serif": ["Mark Pro, Mark Pro Fallback, sans-serif"],
      },
      fontSize: {
        xxs: "0.625rem",
        sm: "0.75rem",
        md: "0.875rem",
        lg: "1.375rem",
        xl: "2rem",
      },
      fontWeight: {
        medium: "500",
        semibold: "600",
        bold: "700",
        black: "900",
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
