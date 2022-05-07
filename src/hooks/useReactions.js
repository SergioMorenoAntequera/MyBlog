import { useUser } from "api/auth"
import ReactionsThunks from "features/reactionsThunks"
import { useDispatch, useSelector } from "react-redux"
import ReactionsTypes, { Reaction } from "types/reactionsType"
import useCallbackSelector from "./useCallbackSelector"


export default function useReactions(attachedToId, reactionType) {

    const dispatch = useDispatch()
    const { user } = useUser()

    let reactionsData = useCallbackSelector(
        state => state.reactionsEntity.reactions.byAttachedTo[attachedToId],
        ReactionsThunks.fetchReactionsByPost(attachedToId),
        state => state.reactionsEntity.reactions.byId  
    )
    
    const userReactions = reactionsData?.filter(it => it.userUid === user?.uid)

    const userReactionsByType = {}
    userReactions?.forEach(it => userReactionsByType[it.type] = it )

    const userReactionsByGroup = {}
    userReactions?.forEach(reaction => {
        var reactionGroup = -1
        Object.keys(ReactionsTypes.TYPES).forEach(key => {
            let possibleType = ReactionsTypes.TYPES[key]
            if(possibleType.type !== reaction.type) return
            reactionGroup = possibleType.group
        })
        userReactionsByGroup[reactionGroup] = {...reaction}
    })


    function toggleReaction() {
        if(!user) return;
        const userReaction = userReactionsByGroup[reactionType.group]
        const newReaction = new Reaction(reactionType, attachedToId, user.uid)
        
        // if(!userReaction){
            dispatch(ReactionsThunks.createReaction(newReaction))
            return
        // } 
            
        // dispatch(ReactionsThunks.removeReaction({
        //     id: userReaction.id,
        //     attachedTo: attachedToId,
        // }))

        // if(userReaction.type !== reactionType.type) {
        //     dispatch(ReactionsThunks.createReaction(newReaction))
        // }
    }

    return  {
        reactionsData,
        userReactionsByType,
        toggleReaction
    }
}