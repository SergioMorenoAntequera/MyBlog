import styled from 'styled-components';

const baseNotAxis = "2px"
// const baseAxis = "3px"

const Separator = styled.div`
    display: block;
    background-color: ${({theme})=>theme.palette.primary.light};

    width: ${props => props.axis === "x" ? "100%" : `${baseNotAxis}`};
    height: ${props => props.axis === "x" ? `${baseNotAxis}` : "100%"};
`

Separator.defaultProps = {
    axis:"x",
}

export default Separator