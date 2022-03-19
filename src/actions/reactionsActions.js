import { ADD_REACTION, REMOVE_REACTION } from "actions/reactionsActionTypes";
import * as ReactionsAPI from 'api/reactions'

export const createReaction = (newReaction) => async (dispatch) => {
    if(!newReaction) return
    var newReactionCreated = await ReactionsAPI.createNew(newReaction)
    
    dispatch({
        type: ADD_REACTION,
        payload: newReactionCreated
    })
}

export const removeReaction = ({id, attachedTo}) => async (dispatch) => {
    if(!id) return
    ReactionsAPI.remove(id)
    
    dispatch({
        type: REMOVE_REACTION,
        payload: {id:id, attachedTo:attachedTo}
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
