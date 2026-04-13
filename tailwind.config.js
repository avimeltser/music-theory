export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        lume: {
          charcoal: '#0a0a0a',
          surface: '#161616',
          white: '#f0f0f0',
          muted: '#9a9a9a',
          gold: '#d4af37'
        }
      },
      fontFamily: {
        sans: ['IBM Plex Sans', 'sans-serif'],
        mono: ['Space Mono', 'monospace']
      }
    }
  },
  plugins: []
};
