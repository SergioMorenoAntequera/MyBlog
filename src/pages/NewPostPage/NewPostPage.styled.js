import styled from 'styled-components';


export const NewPostPage = styled.div`
  min-height: 90vh;
`;

export const TitleInput = styled.input`
    width: 100%;
    padding: .5em .5em;

    border: none;
    border-left: solid 4px ${({theme})=>theme.palette.primary.main};
    border-radius: 0px;
    
    font-size: ${({theme})=>theme.typography.fontSizes.l};
    
    :focus {
        outline: none;
    }
`;

export const BodyTextArea = styled.textarea`
    border: none;
    margin: 2em 0;
    padding: .5em .5em;
    
    height: auto;

    width: 100%;
    border-left: solid 4px ${({theme})=>theme.palette.primary.main};

    :focus {
        outline: none;
    }
`;