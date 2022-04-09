import ReactionsAPI from 'api/reactionsAPI'
import { addReaction, removeReaction as removeReactionAction } from "features/reactionsSlice";

export const createReaction = (newReaction) => async (dispatch) => {
    if(!newReaction) return
    var newReactionCreated = await ReactionsAPI.createNew(newReaction) 
    
    dispatch(addReaction(newReactionCreated))
}

export const removeReaction = ({id, attachedTo}) => async (dispatch) => {
    if(!id) return
    ReactionsAPI.remove(id)
    
    dispatch(removeReactionAction({id:id, attachedTo:attachedTo}))
}

export const getReactionByPost = (postId) => async (dispatch) => {
    if(!postId) return
    var fetchedReactions = await ReactionsAPI.getByPost(postId)

    fetchedReactions.forEach(reaction => {
        dispatch(addReaction(reaction))
    })
}
