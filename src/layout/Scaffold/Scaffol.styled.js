import styled from 'styled-components';

export const Scaffold = styled.div`
    display: grid;
    grid-template-columns: minmax(80px, 20%) 80% minmax(80px, 20%);

    @media (max-width: 800px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto 1fr;
    }
`;
