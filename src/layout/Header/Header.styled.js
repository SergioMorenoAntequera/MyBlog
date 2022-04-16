import styled from 'styled-components';



export const Header = styled.div`
  width: 79px;
  height: 100vh;

  position: sticky;
  top: 0;
  
  background-color: ${({theme})=>theme.palette.common.white};
  border-right: ${({theme})=>theme.borders.thin};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 3em .5em;

  & > * {
    text-align: center;
  }
`;

