import styled from 'styled-components';

export const Reaction = styled.div`
    display: flex;
    color: ${({theme})=>theme.palette.primary.main};

    & > div {
        cursor: pointer;
        display: flex;
    }
`;