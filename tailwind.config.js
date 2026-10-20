/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      colors: {
        background: '#04060a',
        surface: {
          50: '#1e2433',
          100: '#151a26',
          200: '#0f1420',
          300: '#0a0d16',
          400: '#070910',
          500: '#04060a',
        },
        editorial: {
          light: '#f8fafc',
          muted: '#94a3b8',
          subtle: '#64748b',
          border: 'rgba(255, 255, 255, 0.08)',
          card: 'rgba(15, 20, 32, 0.65)',
        },
        electric: {
          cyan: '#38bdf8',
          blue: '#3b82f6',
          violet: '#8b5cf6',
          purple: '#a855f7',
          lavender: '#c084fc',
          emerald: '#10b981',
          amber: '#f59e0b',
        }
      },
      animation: {
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'data-stream': 'dataStream 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        dataStream: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '100% 100%' },
        }
      }
    },
  },
  plugins: [],
}
