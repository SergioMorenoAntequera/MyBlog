import styled from 'styled-components';
import { space } from 'styled-system'


const Button = styled.button`

    ${ space }
    ${props => {
        let base = props.theme.button.base    
        switch(props.variant) {
            case "outlined": {
                base = base + props.theme.button.outlined.base;
                if(props.color === "primary") base = base + props.theme.button.outlined.primary;
                if(props.color === "secondary") base = base + props.theme.button.outlined.secondary;
                break;
            }
            case "contained": {
                base = base + props.theme.button.contained.base
                if(props.color === "primary") base = base + props.theme.button.contained.primary;
                if(props.color === "secondary") base = base + props.theme.button.contained.secondary;
                break;
            } 
            default: {
                base = base + props.theme.button.text.base;
                if(props.color === "primary") base = base + props.theme.button.text.primary;
                if(props.color === "secondary") base = base + props.theme.button.text.secondary;
            }
        }
        return base
    }}

    
`;

Button.defaultProps = {  
    variant:"text",
    color:"primary"
}  

export default Button;