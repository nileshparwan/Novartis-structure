import { createGlobalStyle } from 'styled-components';
import BootstrapReboot from './bootstrapGrid';
import BootstrapGrid from './bootstrapReboot';
import Colors from './colors';
import Font from './font';


const GlobalStyle = createGlobalStyle`
${BootstrapReboot}
${BootstrapGrid}
${Colors}
${Font}
`; 

export default GlobalStyle; 