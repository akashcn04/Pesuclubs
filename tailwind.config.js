/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html','./cori.html','./flex_box.html'],                     //in which file you are using tailwind , that link give here.
  theme: {
    screens: {
      'xs': '300px',   // we added new screen size
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: 
      {
        myred: '#F40009',
        myyellow : '#ffe200',
      },
      fontFamily:{
        'new-font': ['Protest guerrilla'],
        'nerko-one':['Nerko-one'],
      }
    },  //to add new thing in tailwind
  },
  plugins: [],
}