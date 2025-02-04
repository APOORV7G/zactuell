module.exports = {
  content: ['./*.html'], // Adjust to your project's structure
  theme: {
    extend: {
      colors: {
        violet: '#8B5CF6',
        indigo: '#6366F1',
        blue: '#3B82F6',
        green: '#10B981',
        yellow: '#F59E0B',
        orange: '#F97316',
        red: '#EF4444',
      },
      fontFamily: {
        sans: ['JetBrains Mono', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: true, // Enables all default themes
  },
};
