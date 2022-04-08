import ReactionsAPI from "api/reactionsAPI"
import { addReaction, removeReaction as removeReactionAction } from "features/reactionsSlice";
const { createAsyncThunk } = require("@reduxjs/toolkit")

const createReaction = createAsyncThunk(
    'Reactions/createReaction',
    async (newReaction, {dispatch}) => {
        if(!newReaction) return
        var newReactionCreated = await ReactionsAPI.createNew(newReaction) 
        
        dispatch(addReaction(newReactionCreated))
    }
)

const removeReaction = createAsyncThunk(
    'Reactions/removeReaction',
    async (id, {dispatch}) => {
        if(!id) return
        ReactionsAPI.remove(id)
        
        dispatch(removeReactionAction({id:id, attachedTo:attachedTo}))
    }
)


const fetchReactionsByPost = createAsyncThunk(
    'Reactions/fetchReactionsByPost',
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