/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html' , './addres.html'],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0 -2px 6px rgba(0, 0, 0, 0.16)',
      },
      width: {
        '90': '353px',
        '54': '216px',
        '6xl': '690px',

      },
      height: {
        '18': '76px',
      },

      boxShadow: {
        '3xl': '0 -5px 15px rgba(0, 0, 0, 0.1)',
      }

      
    }
    }, 
  
  plugins: [],
}

