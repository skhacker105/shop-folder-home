/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '../src/**/*.{html,ts,scss}',
  ],
  theme: {
    extend: {
      fontSize: {
        "page-header": '11px',
      },
      backgroundColor: {
        "page-content": 'transparent'
      },
      textColor: {
        "page-header": '#ffffff',
        "page-footer": '#ffffff'
      },
      backgroundImage: {
        "page-header": 'linear-gradient(180deg, rgb(15 28 134 / 91%) 4%, rgb(102 3 255 / 86%) 92%)',
        "page-footer": 'linear-gradient(180deg, rgb(15 28 134 / 91%) 4%, rgb(102 3 255 / 86%) 92%)'
      },
      lineHeight: {
        "page-header": '33px' 
      }
    },
  },
  plugins: [],
  safelist: [{
    pattern: /(bg|background|text|leading)-page/
  }]
}

