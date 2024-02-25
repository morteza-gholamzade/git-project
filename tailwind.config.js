/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html' ],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0 -2px 6px rgba(0, 0, 0, 0.16)',
      },
      width: {
        '54': '218px',
        '76': '300px',
        '90': '353px',
        '54': '216px',
        '5xl': '463px',
        '6xl': '690px',
        '7xl': '800px',
        '8xl': '955px',

      },
      height: {
        '18': '76px',
      },

      boxShadow: {
        '3xl': '-10px -10px 15px rgba(0, 0, 0, 0.2)',
        '4xl': '5px 5px 15px rgba(0, 0, 0, 0.2)',
      },
      translate: {
        '1/5': '-50%',
      }


    }
    }, 
  
  plugins: [],
}

