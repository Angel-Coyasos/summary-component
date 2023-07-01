/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Hanken-Grotesk': ['Hanken-Grotesk', 'sans-serif'] 
      },
      colors: {
        'Light-Red': 'hsl(0, 100%, 67%)',
        'Light-Red-Alpa': 'hsla(0, 100%, 67%, 0.1)',
        'Orangey-Yellow': 'hsl(39, 100%, 56%)',
        'Orangey-Yellow-Alpa': 'hsla(39, 100%, 56%, 0.1)',
        'Green-Teal': 'hsl(166, 100%, 37%)',
        'Green-Teal-Alpa': 'hsla(166, 100%, 37%, 0.1)',
        'Obalt-Blue': 'hsl(234, 85%, 45%)',
        'Obalt-Blue-Alpa': 'hsla(234, 85%, 45%, 0.1)',

        'Light-slate-Blue': 'hsl(252, 100%, 67%)',
        'Light-Royal-Blue': 'hsl(241, 81%, 54%)',
        'Violet-Blue': 'hsla(256, 72%, 46%, 1)',
        'Persian-Blue': 'hsla(241, 72%, 46%, 0)',

        'White':' hsl(0, 0%, 100%)',
        'Pale-Blue': 'hsl(221, 100%, 96%)',
        'Light-Lavender': 'hsl(241, 100%, 89%)',
        'Dark-Gray-Blue': 'hsl(224, 30%, 27%)',
        'Dark-Gray-Blue-Alpa': 'hsla(224, 30%, 27%, 0.1)',

        'footer-color': 'hsl(228, 45%, 44%)'
      }
    },
  },
  plugins: [],
}

