/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			sans: ['Josefin Sans'],
		},
		extend: {
			backgroundImage: {
				'desktop-dark': "url('/src/assets/images/bg-desktop-dark.jpg')",
				'desktop-light': "url('/src/assets/images/bg-desktop-light.jpg')",
				'mobile-dark': "url('/src/assets/images/bg-mobile-dark.jpg')",
				'mobile-dark': "url('/src/assets/images/bg-mobile-light.jpg')",
			},
		},
	},
	plugins: [],
};
