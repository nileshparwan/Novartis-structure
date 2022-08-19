// This is the type definition for my theme object.
export type ThemeType = typeof theme;

const theme1 = {
  font: {
    primary: 'var(--font-primary)',
    secondary: 'var(--font-primary)'
  },
  color: {
    orange: 'var(--orange)',
    blue: 'var(--blue)'
  }
}

export const theme = {
  theme1
};

export default theme;