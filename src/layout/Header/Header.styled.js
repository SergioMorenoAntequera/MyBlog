import styled from 'styled-components';

const HeaderWidth = "79px";

export const Header = styled.div`
  width: ${HeaderWidth};
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
  margin-right: 1em;

  & > * {
    text-align: center;
  }
`;

