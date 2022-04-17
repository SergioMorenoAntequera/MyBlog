import styled from 'styled-components';

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