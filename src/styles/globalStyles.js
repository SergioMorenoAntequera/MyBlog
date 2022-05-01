// globalStyles.js
import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;500;700;900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500;900&display=swap');

  html, body {

    ${({theme}) => `
      font-family: ${theme.typography.fontFamilies.roboto};
      font-weight: ${theme.typography.fontWeights.light};
      color: ${theme.palette.primary.main};
      font-size: ${theme.typography.htmlFontSize};
    `}

  }

  .unstyled-link {
    ${({theme}) => `
      text-decoration: none; 
      color: ${theme.palette.primary.main};
    `}

    transition: .1s;
    :hover {
      ${({theme}) => `
      color: ${theme.palette.primary.dark};
    `}
    }
  }  
`
 
export default GlobalStyle;