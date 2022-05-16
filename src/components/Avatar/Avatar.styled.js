import styled from 'styled-components';
import { layout } from 'styled-system'

export const Avatar = styled.div`

    display: inline-block;
    
    .hidden {
        opacity: 0;
    }
    
    .Image {
        border-radius: 100%;
        
        width: ${ props=> props.width ?? "30px" };
        height: ${ props=> props.height ?? "30px" };
    }
`;


