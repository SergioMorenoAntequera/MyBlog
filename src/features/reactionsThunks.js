import ReactionsAPI from "api/reactionsAPI"
import { addReaction, removeReaction as removeReactionAction } from "features/reactionsSlice";
const { createAsyncThunk } = require("@reduxjs/toolkit")

const createReaction = createAsyncThunk(
    'reactions/createReaction',
    async (newReaction, {dispatch}) => {
        if(!newReaction) return
        ReactionsAPI.createNew(newReaction)
        dispatch(addReaction(newReaction))
    }
)

const removeReaction = createAsyncThunk(
    'reactions/removeReaction',
    async ({id, attachedTo}, {dispatch}) => {
        if(!id) return
        ReactionsAPI.remove(id)
        dispatch(removeReactionAction({id:id, attachedTo:attachedTo}))
    }
)


const fetchReactionsByPost = createAsyncThunk(
    'reactions/fetchReactionsByPost',
    async (postId, {dispatch}) => {
        if(!postId) return
        var fetchedReactions = await ReactionsAPI.getByPost(postId)

        fetchedReactions.forEach(reaction => {
            dispatch(addReaction(reaction))
        })
    }
)


const ReactionsThunks = {
    createReaction,
    removeReaction,
    fetchReactionsByPost
}
export default ReactionsThunks