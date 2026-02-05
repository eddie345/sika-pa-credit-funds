/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#0f172a',
                    foreground: '#f8fafc',
                },
                secondary: {
                    DEFAULT: '#10b981',
                    foreground: '#f8fafc',
                },
            },
        },
    },
    plugins: [],
}
