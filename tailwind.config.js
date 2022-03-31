module.exports = {
  important: true,
  purge: [
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/pages/**/*.{js,jsx,ts,tsx}',
  ],
  mode:"jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary-100':'#3E497A',
        'primary-200':'#273162',
        'primary-300':'#141D48',
        'primary-400':'#070E2F',
        'primary-500':'#020619',

        'primary-alter-100':'#343A76',
        'primary-alter-200':'#1B2258',
        'primary-alter-300':'#0A103D',
        'primary-alter-400':'#030725',
        'primary-alter-500':'#010311',

        'alternative-100':'#697193',
        'alternative-200':'#475078',
        'alternative-300':'#30385D',
        'alternative-400':'#1E274F',
        'alternative-500':'#0D1436',

        'secondary':'#B15ECE',
        'secondary-50':'#9B38BE',
        'secondary-100':'#8B16B5',
        'secondary-200':'#7b1fa0',
        'secondary-300':'#74059B',      
        'secondary-400':'#5F0380',
        'secondary-500':'#4C0267',
        'secondary-600':'#3E0552',
        'secondary-700':'#360149',       
        'secondary-800':'#ab31aa',
      
        'soft-blue-100':'#12CFFB',
        'soft-blue-200':'#00A3C9',
        'soft-blue-300':'#007692',
        'soft-blue-400':'#005D73',      
        
        'alternative-blue-100':'#0490FB',
        'alternative-blue-200':'#006BBD',
        'alternative-blue-300':'#005291',
        'alternative-blue-400':'#004274',
        'alternative-blue-500':'#003055',
        
        
        'realgrey': '#ccc',
        'successgreen':'#7dcd40',
        'fbcolor':'#3b5999',
        'twcolor':'#60a9de',
        'bannerscolor':'#273742',
        'muted': '#34314c',
        'purple-opaque':'#D4D4E8',


        

       
      },
    },
  },
  variants: {
    extend: {
      opacity: ['responsive', 'hover', 'focus', 'disabled'],
      backgroundColor: ['responsive', 'hover','group-focus','visited','checked'],
      outline: ['hover', 'active'],
      translate: ['motion-safe'],
      textColor: ['visited'],
      textDecoration: ['focus-visible'],
      rotate: ['active', 'group-hover'],
      transformOrigin: ['hover', 'focus'],
      transform: ['hover', 'focus'],
      transitionProperty: ['responsive', 'motion-safe', 'motion-reduce'],
      transitionDelay: ['hover', 'focus'],    
      borderColor: ['checked'],
    },
  },
  plugins: [],
}
