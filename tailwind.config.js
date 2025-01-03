/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px",
        screens: {
          'sm': "640px",
          'md': "768px",
          'lg': "1024px",
          'xl': "1240px",
        }
      },
      fontSize: {
        'custom-xl': "11px",
      },
      lineHeight: {
        'custom-xl': "21px",
        'custom-2xl': "30px",
        'custom-3xl': "44px",
      },
      colors: {
        'sky-blue': "#F5F9FC",
        'z-black': "#222222",
        'gray': "#737376",
        'light-gray': "#d4d4d4",
        'blue': "#007AFF",
        'light-blue': "#D1E0E9",
      },
      boxShadow: {
      },
      backgroundImage: {
      },
      fontFamily: {
        'open-sans': "'open sans', sans-serif",
      }
    },
  },
  plugins: [],
}

