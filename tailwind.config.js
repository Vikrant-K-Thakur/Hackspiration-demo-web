/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyan-neon': '#00f2ff',
        'magenta-neon': '#ff0055',
      },
      textShadow: {
        'neon-cyan': '0 0 7px #00f2ff, 0 0 14px #00f2ff, 0 0 21px rgba(0, 242, 255, 0.5)',
        'neon-magenta': '0 0 7px #ff0055, 0 0 14px #ff0055',
      },
      boxShadow: {
        'neon-cyan': '0 0 15px rgba(0, 242, 255, 0.4)',
        'neon-magenta': '0 0 15px rgba(255, 0, 85, 0.4)',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-neon-cyan': {
          textShadow: '0 0 7px #00f2ff, 0 0 14px #00f2ff, 0 0 21px rgba(0, 242, 255, 0.5)',
        },
        '.text-neon-magenta': {
          textShadow: '0 0 7px #ff0055, 0 0 14px #ff0055',
        },
        '.shadow-neon-cyan': {
          boxShadow: '0 0 15px rgba(0, 242, 255, 0.4)',
        },
        '.shadow-neon-magenta': {
          boxShadow: '0 0 15px rgba(255, 0, 85, 0.4)',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}