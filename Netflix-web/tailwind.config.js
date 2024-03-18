/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'ms': {'min' : '320px', 'max' : '374px'},
      'mm': {'min' : '375px', 'max' : '424px'},
      'ml': {'min' : '425px', 'max' : '767px'},
      'tablet': {'min' : '768px', 'max' : '1023px'},
      'ls': {'min' : '1024px', 'max' : '1439px'},
      'll': {'min' : '1440px', 'max' : '2559px'},
      '4k': {'min' : '2560px'}
    },
    extend: {
      backgroundImage:{
        'bg-landpage' : "url('/assets/images/netflix-bg.jpg')"
      }
    },
  },
  plugins: [],
}

