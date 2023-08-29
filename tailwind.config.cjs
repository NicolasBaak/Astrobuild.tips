module.exports = {
    content: ['./src/**/*/*.{astro,html,js,jsx,tsx}'],
    theme: {
        extends: {

        }
    },
    plugins: [require('@tailwindcss/line-clamp')]
}