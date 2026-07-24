/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './demo.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        teal: '#2c7a72',
        tealMid: '#3a8c7e',
        tealDeep: '#163f3b',
        tealDark: '#10302d',
        gold: '#e3a63c',
        goldSoft: '#f0cd82',
        cash: '#4c9a6a',
        ink: '#12332f',
        muted: '#5f746f',
        mist: '#f4f8f6',
        line: '#e6ede9',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"Fragment Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      borderRadius: {
        xl2: '22px',
        xl3: '30px',
      },
      boxShadow: {
        xs: '0 2px 10px rgba(16,48,45,.06)',
        card: '0 12px 30px -16px rgba(16,48,45,.22)',
        float: '0 30px 70px -30px rgba(16,48,45,.42)',
      },
      maxWidth: {
        container: '1120px',
      },
      keyframes: {
        floaty: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
