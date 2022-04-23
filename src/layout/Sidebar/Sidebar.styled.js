import styled from 'styled-components';


export const Sidebar = styled.div`
  position: sticky;
  display: flex;
  flex-direction: column;
  
  align-items: center;
  
  height: 100vh;
  min-width: 80px;
  top: 0;
  padding: 3em .5em;

  @media (max-width: 800px) {
    height: 100%;
    padding: 1em;
    flex-direction: row;
  }
`;

export const RightSidebar = styled(Sidebar)`
  justify-content: end;
  text-align: left;
  border-left: ${({theme})=>theme.borders.thin};
  
  .all-rights-reserved {
    word-wrap: break-word;
    & p:first-child {
      margin-bottom: 10px;
    }
  }
`;