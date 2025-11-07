/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,md,mdx}', // 👈 Incluye tus plantillas
    ],
    theme: {
        extend: {
            colors: {
                coral: '#E87C73',
                mint: '#B7E4C7',
                beige: '#FFF5EB',
                neutral: '#F5F5F5',
            },
            fontFamily: {
                sans: ['Nunito', 'sans-serif'],
            },
            boxShadow: {
                soft: '0 4px 15px rgba(0, 0, 0, 0.05)',
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
}
