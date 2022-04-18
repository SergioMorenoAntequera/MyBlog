import styled from 'styled-components';

export const NewPostPage = styled.div`
  min-height: 90vh;
  display: grid;
  grid-template-rows: auto auto 1fr auto;
`;

export const TitleInput = styled.input`
    width: 100%;
    padding: .5em 0;

    border: none;
    border-bottom: solid 1px ${({theme})=>theme.palette.primary.main};
    border-radius: 0px;
    

    font-size: ${({theme})=>theme.typography.fontSizes.l};
    
    :focus {
        outline: none;
    }
`;

export const BodyTextArea = styled.textarea`
    border: none;
    margin: 2em 0;
    width: 100%;

    :focus {
        outline: none;
    }
`;