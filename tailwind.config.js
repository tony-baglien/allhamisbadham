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
                "dm-blue-light": "#5A345A",
                "dm-blue-powder": "#482B6C",
                "dm-blue-gray": "#2F1E61",
                "dm-green-light": "#1B1C2B",
                "dm-green-dark": "#091313",
            },
            animation: {
                "spin-slow": "spin 60s linear infinite",
            },
        },
        plugins: [],
    },
    darkMode: "class",
};
