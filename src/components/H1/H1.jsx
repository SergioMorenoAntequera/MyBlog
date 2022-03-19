import styledComponents from "styled-components";


const H1 = styledComponents.h1`

  font-size: 2rem;
  margin-bottom: 10px; 

  ${({theme}) => `
    ${theme.border.test};
    background: ${theme.colors.secondary};
    color: ${theme.colors.primary};
  `}
`

export default H1