/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Redesigned Sparklean Brand Palette (Based on Reference Design)
        sparklean: {
          primary: '#A71930',        // Signature Sparklean Crimson Red
          'primary-dark': '#8B1226',
          'primary-light': '#FDF2F4',
          navy: '#172B40',           // Deep Corporate Navy for Headings & Accents
          'navy-dark': '#0F1E2E',
          'navy-light': '#243B53',
          green: '#639B48',          // Natural Leaf Green (from Sparklean logo)
          'green-dark': '#153E2E',   // Dark Forest Green for Industries Banner
          'green-light': '#F0F7ED',
          white: '#FFFFFF',
          'off-white': '#F7F8F6',    // Warm White / Clean Soft Background
          'warm-white': '#F7F8F6',
          charcoal: '#172B40',       // Dark primary text
          muted: '#66717C',          // Slate Grey for body copy
          slate: '#66717C',
          accent: '#D6A64F',         // Warm Gold
          'accent-dark': '#BF923F',
          'accent-light': '#FAF5EC',
          border: '#E6E9EC',         // Soft border
          'border-light': '#F0F2F4',
        },
        brand: {
          primary: '#A71930',
          'primary-dark': '#8B1226',
          'primary-light': '#FDF2F4',
          navy: '#172B40',
          green: '#639B48',
          bg: '#FFFFFF',
          'bg-secondary': '#F7F8F6',
          text: '#172B40',
          muted: '#66717C',
          accent: '#D6A64F',
          'accent-dark': '#BF923F',
          'accent-light': '#FAF5EC',
          border: '#E6E9EC',
        }
      },
      fontFamily: {
        heading: ['Manrope', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
      },
      letterSpacing: {
        'tightest': '-0.03em',
        'heading': '-0.02em',
        'wider-heading': '0.04em',
        'widest-heading': '0.08em',
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px 0 rgba(0, 0, 0, 0.02)',
        'card': '0 4px 16px -2px rgba(23, 43, 64, 0.06)',
        'card-hover': '0 12px 28px -4px rgba(23, 43, 64, 0.12)',
        'elevated': '0 20px 40px -4px rgba(167, 25, 48, 0.1), 0 4px 16px -2px rgba(0, 0, 0, 0.04)',
      },
      borderRadius: {
        'subtle': '4px',
        'card': '8px',
        'container': '12px',
        'pill': '9999px',
      },
      maxWidth: {
        'site': '1280px',
        'content': '1120px',
        'narrow': '800px',
      },
    },
  },
  plugins: [],
}
