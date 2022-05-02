import LinesAPI from "api/linesAPI"
import { addLine, removeLine as removeLineAction } from "features/linesSlice";
const { createAsyncThunk } = require("@reduxjs/toolkit")

const createLine = createAsyncThunk(
    'lines/createLine',
    async (newLine, {dispatch}) => {
        if(!newLine) return

        LinesAPI.createNew(newLine) 
        dispatch(addLine(newLine))
        return newLine
    }
)

const removeLine = createAsyncThunk(
    'lines/removeLine',
    async ({id, attachedTo}, {dispatch}) => {
        if(!id) return
        LinesAPI.remove(id)
        dispatch(removeLineAction({id:id, attachedTo:attachedTo}))
    }
)

const fetchLinesByPost = createAsyncThunk(
    'lines/fetchLinesByPost',
    async (postId, {dispatch}) => {
        if(!postId) return

        var fetchedLines = await LinesAPI.getByPost(postId)
        fetchedLines.forEach(Line => {
            dispatch(addLine(Line))
        })
    }
)


const LinesThunks = {
    createLine,
    removeLine,
    fetchLinesByPost
}
export default LinesThunks