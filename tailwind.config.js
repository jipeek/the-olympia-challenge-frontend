const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
      primary: {
        light: '#246BFD',
        DEFAULT: '#246BFD',
        dark: '#246BFD'
      },
      secondary: {
        light: '#C25FFF',
        DEFAULT: '#C25FFF',
        dark: '#C25FFF'
      },
      background01: {
        light: '#bbbbbb',
        DEFAULT: '#181A20',
        dark: '#181A20'
      },
      background02: {
        light: '#bbbbbb',
        DEFAULT: '#262A34',
        dark: '#262A34'
      },
      background03: {
        light: '#bbbbbb',
        DEFAULT: '#5E6272',
        dark: '#5E6272'
      },
      colorful01: {
        light: '#A06AF9',
        DEFAULT: '#A06AF9',
        dark: '#A06AF9'
      },
      colorful02: {
        light: '#FBA3FF',
        DEFAULT: '#FBA3FF',
        dark: '#FBA3FF'
      },
      colorful03: {
        light: '#8E96FF',
        DEFAULT: '#8E96FF',
        dark: '#8E96FF'
      },
      colorful04: {
        light: '#94F0F0',
        DEFAULT: '#94F0F0',
        dark: '#94F0F0'
      },
      colorful05: {
        light: '#A5F59C',
        DEFAULT: '#A5F59C',
        dark: '#A5F59C'
      },
      colorful06: {
        light: '#FFDD72',
        DEFAULT: '#FFDD72',
        dark: '#FFDD72'
      },
      colorful07: {
        light: '#FF968E',
        DEFAULT: '#FF968E',
        dark: '#FF968E'
      },
      colorful08: {
        light: '#200745',
        DEFAULT: '#200745',
        dark: '#200745'
      },
      white: {
        light: '#FFFFFF',
        DEFAULT: '#FFFFFF',
        dark: '#FFFFFF'
      },
      grey: {
        light: '#3A3D46',
        DEFAULT: '#3A3D46',
        dark: '#3A3D46'
      },
      colorplaceholder: {
        light: '#5E6272',
        DEFAULT: '#5E6272',
        dark: '#5E6272'
      }
    },
    fontFamily: {
      sans: ['Inter', 'DM Sans', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      title: ['DM Sans', 'sans-serif']
    },
    extend: {
      screens: {
        'xxs': '375px',
      },
      spacing: {
        'regular': '12px',
        'medium': '16px',
      },
      borderRadius: {
        'costum': '12px',
        'double': '24px',
      },
      fontSize: {
        'superSmall': '10px',
        'small': '12px',
        'normal': '13px',
        'regular': '14px',
        'medium': '16px'
      },
      boxShadow: {
        'regular': '0px 8px 16px rgba(0, 0, 0, 0.5)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
