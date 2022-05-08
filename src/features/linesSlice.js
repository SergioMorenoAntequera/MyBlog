const { createSlice } = require("@reduxjs/toolkit")


const initialState = {
    lines: {
        byId: {},
        
        allIds: [],
        byPost: {},
    }, 
}

const linesSlice = createSlice({
    name: "lines",
    initialState,
    reducers: {
        addLine: (state, {payload}) => {
            let lines = state.lines
            lines.byId[payload.id] = payload
            lines.allIds.push(payload.id)
            
            lines.byPost[payload.post] = lines.byPost[payload.post] ?? []
            lines.byPost[payload.post].push(payload.id)
        },
        removeLine: (state, {payload}) => {
            delete state.lines.byId[payload.id]
            
            state.lines.allIds = state.lines.allIds.filter(l=>l != payload.id)
            state.lines.byPost[payload.post] = state.lines.byPost[payload.post].filter(l=>l != payload.id)
        },
        updateLine: (state, {payload}) => {
            state.lines.byId[payload.id] = payload;
        }
    }
})

export const { addLine, removeLine, updateLine } = linesSlice.actions
const linesReducer = linesSlice.reducer
export default linesReducer