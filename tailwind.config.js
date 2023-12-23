/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '128': '28rem',
        '145': '45rem',
        '200': '68rem',
      },
      boxShadow:{
        'custom':'0px 0px 12px rgba(0,0,0,0.15), 0px 0px 12px rgba(0,0,0,0.15)',
      }
    },
  },
  plugins: [],
}

