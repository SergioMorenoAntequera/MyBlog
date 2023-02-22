/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				serif: ['Karma', 'serif'],
			},
		  
			fontSize: {
				sm: '18px'
			},
		},
	},
	plugins: [
		require('@tailwindcss/line-clamp'),
	],
}
