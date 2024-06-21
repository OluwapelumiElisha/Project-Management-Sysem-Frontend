/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    extend: {
      boxShadow: {
        'red-xs': '0 10px 15px rgba(255, 0, 0, 0.5), 0 4px 6px rgba(255, 0, 0, 0.1)', // Customize as needed
      }
    },
    extend: {
      colors: {
          'pale-pink': '#fffcfc',
      },
  },
    
  },
  plugins: [require("tailwindcss-animate")],
}
// tailwind.config.js

