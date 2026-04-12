import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      },
      boxShadow: {
        glow: '0 0 45px rgba(56, 189, 248, 0.18)'
      },
      backgroundImage: {
        'radial-fade': 'radial-gradient(circle at top, rgba(56, 189, 248, 0.18), transparent 38%), radial-gradient(circle at 20% 20%, rgba(168, 85, 247, 0.16), transparent 32%), radial-gradient(circle at 80% 10%, rgba(59, 130, 246, 0.16), transparent 30%)'
      }
    }
  },
  plugins: []
}
