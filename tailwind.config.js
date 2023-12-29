/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultConfig");
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            ...defaultTheme,
            transitionProperty: {
                "burger-1": "height, width, opacity",
                height: "height, width",
                spacing: "margin, padding",
            },
            boxShadow: {
                full: "  box-shadow: 0 0 0 100vw #FFF, 0 0 0 100vh #FFF",
            },
            colors: {
                ...defaultTheme.colors,
                main: "#FFFFFF",
                blue: "#3B61B9",
                mainText: "#FFFFFF",
                red: "#be123c",
                aqua: "#23D5AE",
            },
            screens: {
                ...defaultTheme.screens,
                minSm: "560px",
                minmin: "420px",
                md: "760px",
                laptop: "1024px",
            },
            backgroundImages: {
                mainPoster: "url('/src/assets/img/poster.webp)",
                bgTranding: "url('/src/assets/img/bg-tranding.svg)",
            },
            keyframes: {
                fadeIn: {
                    from: { opacity: "0" },
                    to: { opacity: "1" },
                },
            },
            animation: {
                fadeIn: "fadeIn 1.5s ease-in-out forwards",
                fadeInDropMenu: "fadeIn 2.3s ease-in-out forwards",
            },
        },
    },
    plugins: [],
};
