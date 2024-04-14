/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
    theme: {
      extend: {
          colors: {
              onNeutralBg: 'var(--onNeutralBg)',
              neutralBg: 'var(--neutralBg)',
              onPrimaryBg: 'var(--onPrimaryBg)',
              onPrimaryBgLight: 'var(--onPrimaryBgLight)',
              primaryBg: 'var(--primaryBg)',
              primary: 'var(--primary)',
          }
      },
  },
  plugins: [],
}

