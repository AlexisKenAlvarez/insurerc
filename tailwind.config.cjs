/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mybrown: '#DB8F32',
        mylight: '#F8E5C4',
        hero: '#171715',
        myorange: '#FEC336',
        mygrey: '#6E747D',
        button: '#3973F2',
        buttonShadow: '#DB8F32'
      },
      boxShadow: {
        pinkGlowTop: '0px 0px 70px 5px rgba(246,4,204,1)',
        brownGlow: '0px 0px 35px 1px rgba(219, 143, 50, 1)',
        lightGlow: '0px 0px 35px 1px rgba(248, 229, 196, 1)',
        buttonShadow: '5px 5px 0px 0px rgba(219, 143, 50, 1)',

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
