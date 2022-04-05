import { createReaction, getReactionByPost, removeReaction } from "actions/reactionsActions"
import { useUser } from "api/auth"
import { useDispatch, useSelector } from "react-redux"
import ReactionsTypes from "types/reactions"
import useCallbackSelector from "./useCallbackSelector"


export default function useReactions(attachedToId, reactionType) {

    let reactionsId = useCallbackSelector(
        state => state.reactionsEntity.reactions.byAttachedTo[attachedToId],
        getReactionByPost(attachedToId)
    )
    reactionsId = reactionsId ?? []
    let reactionsData = useSelector(state => {
        return reactionsId.map(reactionId => 
            state.reactionsEntity.reactions.byId[reactionId]
        );
    })
    
    const dispatch = useDispatch()
    const { user } = useUser()
    const userReactions = reactionsData.filter(it => it.userUid === user?.uid)

    const userReactionsByType = {}
    userReactions.forEach(it => userReactionsByType[it.type] = it )

    const userReactionsByGroup = {}
    userReactions.forEach(reaction => {
        var reactionGroup = -1
        Object.keys(ReactionsTypes.TYPES).forEach(key => {
            let possibleType = ReactionsTypes.TYPES[key]
            if(possibleType.type !== reaction.type) return
            reactionGroup = possibleType.group
        })
        userReactionsByGroup[reactionGroup] = {...reaction}
    })


    function toggleReaction() {
        const userReaction = userReactionsByGroup[reactionType.group]
        const newReaction = {
            userUid: user.uid, 
            type: reactionType.type, 
            attachedTo: attachedToId, 
            attachedToType: ReactionsTypes.ATTACHED_TO_TYPES.disabled
        }
        
        if(!userReaction){
            dispatch(createReaction(newReaction))
            return
        } 
            
        dispatch(removeReaction({
            id: userReaction.id,
            attachedTo: attachedToId,
        }))

        if(userReaction.type !== reactionType.type) {
            dispatch(createReaction(newReaction))
        }
    }

    return  {
        reactionsData,
        userReactionsByType,
        toggleReaction
    }
}