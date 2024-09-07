/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["*.html"],
	theme: {
		extend: {},
	},
	plugins: [],
}
// module.exports = {
// 	presets: [
// 		// Manage Tailwind Typography's configuration in a separate file.
// 		require('./tailwind-typography.config.js'),
// 	],
// 	content: ["./src/**/*.{html,js}"],
// 	theme: {
// 		screens: {
// 			xxs: '375px',
// 			xs: '468px',
// 			sm: '540px',
// 			md: '720px',
// 			lg: '960px',
// 			xl: '1140px',
// 			'2xl': '1280px',
// 			'3xl': '1550px',
// 		},
// 		container: {
// 			center: true,
// 			padding: {
// 				DEFAULT: '8px',
// 				xs: '8px',
// 				sm: '8px',
// 				md: '12px',
// 				lg: '20px',
// 			},
// 		},
// 		fontFamily: {
// 			'nts-somic-700': 'NTSomic-Bold',
// 			'nts-somic-600': 'NTSomic-Semibold',
// 			'nts-somic-500': 'NTSomic-Medium',
// 			'nts-somic-400': 'NTSomic-Regular',
// 			'roboto-700': 'Roboto-Bold',
// 			'roboto-400': 'Roboto',
// 		},
// 		extend: {
// 			colors: {
// 				primary: '#000000',
// 				accent: '#5E51F1',
// 				inverse: '#FFFFFF',
// 				secondary: '#4E4C64',
// 				surface: '#FAF9FE',
// 				other: '#C9C6FF',
// 			},
// 			height: {
// 				unset: 'unset',
// 			},
// 			fontSize: {},
// 			boxShadow: {
// 				review: '0px 4px 54px -10px rgba(201, 198, 255, 0.2)',
// 			},
// 			borderRadius: {},
// 		},
// 	},
// 	corePlugins: {
// 		// Disable Preflight base styles in builds targeting the editor.
// 		preflight: includePreflight,
// 	},
// 	plugins: [
// 		// Add Tailwind Typography (via _tw fork).
// 		require('@_tw/typography'),

// 		// Extract colors and widths from `theme.json`.
// 		require('@_tw/themejson'),

// 		function ({ addComponents }) {
// 			addComponents({
// 				'.container': {
// 					maxWidth: '100%',
// 					'@screen lg': {
// 						maxWidth: '960px',
// 					},
// 					'@screen xl': {
// 						maxWidth: '1140px',
// 					},
// 					'@screen 2xl': {
// 						maxWidth: '1280px',
// 					},
// 					'@screen 3xl': {
// 						maxWidth: '1550px',
// 					},
// 				},
// 			});
// 		},

// 		// Uncomment below to add additional first-party Tailwind plugins.
// 		// require('@tailwindcss/forms'),
// 		// require('@tailwindcss/aspect-ratio'),
// 		// require('@tailwindcss/container-queries'),
// 	],
// };
