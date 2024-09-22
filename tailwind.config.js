/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                lightCyan: '#B3E5E6',
                teal: '#629B9C',
                pink: '#F4BED1',
                magenta: '#B370A0',
                paleYellow: '#FFF1A8',
                bronze: '#BF8C26',
                peach: '#FEBE9C',
                orange: '#ED6A37',
                deepPurple: '#3E2E5F',
                lavender: '#CBAAD6',
                darkGray: '#333333',
            },
        },
        fontSize: {
            xs: '0.75rem', // 12px
            sm: '0.875rem', // 14px
            base: '1rem', // 16px
            lg: '1.125rem', // 18px
            xl: '1.25rem', // 20px
            '2xl': '1.5rem', // 24px
            '3xl': '1.875rem', // 30px
            '4xl': '2.25rem', // 36px
            '5xl': '3rem', // 48px
            '6xl': '4rem', // 64px
        },
        fontFamily: {
            sans: ['Quicksand', 'sans-serif'],
        },
    },
    plugins: [],
};
