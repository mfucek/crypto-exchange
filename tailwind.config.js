/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
			colors: {
				"defi-accent": "#4291E5",
				"defi-light": "#202230",
				"defi-dark": "#161521",
				"defi-app": "#13081D",
				"defi-border": "#2F3346",
			}
		},
  },
  plugins: [],
}
