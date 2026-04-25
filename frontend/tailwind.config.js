/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        surface: {
          DEFAULT: '#131313',
          dim: '#131313',
          bright: '#3a3939',
          'container-lowest': '#0e0e0e',
          'container-low': '#1c1b1b',
          'container': '#201f1f',
          'container-high': '#2a2a2a',
          'container-highest': '#353534',
          variant: '#353534',
          tint: '#c0c1ff',
        },
        'on-surface': {
          DEFAULT: '#e5e2e1',
          variant: '#c7c4d7',
        },
        primary: {
          DEFAULT: '#c0c1ff',
          container: '#8083ff',
          fixed: '#e1e0ff',
          'fixed-dim': '#c0c1ff',
        },
        'on-primary': {
          DEFAULT: '#1000a9',
          container: '#0d0096',
          fixed: '#07006c',
          'fixed-variant': '#2f2ebe',
        },
        secondary: {
          DEFAULT: '#ddb7ff',
          container: '#6f00be',
        },
        'on-secondary': {
          DEFAULT: '#490080',
          container: '#d6a9ff',
        },
        tertiary: {
          DEFAULT: '#ffb0cd',
          container: '#f751a1',
        },
        'on-tertiary': {
          DEFAULT: '#640039',
          container: '#570032',
        },
        error: {
          DEFAULT: '#ffb4ab',
          container: '#93000a',
        },
        'on-error': {
          DEFAULT: '#690005',
          container: '#ffdad6',
        },
        outline: {
          DEFAULT: '#908fa0',
          variant: '#464554',
        },
        inverse: {
          surface: '#e5e2e1',
          'on-surface': '#313030',
          primary: '#494bd6',
        },
      },
      borderRadius: {
        sm: '0.25rem',
        DEFAULT: '0.5rem',
        md: '0.75rem',
        lg: '1rem',
        xl: '1.5rem',
        full: '9999px',
      },
      spacing: {
        xs: '8px',
        sm: '16px',
        md: '24px',
        lg: '40px',
        xl: '64px',
        gutter: '24px',
        margin: '32px',
      },
      backdropBlur: {
        glass: '40px',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};
