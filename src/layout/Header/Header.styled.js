import { Sidebar } from 'layout/Sidebar/Sidebar.styled';
import styled from 'styled-components';


export const Header = styled(Sidebar)`
  border-left: none;
  border-right: ${({theme})=>theme.borders.thin};
`;

