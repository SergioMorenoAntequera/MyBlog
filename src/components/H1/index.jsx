import styledComponents from "styled-components";


const H1 = styledComponents.h1`

  font-size: 2rem;
  margin-bottom: 10px; 

  ${props => `
    background: white;
    color: ${props.color ?? "black"};
  `}
`

export default H1