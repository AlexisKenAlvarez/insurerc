/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mypink: '#F604CC',
        myblue: '#00FEE7',
        hero: '#171715',
        myorange: '#FEC336',
        mygrey: '#6E747D',
        button: '#3973F2',
        buttonShadow: '#719DFF'
      },
      boxShadow: {
        pinkGlowTop: '0px 0px 70px 5px rgba(246,4,204,1)',
        blueGlow: '0px 0px 35px 1px rgba(0,254,231,1)',
        pinkGlow: '0px 0px 35px 1px rgba(246,4,204,1)',
        buttonShadow: '5px 5px 0px 0px rgba(113,157,255,1)',
        featureGlow: '0px 0px 70px -14px rgba(0,254,231,0.25)'

      },
      fontFamily: {
        uni: ['Uni'],
        poppins: ['Poppins'],
        inter: ['Inter']
      }
    },
  },
  plugins: [],
}
