import { css } from 'styled-components';

const rootFontStyles = css`
  :root {
    --font-primary: 'Barlow-Regular';
  }

  body {
    font-family: var(--font-primary), Arial, Helvetica, sans-serif;
  }
`;

export default rootFontStyles;
