/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-inter)', 'sans-serif'],
    },
    extend: {
      colors: {
        nebula: {
          dark: '#050510',
          navy: '#0a0a1f',
          purple: '#7c3aed',
          magenta: '#c026d3',
          cyan: '#22d3ee',
          blue: '#3b82f6',
        },
      },
      backgroundImage: {
        'nebula-gradient':
          'linear-gradient(135deg, #7c3aed 0%, #c026d3 40%, #3b82f6 70%, #22d3ee 100%)',
        'nebula-radial':
          'radial-gradient(ellipse at 20% 50%, rgba(124, 58, 237, 0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 50%, rgba(34, 211, 238, 0.1) 0%, transparent 50%)',
        'cosmic-mesh':
          'radial-gradient(at 40% 20%, rgba(124, 58, 237, 0.3) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(34, 211, 238, 0.2) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(192, 38, 211, 0.15) 0px, transparent 50%)',
      },
      fontFamily: {
        mono: ['var(--font-plex-mono)', 'monospace'],
        display: ['var(--font-space-grotesk)', 'sans-serif'],
      },
      boxShadow: {
        button: '0px 0px 68px 7px rgba(124, 58, 237, 0.4)',
        'nebula-glow': '0 0 40px rgba(124, 58, 237, 0.5), 0 0 80px rgba(34, 211, 238, 0.2)',
        'nebula-soft': '0 0 60px rgba(124, 58, 237, 0.25)',
      },
      animation: {
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
