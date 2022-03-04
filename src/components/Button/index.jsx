const { default: styledComponents } = require("styled-components");


const Button = styledComponents.button`
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  cursor: pointer;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

Button.defaultProps = {
    primary: true,
}

export default Button;