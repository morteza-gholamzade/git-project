/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      maxWidth: {
        '8xl': '1680px',
        '26': '104px',
      },
      colors: {
        'pr-2': '#B1B1B1',
        'pr-1': '#2B2C2E',
        'pr-3': '#2E3092',
        'pr-4': '#8C8C8C',
        'pr-5': '#2E309236',
        'clock': '#3A3F42',
        'pr-6': '#2E3092',
        'pr-7': '#3A3F42',
        'pr-8': '#FF6B00',
      },
      fontSize: {
        'p': '10px',
        '3': '42px',
        
      },
      width: {
        '15': '62px',
        '18': '66px',
        '26': '108px',
        '8xl': '1680px',
        '9xl': '1780px',
        
      },
      height: {
        '18': '66px',
        '9.5': '38px',
      },
      borderRadius: {
        'xx': '20px',
        
      },
       
    },
  },
  plugins: [],
}

