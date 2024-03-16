/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('/images/banner.jpg')",
        contact: "url('/images/contact.jpg')",
      },
      colors: {
        "vivid-orange": "#FFA633",
        "base-color": "#201F1D",
        "bg-grey": "#f2f2f2",
      },
    },
  },
  plugins: [],
};
