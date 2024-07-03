/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      flexGrow: {
        2: '2'
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        '16': 'repeat(16, minmax(0, 1fr))',

        // Complex site-specific column configuration
        'footer': '200px minmax(900px, 1fr) 100px',
      },
      columns: {
        '4xs': '14rem',
      },
      gridColumn: {
        'span-16': 'span 16 / span 16',
      },
      transitionDuration: {
        '2000': '2000ms',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      gridColumn: {
        'span-16': 'span 16 / span 16',
      },
      gridColumnStart: {
        '13': '13',
        '14': '14',
        '15': '15',
        '16': '16',
        '17': '17',
      },
      gridColumnEnd: {
        '13': '13',
        '14': '14',
        '15': '15',
        '16': '16',
        '17': '17',
      }
    },
  },
  plugins: [],
}

