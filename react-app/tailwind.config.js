/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#5F5BFF',
        'primary-dark': '#3F3ACF',
        accent: '#F6B756',
        'accent-soft': '#FFEED6',
        night: '#05060F',
        'night-alt': '#0B0E1F',
        surface: '#10142C',
        'surface-soft': '#1A1F3D',
        muted: '#9698B0',
      },
      fontFamily: {
        display: ['"Clash Display"', '"General Sans"', 'system-ui', 'sans-serif'],
        body: ['"General Sans"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        mesh: 'radial-gradient(circle at 15% 20%, rgba(95,91,255,0.35), transparent 32%), radial-gradient(circle at 80% 0%, rgba(246,183,86,0.25), transparent 28%), radial-gradient(circle at 0% 80%, rgba(59,130,246,0.2), transparent 30%)',
        'glow-primary':
          'linear-gradient(120deg, rgba(95,91,255,0.8), rgba(63,58,207,0.9))',
      },
      boxShadow: {
        soft: '0 25px 80px rgba(6,7,18,0.55)',
        glow: '0 15px 50px rgba(95,91,255,0.35)',
      },
    },
  },
  plugins: [],
};
