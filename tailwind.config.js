export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Custom padding values, extending Tailwind's defaults
      padding: {
        0.5: '2px',
        1: '4px',
        1.5: '6px',
        2: '8px',
        2.5: '10px',
        3: '12px',
        3.5: '14px',
        4: '16px',
        5: '20px',
        6: '24px',
        8: '32px',
        10: '40px',
        12: '48px',
        16: '64px',
        24: '96px',
      },
      // Custom border-radius values, extending Tailwind's defaults
      borderRadius: {
        sm: '2px',
        DEFAULT: '4px',
        md: '6px',
        lg: '8px',
        xl: '12px',
      },
      // Custom font family, adding 'Roboto' as the default sans-serif font
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
      },
      // Keyframes for animations
      keyframes: {
        loadingDot: { // Consolidated into one keyframe
          '0%, 100%': { opacity: 0 },
          '50%': { opacity: 1 }
        },
      },
      // Animation definitions using the consolidated keyframe and delays
      animation: {
        loadingDot1: 'loadingDot 1s infinite',
        loadingDot2: 'loadingDot 1s infinite 0.2s',
        loadingDot3: 'loadingDot 1s infinite 0.4s'
      },
      // Custom color palette
      colors: {
        // Primary Colors
        primary: {
          light: '#E27AAB',
          DEFAULT: '#E27AAB',
          dark: '#E27AAB',
          disabled: '#494949',
          hover: '#DD6B9F',
          active: '#DD6B9F',
          outline: '#E27AAB'
        },
        // Secondary Colors
        secondary: {
          light: '#080808',
          DEFAULT: '#080808',
          dark: '#080808',
          disabled: '#494949',
          hover: '#1D1E20',
          active: '#1D1E20',
          outline: '#2C2E33'
        },
        // Tertiary Colors
        tertiary: {
          light: '#1D1E20',
          DEFAULT: '#1D1E20',
          dark: '#1D1E20',
          disabled: '#494949',
          hover: '#2C2E33',
          active: '#2C2E33',
          outline: '#1D1E20'
        },
        // UI Colors
        ui: {
          background: '#080808',
          foreground: '#000000',
          divider: '#2C2E33',
          hover: '#DD6B9F',
        },
        // Dashboard specific dark shades
        'dashboard-dark': {
          800: '#080808',
          700: '#0F1011',
          600: '#1D1E20',
          500: '#282C33',
          400: '#2C2E33',
          200: '#240F10',
          100: '#141516',
          201: '#112313',
          202: '#F87171',
          203: '#65DC8D',
        },
        // Dashboard specific text colors
        'dashboard-text': {
          white: '#D9D9D9',
          gray: '#A0A0A0',
          red: '#FECACA',
          green: '#DFF9E7',
          pink: '#E27AAB',
          graylight: '#B0B0B0',
        },
        // Dashboard specific border colors
        'dashboard-border': {
          600: '#494949',
          500: '#2C2E33',
        },
        // Gradient colors for primary buttons/elements
        'gradient-primary': {
          from: "#E27AAB",
          to: "#D85C93",
        },
        'gradient-primary-active': {
          from: "#DD6B9F",
          to: "#E27AAB",
        },
        // System States (e.g., for alerts, notifications)
        state: {
          success: '#4CAF50',
          error: '#F44336',
          warning: '#FFC107',
          info: '#2196F3',
          disabled: '#E0E0E0',
        },
        // Surface Colors (e.g., for overlays, hover states)
        surface: {
          overlay: 'rgba(0, 0, 0, 0.5)',
          disabled: 'rgba(0, 0, 0, 0.12)',
          hover: 'rgba(0, 0, 0, 0.04)',
        },
        // Text Colors
        text: {
          primary: '#FFFFFF',
          secondary: '#B0B0B0',
          disabled: '#B0B0B0',
          inverse: '#B0B0B0',
          accent: '#E27AAB',
        }
      },
      // Custom font sizes for headings, paragraphs, and captions
      fontSize: {
        'h1': ['24px', {
          lineHeight: '36px',
          fontWeight: '700',
        }],
        'h2': ['20px', {
          lineHeight: '30px',
          fontWeight: '700',
        }],
        'h3': ['16px', {
          lineHeight: '24px',
          fontWeight: '600',
        }],
        'h4': ['18px', { // Note: Your original h4 was 18px, h6 was 14px. I kept h4 as 18px.
          lineHeight: '21.6px',
          fontWeight: '500',
        }],
        'h5': ['16px', {
          lineHeight: '24px',
          fontWeight: '400',
        }],
        'h6': ['14px', { // Note: Your original h6 was 14px.
          lineHeight: '21px',
          fontWeight: '500',
        }],
        'paragraph': ['12px', {
          lineHeight: '18px',
          fontWeight: '500',
        }],
        'caption': ['10px', {
          lineHeight: '15px',
          fontWeight: '400',
        }],
      },
      // Custom background images for gradients
      backgroundImage: {
        'gradient-primary': 'linear-gradient(180deg, var(--tw-gradient-primary-from) 100%, var(--tw-gradient-primary-to) 100%)',
        'gradient-primary-active': 'linear-gradient(180deg, var(--tw-gradient-primary-active-from) 100%, var(--tw-gradient-primary-active-to) 100%)',
      },
      // Custom max-height utility
      maxHeight: {
        'dropdown': '250px'
      }
    },
  },
  plugins: [
    // Plugin to add CSS variables for gradients to the root
    function ({ addBase }) {
      addBase({
        ':root': {
          '--tw-gradient-primary-from': '#E27AAB',
          '--tw-gradient-primary-to': '#D85C93',
          '--tw-gradient-primary-active-from': '#DD6B9F',
          '--tw-gradient-primary-active-to': '#E27AAB',
        },
      });
    },
    // Plugin to add custom utility classes
    function ({ addUtilities }) {
      addUtilities({
        // Utility to clamp text to 2 lines
        '.clamp-2': {
          display: '-webkit-box',
          '-webkit-line-clamp': '2',
          '-webkit-box-orient': 'vertical',
          overflow: 'hidden',
        },
        // Utility to hide scrollbars
        '.no-scrollbar': {
          '-ms-overflow-style': 'none', // For IE and Edge
          'scrollbar-width': 'none',    // For Firefox
          '&::-webkit-scrollbar': {
            display: 'none',            // For Chrome, Safari, and Opera
          },
        },
        // Custom text style utilities (using the defined font sizes and weights)
        '.text-h1': {
          fontSize: '24px',
          lineHeight: '36px',
          fontWeight: '700',
          fontFamily: 'Roboto, sans-serif', // Explicitly set font for utility
        },
        '.text-h2': {
          fontSize: '20px',
          lineHeight: '30px',
          fontWeight: '700',
          fontFamily: 'Roboto, sans-serif',
        },
        '.text-h3': {
          fontSize: '16px',
          lineHeight: '24px',
          fontWeight: '600',
          fontFamily: 'Roboto, sans-serif',
        },
        '.text-h4': {
          fontSize: '14px',
          lineHeight: '21px',
          fontWeight: '600',
          fontFamily: 'Roboto, sans-serif',
        },
        '.text-paragraph': {
          fontSize: '12px',
          lineHeight: '18px',
          fontWeight: '500',
          fontFamily: 'Roboto, sans-serif',
        },
        '.text-caption': {
          fontSize: '10px',
          lineHeight: '15px',
          fontWeight: '400',
          fontFamily: 'Roboto, sans-serif',
        },
        // Custom scrollbar styling
        '.custom-scrollbar': {
          '&::-webkit-scrollbar': {
            width: '6px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#080808',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#2C2E33',
            borderRadius: '3px',
          },
          'scrollbar-width': 'thin',
          'scrollbar-color': '#2C2E33 #080808',
        }
      })
    },
  ],
}
