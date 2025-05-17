/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        card: {
          DEFAULT: "#1F2937",
          foreground: "#F9FAFB",
        },
        primary: "#8B5CF6",
        
      },
      keyframes: {
        'icon-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
      animation: {
        'icon-rotate': 'icon-spin 0.5s ease',
        'spin-slow': 'spin 6s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.7s ease-out forwards',
        'fade-in-delay-1': 'fadeIn 0.7s ease-out 0.2s forwards',
        'fade-in-delay-2': 'fadeIn 0.7s ease-out 0.4s forwards',
        'fade-in-delay-3': 'fadeIn 0.7s ease-out 0.6s forwards',
        'fade-in-delay-4': 'fadeIn 0.7s ease-out 0.8s forwards',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
