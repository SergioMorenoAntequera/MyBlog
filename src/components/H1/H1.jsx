import styled from 'styled-components';
import { typography, space  } from 'styled-system'
import theme from 'utils/theme';

const H1 = styled.h1`
  font-size: 3rem;
  margin-bottom: 10px;
  font-weight: ${({theme}) => theme.typography.fontWeights.bold};

  ${typography}
  ${space}
`

export default H1