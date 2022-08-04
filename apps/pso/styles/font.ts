import { css } from 'styled-components';

const rootColorStyles = css`
:root {
    --zoom: 0px;
    --font-primary: 'Barlow-Regular';
    --font-secondary: "BarlowCondensed-Regular"
}

body {
    font-family: 'font-primary', 'Arial', 'Helvetica', 'sans-serif';
}

.font-primary {
    font-family: 'font-primary', 'Arial', 'sans-serif';
}

.font-secondary {
    font-family: 'font-secondary', 'Arial', 'sans-serif';
}
`;

export default rootColorStyles;

