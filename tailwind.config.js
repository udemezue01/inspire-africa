module.exports = {
  purge: [

   './src/App.vue',
     './src/components/Navbar.vue',
     './src/components/Footer.vue',
    './src/views/Landing/Landing.vue',
    './src/views/Landing/About.vue',
    './src/views/Courses/Courses.vue',
    

  ],
  darkMode: false, // or 'media' or 'class'
  theme: {

  	fontFamily:{

  	'body':['DM Sans']

  	},
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}


