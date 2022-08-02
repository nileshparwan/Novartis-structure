// This is the type definition for my theme object.
export type ThemeType = typeof theme;

const theme1 = {
  font: {
    primary: 'font-primary-regular',
    secondary: 'font-secondary-regular',
  },
  color: {
    primary: '#00b2a9',
  }
}

export const theme = {
  theme1
};

export default theme;