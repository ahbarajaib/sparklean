/**
 * Sparklean Global Design System Tokens
 * Redesigned for Premium B2B Brand Identity.
 */

export const colors = {
  // Core Brand Colors
  primary: '#A71930',        // Sparklean signature crimson red
  primaryDark: '#8B1226',    // Deep red hover state
  primaryLight: '#FDF2F4',   // Tint for light highlights / badges
  
  navy: '#172B40',           // Deep corporate navy for headings
  navyDark: '#0F1E2E',
  navyLight: '#243B53',
  
  green: '#639B48',          // Natural leaf green (matching logo)
  greenDark: '#153E2E',      // Dark forest green for institutional banners
  greenLight: '#F0F7ED',
  
  white: '#FFFFFF',          // Clean background
  offWhite: '#F7F8F6',       // Warm white / soft background
  charcoal: '#172B40',       // Primary text / deep surfaces
  muted: '#66717C',          // Slate grey for body text
  
  accent: '#D6A64F',         // Warm gold accent
  accentDark: '#BF923F',     // Gold hover / interactive state
  accentLight: '#FAF5EC',    // Soft gold background tint
  
  border: '#E6E9EC',         // Subtle container borders
  borderLight: '#F0F2F4',    // Extra subtle separators
} as const;

export const typography = {
  fonts: {
    heading: "'Manrope', sans-serif",
    body: "'Inter', sans-serif",
  },
  weights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
  tracking: {
    tight: '-0.02em',
    normal: '0',
    wide: '0.04em',
    widest: '0.08em',
  },
} as const;

export const spacing = {
  xs: '0.5rem',    // 8px
  sm: '0.75rem',   // 12px
  md: '1rem',      // 16px
  lg: '1.5rem',    // 24px
  xl: '2rem',      // 32px
  '2xl': '3rem',   // 48px
  '3xl': '4rem',   // 64px
  '4xl': '6rem',   // 96px
} as const;

export const layout = {
  containerMaxWidth: '1280px',
  contentMaxWidth: '1120px',
  narrowMaxWidth: '800px',
  radius: {
    none: '0',
    subtle: '4px',
    card: '8px',
    container: '12px',
    full: '9999px',
  },
  shadows: {
    subtle: '0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px 0 rgba(0, 0, 0, 0.02)',
    card: '0 4px 16px -2px rgba(23, 43, 64, 0.06)',
    cardHover: '0 12px 28px -4px rgba(23, 43, 64, 0.12)',
    elevated: '0 20px 40px -4px rgba(167, 25, 48, 0.1), 0 4px 16px -2px rgba(0, 0, 0, 0.04)',
  },
} as const;

export const tokens = {
  colors,
  typography,
  spacing,
  layout,
} as const;

export type Colors = typeof colors;
export type Typography = typeof typography;
export type Spacing = typeof spacing;
export type Layout = typeof layout;
export type Tokens = typeof tokens;

