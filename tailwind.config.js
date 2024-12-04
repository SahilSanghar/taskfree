/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./Layout/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)', // #00000040 is equivalent to rgba(0, 0, 0, 0.25)
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#0A3981",
        secondary: "#E38E49",
      },
    },
  },
  plugins: [],
};
