/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brown-dark': '#2C1810',
        'brown-light': '#A0522D',
        'tata-red': '#D32F2F',
        'tata-blue': '#0D47A1',
        'solar-gold': '#FDB913',
        'solar-blue': '#1976D2',
        'accent-cyan': '#00BCD4',
        'success-green': '#4CAF50',
      },
      backgroundImage: {
        'gradient-solar': 'linear-gradient(135deg, #FDB913 0%, #FF6B6B 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0D47A1 0%, #1976D2 100%)',
        'gradient-success': 'linear-gradient(135deg, #4CAF50 0%, #45a049 100%)',
      },
      boxShadow: {
        'lg-glow': '0 10px 40px rgba(25, 118, 210, 0.2)',
        'md-glow': '0 5px 20px rgba(253, 185, 19, 0.15)',
        'solar': '0 15px 50px rgba(253, 185, 19, 0.25)',
      },
      maxWidth: {
        '8xl': '1440px',
      },
    },
  },
  plugins: [],
};
