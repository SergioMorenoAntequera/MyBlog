import { Sidebar } from 'layout/Sidebar/Sidebar.styled';
import styled from 'styled-components';


export const Header = styled(Sidebar)`
  justify-content: space-between;
  border-right: ${({theme})=>theme.borders.thin};
`;

