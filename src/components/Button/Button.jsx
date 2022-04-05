const { default: styledComponents } = require("styled-components");


const Button = styledComponents.button`

    ${props => props.theme.button.text}
    ${props => props.outlined ? props.theme.button.outlined:""}
    ${props => props.contained ? props.theme.button.contained:""}

    ${props => props.background ? `background: ${props.background}` : ""};
    ${props => props.color ? `color: ${props.color}` : ""};
`;

Button.defaultProps = {
    primary: true,
}

export default Button;