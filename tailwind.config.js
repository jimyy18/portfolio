/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#cc785c',
        'primary-active': '#a9583e',
        'primary-disabled': '#e6dfd8',
        ink: '#141413',
        body: '#3d3d3a',
        'body-strong': '#252523',
        muted: '#6c6a64',
        'muted-soft': '#8e8b82',
        hairline: '#e6dfd8',
        'hairline-soft': '#ebe6df',
        canvas: '#faf9f5',
        'surface-soft': '#f5f0e8',
        'surface-card': '#efe9de',
        'surface-cream-strong': '#e8e0d2',
        'surface-dark': '#181715',
        'surface-dark-elevated': '#252320',
        'surface-dark-soft': '#1f1e1b',
        'on-primary': '#ffffff',
        'on-dark': '#faf9f5',
        'on-dark-soft': '#a09d96',
        'accent-teal': '#5db8a6',
        'accent-amber': '#e8a55a',
        success: '#5db872',
        warning: '#d4a017',
        error: '#c64545',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Tiempos Headline', 'Garamond', 'serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        display: '-0.02em',
        displaylg: '-0.025em',
        displayxl: '-0.03em',
      },
      borderRadius: {
        xs: '4px',
        sm: '6px',
        md: '8px',
        lg: '12px',
        xl: '16px',
      },
      spacing: {
        section: '96px',
        'section-sm': '64px',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        spikeSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        fadeIn: 'fadeIn 0.9s ease forwards',
        floatSlow: 'floatSlow 6s ease-in-out infinite',
        blink: 'blink 1s step-start infinite',
        spikeSpin: 'spikeSpin 12s linear infinite',
      },
    },
  },
  plugins: [],
}
