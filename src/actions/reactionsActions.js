import { ADD_REACTION } from "actions/ReactionsActionTypes";
import * as ReactionsAPI from 'api/Reactions'

export const createReaction = (newReaction) => async (dispatch) => {
    if(!newReaction) return
    var newReactionCreated = await ReactionsAPI.createNew(newReaction)
    
    dispatch({
        type: ADD_REACTION,
        payload: newReactionCreated
    })
}

export const getReactionByPost = (postId) => async (dispatch) => {
    if(!postId) return
    var fetchedReactions = await ReactionsAPI.getByPost(postId)

    fetchedReactions.forEach(Reaction => {
        dispatch({
            type: ADD_REACTION,
            payload: Reaction
        })
    })
}
