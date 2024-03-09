/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {

      colors: {
        'pr-1': '#AD5A86',
        't-1': '#171E4C',
        't-2': '#070739',
        't-3': '#686C85',
        't-4': '#EC407D',
        't-5': '#3D31A5', 
        't-6': '#BD2029',
        't-7': '#B31E85',
        't-8': '#E0A14A',
        't-9': '#585541',
        't-10': '#A85782',
        't-11': '#454A6F',
        't-12': '#666874',
        'b-1': '#FAFAFF',
        'b-2': '#FEFCFC',
        'b-3': '#F8E8EE',
        'b-33': '#F5DFE7',
        'b-4': '#D2D5F5',
        'b-44': '#BABEEA',
        'b-5': '#FFDDCB',
        'b-55': '#FACFB8',
        'b-6': '#F8E4FF',
        'b-66': '#F6DCFF',
        'b-7': '#FFEDD2',
        'b-77': '#FAE2BD',
        'b-8': '#DED7AC',
        'b-88': '#D1CA9F',
        'b-9': '#E7E8EF',
        'b-10': '#F2E6F5',
        'b-11': '#F3F5F6',
        'b-12': '#E9E9E9',
        'b-13': '#E3E3E3',
        'x': '#0A1A07',
        'y': '#D6E4B8',
        'z': '#BFE4B6',


       
      },

      width: {

        '17': '68px',
        '22': '86px',
        '38': '150px',
        '54': '216px',
        '8xl': '445px',
        '88xl': '490px',
        '9xl': '600px',
        '99xl': '462px',
        
        
      },
      fontSize: {
        'xxl': ['12px', {
          lineHeight: '28px',
          letterSpacing: '-0.01em',
          fontWeight: '200',
        }],
        'p': '8px',
        'pp': '10px',
      },

      zIndex: {
        '11': '-2',
      },

      spacing: {
        '38': '150px',
        '63': '63%',
        '70': '70%',
        '500': '536px',
        '99xl': '462px',
        '8p': '-12px',
        '16p': '-16%',
        '11p': '11%',
        '94': '94%',
        '14': '14%',
        '13': '13%',
        '97': '97%',
        '700': '400px',



      },

      dropShadow: {
        '3xl': '0 3px 2px rgba(23, 30, 76, 0.45)',
      },

      boxShadow: {
        '6xl': '0 -3px 20px 0 rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}

