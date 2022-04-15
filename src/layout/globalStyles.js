// globalStyles.js
import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;500;700;900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500;900&display=swap');

  html, body {

    ${({theme}) => `
      font-family: ${theme.typography.fontFamilies.roboto};
      font-weight: ${theme.typography.fontWeights.light};
    `}

  }

  .unstyled-link {
    ${({theme}) => `
      text-decoration: none; 
      color: ${theme.palette.common.black};
    `}
  }  
`
 
export default GlobalStyle;