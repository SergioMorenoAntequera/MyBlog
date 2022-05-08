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
    const userReaction = userReactions?.find(reaction => reaction.type == reactionType.type)
    const userReactionsByGroup = {}
    userReactions?.map(userReaction => {
        Object.keys(ReactionsTypes.TYPES).find(rt => {
            let reactionType = ReactionsTypes.TYPES[rt]

            if(reactionType.type !== userReaction.type) return;
            userReactionsByGroup[reactionType.group] = userReaction
        })
    })


    function toggleReaction() {
        if(!user) return;
        const userReactionToGroup = userReactionsByGroup[reactionType.group]
        const newReaction = new Reaction(reactionType, attachedToId, user.uid)
        
        if(!userReactionToGroup){
            dispatch(ReactionsThunks.createReaction(newReaction))
            return
        } 
            
        dispatch(ReactionsThunks.removeReaction({
            id: userReactionToGroup.id,
            attachedTo: attachedToId,
        }))

        if(userReactionToGroup.type !== reactionType.type) {
            dispatch(ReactionsThunks.createReaction(newReaction))
        }
    }

    return  {
        reactionsData,
        userReacted: !!userReaction,
        toggleReaction
    }
}