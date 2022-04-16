import styledComponents from "styled-components";


const H2 = styledComponents.h2`

  font-size: ${({theme})=>theme.typography.fontSizes.l};
  font-weight: ${({theme})=>theme.typography.fontWeights.regular};
  

`

export default H2