module.exports = {
    content: [
      "./src/app/**/*.{js,jsx}",
      "./src/components/**/*.{js,jsx}",
      "./src/posts/**/*.{md,mdx}"
    ],
    theme: {
      extend: {
        colors: {
          primary: "#b08968"
        },
        fontFamily: {
          sans: ["Inter", "sans-serif"]
        }
      },
    },
    plugins: [require("@tailwindcss/typography")],
  };
  