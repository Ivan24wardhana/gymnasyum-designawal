/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#65C466',
        slate: {
          deep: '#1E293B',
        },
        gray: {
          muted: '#64748B',
        },
        background: {
          clean: '#F8FAFC',
        },
        border: {
          soft: '#E2E8F0',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}