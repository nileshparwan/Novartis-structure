import { css } from 'styled-components';

export const typoStyles = css`
  @font-face {
    font-family: 'Harmonia Sans Std Regular';
    src: url('../fonts/HarmoniaSansStd-Regular.otf') format('opentype');
    font-display: swap;
  }

  body {
    font-family: var(--font-primary), Arial, Helvetica, sans-serif;
  }


`;

export default typoStyles;
