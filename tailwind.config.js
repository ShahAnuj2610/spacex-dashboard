const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    theme: {
        extend: {
            height: {
                "100": "25rem",
            },
        },
        colors: {
            ...defaultTheme.colors,
            primary: "#ffffff",
            dark: "#0e0e10",
            darkFont: "rgb(239, 239, 241)",
        },
    },
    variants: {},
    plugins: [],
};
