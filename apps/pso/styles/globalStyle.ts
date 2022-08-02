import { createGlobalStyle } from 'styled-components';
import BootstrapReboot from './bootstrapGrid';
import BootstrapGrid from './bootstrapReboot';


const GlobalStyle = createGlobalStyle`
${BootstrapReboot}
${BootstrapGrid}
`; 

export default GlobalStyle; 