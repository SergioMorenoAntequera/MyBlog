import styledComponents from "styled-components";


const Caption = styledComponents.span`

  ${props => props.theme.typography.caption}

`

export default Caption