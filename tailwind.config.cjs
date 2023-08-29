module.exports = {
    content: ['./src/**/*/*.{astro,html,js,jsx,tsx,vue}'],
    theme: {
        extends: {

        }
    },
    plugins: [require('@tailwindcss/line-clamp')]
}