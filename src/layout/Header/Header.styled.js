import styled from 'styled-components';


export const Header = styled.div`
  min-width: 80px;
  height: 100vh;

  @media (max-width: 800px) {
    height: 100%;
    padding: 1em;
    flex-direction: row;
  }

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

