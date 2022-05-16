import styledComponents from "styled-components";
import { typography, space  } from 'styled-system'

const H1 = styledComponents.h1`
  font-size: 3rem;
  margin-bottom: 10px; 

  ${typography}
  ${space}
`

export default H1