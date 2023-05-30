/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "blue-light": "#C5D1EB",
                "blue-powder": "#92AFD7",
                "blue-gray": "#5A7684",
                "green-light": "#395B50",
                "green-dark": "#1F2F16",
            },
        },
    },
    plugins: [],
};
