
const THEME_BASES = Object.freeze({
    palette: {
        mode:"light",
        common: {
            black: "#000",
            white: "#fff",
        },
        primary: {
            main: "#000",
            light: "#fff",
            dark: "#fff",
            constrastText: "#fff",
        },
        secondary: {
            main: "#000",
            light: "#fff",
            dark: "#fff",
            constrastText: "#fff",
        },
        divider: "rgba(255, 255, 255, 0.12)" 
    },
    typography: {
        htmlFontSize: "16px",
        fontSizes: {
            xs: ".5rem",
            s: ".75rem",
            m: "1rem",
            l: "1.50rem",
            xl: "2rem",
            xxl: "3rem",
        },
        fontWeights: {
            extraLight:"100",
            light:"300",
            regular:"500",
            bold:"700",
            extraBold:"900",
        },
        lineHeights: {
            
        }
    },
}) 

const THEME_BLOCKS = Object.freeze({
    ...THEME_BASES,

    shadows: {
        none: "none",
        light: "rgba(149, 157, 165, 0.2) 0px 8px 24px;"
    },
    borders : {
        none:"none",
        thin:`solid 1px ${THEME_BASES.palette.common.black}`
    },
    shape: {
        borderRadius: "4px", 
    }
})

const APP_THEME = Object.freeze({
    ...THEME_BLOCKS,
    
    button: {
        text: `
            cursor: pointer;
            padding: 1rem 1.5rem;
            background: none;
            font-size: ${THEME_BLOCKS.typography.fontSizes.m};
            border-radius: ${THEME_BLOCKS.shape.borderRadius};
            border: ${THEME_BLOCKS.borders.none};
        `,
        contained: `
            box-shadow: ${THEME_BLOCKS.shadows.light};
            font-weight: ${THEME_BLOCKS.typography.fontWeights.extraBold};
            background:  ${THEME_BLOCKS.palette.common.black};
            color:  ${THEME_BLOCKS.palette.common.white};
        `,
        outlined: `
            background:  ${THEME_BLOCKS.palette.common.white};
            color:  ${THEME_BLOCKS.palette.common.black};
            border: ${THEME_BLOCKS.borders.thin};
        `
    },
    typography: {
        h1: {
            fontSize: "clamp(2.625rem, 1.2857rem + 3.5714vw, 4rem)",
            fontWeight: THEME_BLOCKS.typography.fontWeights.extraBold,
            lineHeight: 1.1142857142857143,
            color: "#0A1929"
        },
        h2: {
            fontSize: "clamp(1.5rem, 0.9643rem + 1.4286vw, 2.25rem)",
            fontWeight: 800,
            lineHeight: 1.2222222222222223,
            color: "#132F4C"
        },
        h3: {
            fontSize: "2.25rem",
            lineHeight: 1.2222222222222223,
            letterSpacing: 0.2,
            fontWeight: 400
        },
        h4: {
            fontSize: "1.75rem",
            lineHeight: 1.5,
            letterSpacing: 0.2,
            fontWeight: 400
        },
        body1: {
            fontSize: "1rem",
            lineHeight: 1.5,
            letterSpacing: 0,
            fontWeight: 400
        },
        body2: {
            fontSize: "0.875rem",
            lineHeight: 1.5,
            letterSpacing: 0,
            fontWeight: 400
        },
        caption: {
            display: "inline-block",
            fontSize: "0.75rem",
            lineHeight: 1.5,
            letterSpacing: 0,
            fontWeight: 700,  
        },
        subtitle1: {
            fontSize: "1.125rem",
            lineHeight: 1.3333333333333333,
            letterSpacing: 0,
            fontWeight: 500,
        },
        subtitle2: {
            fontWeight: 500,
            fontSize: "0.875rem",
            lineHeight: 1.57
        },
        overline: {
            fontWeight: 400,
            fontSize: "0.75rem",
            lineHeight: 2.66,
            textTransform: "uppercase"
        }
    },  
});

export default APP_THEME