import styled from 'styled-components';

export const AddComment = styled.div`
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    width: 100%;
    margin-top: 1em;

    input {
        border: none;
        height: 100%;
        margin: 0 1em;
        font-size: ${({theme}) => theme.typography.fontSizes.l};
        border-bottom: ${({theme}) => theme.borders.regular};
        &:focus {
            outline: none !important;
        }
    }
`;