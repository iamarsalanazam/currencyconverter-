/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: [
    "./index.html",
    // "./src/components/*.{ts,tsx}",
    // "./src/auth/**/*.{ts,tsx}",
    // "./src/app/**/*.{ts,tsx}",
    // "./pages/**/*.{html,tsx}",
    "./src/**/**/*.{js,jsx}",
    // "./components/**/*.{html,tsx}",
  ],
  theme: {
    extend: {
      height: {
        700: "700px",
        600: "600px",
        500: "500px",
        400: "400px",
      },
      backgroundImage: () => ({
        // hero: "url('/assets/Services.gif')",
        heroHome: "url('src/assets/backgroundImage.png')",
      }),
    },
  },
  plugins: [],
};
