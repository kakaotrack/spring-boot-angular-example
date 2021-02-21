module.exports = {
    purge: ['./src/**/*.{html,ts}'],
    darkMode: false, // or 'media' or 'class'
    theme: {

    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms'), require('@tailwindcss/typography')
    ],
};
