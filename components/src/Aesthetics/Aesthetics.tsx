import React, { ReactNode } from 'react';
import styled from 'styled-components';
import bootstapGrid from '../../public/styles/bootstrapGrid';
import bootstapReboot from '../../public/styles/bootstrapReboot';
import colors from '../../public/styles/colors';
import typography from '../../public/styles/typography';
import fonts from '../../public/styles/fonts';
export interface AestheticsProps {
  program?: string;
  children: ReactNode;
}

const CleanUpStyle = (idName: string) => {
  const elem = document.getElementById(idName);
  if (elem != null || elem != undefined) {
    if (elem.parentNode) {
      elem.parentNode.removeChild(elem);
    }
  }
};

const appender = (styles: any, idName: string) => {
  CleanUpStyle(idName);
  const styleElement = document.createElement('style');
  styleElement.setAttribute('id', idName);
  styleElement.appendChild(document.createTextNode(styles));
  document.head.appendChild(styleElement);
};

const Aesthetics: React.FC<AestheticsProps> = ({ children }) => {
  React.useEffect(() => {
    appender(bootstapGrid, 'bootstrap-inject-style');
    appender(fonts, 'fonts-inject-style');
    appender(colors, 'colors-inject-style');
    appender(typography, 'typography-inject-style');
  }, []);

  return <StyleWrapper>{children}</StyleWrapper>;
};

const StyleWrapper = styled.div`
  ${bootstapReboot}
`;

export default Aesthetics;  
