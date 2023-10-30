/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "ezcrow-50": "#EEF9FF",
        "ezcrow-100": "#DDF3FF",
        "ezcrow-200": "#B3E7FF",
        "ezcrow-300": "#70D6FF",
        "ezcrow-400": "#24C2FF",
        "ezcrow-500": "#00ABFF",
        "ezcrow-600": "#0088DB",
        "ezcrow-700": "#006CB1",
        "ezcrow-800": "#005B92",
        "ezcrow-900": "#024C78",
        "ezcrow-950": "#012640"
      },

      fontSize: {
        'xxs': '.65rem',
      },
    },
  },
  plugins: [],
}
