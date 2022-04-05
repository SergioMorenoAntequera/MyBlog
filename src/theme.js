
const THEME_BASES = Object.freeze({
    palette: {
        mode:"light",
        common: {
            black: "#000",
            white: "#fff",
        },
        primary: {
            main: "#1a1a1a",
            light: "#ededed",
            dark: "#000000",
            constrast: "#ffffff",
        },
        secondary: {
            main: "#af0716",
            light: "#b81b29",
            dark: "#93010e",
            constrast: "#ffffff",
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
            light:"300",
            regular:"700",
            bold:"900",
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
        thin:`solid 1px ${THEME_BASES.palette.primary.main}`
    },
    shape: {
        borderRadius: "4px", 
    },
    transitions: {
        fast: ".1s",
        medium: ".3s",
        slow: ".6s"
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
            font-weight: ${THEME_BLOCKS.typography.fontWeights.regular};
            border-radius: ${THEME_BLOCKS.shape.borderRadius};
            border: ${THEME_BLOCKS.borders.none};
            transition: ${THEME_BLOCKS.transitions.fast};
            :hover {
                background-color: ${THEME_BLOCKS.palette.primary.light};
            }
        `,
        contained: `
            box-shadow: ${THEME_BLOCKS.shadows.light};
            background:  ${THEME_BLOCKS.palette.primary.main};
            color:  ${THEME_BLOCKS.palette.primary.constrast};
            :hover {
                background-color: ${THEME_BLOCKS.palette.primary.dark};
            }
        `,
        outlined: `
            background:  ${THEME_BLOCKS.palette.primary.constrast};
            color:  ${THEME_BLOCKS.palette.primary.main};
            border: ${THEME_BLOCKS.borders.thin};
            :hover {
                background-color: ${THEME_BLOCKS.palette.primary.light};
            }
        `
    },
    typography: {
       h1 : {},
       caption: {},
       body: {},
    },  
});

export default APP_THEME