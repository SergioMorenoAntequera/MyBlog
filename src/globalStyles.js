// globalStyles.js
import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  html, body {

    ${props => `
      font-family: ${props.theme.typography.fontFamilies.helvetica};
      font-weight: ${props.theme.typography.fontWeights.light};
    `}

  }
`
 
export default GlobalStyle;