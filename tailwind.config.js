/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--bg)',
        foreground: 'var(--text)',
        muted: 'var(--muted)',
        border: 'var(--border)',
      },
      fontFamily: {
        retro: ['"Press Start 2P"', 'cursive', 'monospace'],
      }
    },
  },
  plugins: [],
}
