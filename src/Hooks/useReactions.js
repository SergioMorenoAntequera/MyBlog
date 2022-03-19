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
    
    let reactions = <ReactionsCont reactions={reactionsData}/>
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

    const dispatch = useDispatch()

    function toggleReaction() {
        const userReaction = userReactionsByGroup[reactionType.group]
        
        if(!userReaction){
            dispatch(createReaction({
                userUid: user.uid, 
                type: reactionType.type, 
                attachedTo: attachedToId, 
                attachedToType: ReactionsTypes.ATTACHED_TO_TYPES.comment
            }))
            return
        } 
            
        dispatch(
            removeReaction({
                id: userReaction.id,
                attachedTo: attachedToId,
            })
        )

        if(userReaction.type !== reactionType.type) {
            dispatch(createReaction({
                userUid: user.uid, 
                type: reactionType.type, 
                attachedTo: attachedToId, 
                attachedToType: ReactionsTypes.ATTACHED_TO_TYPES.comment
            }))
        }
    }

    return  {
        reactionsData,
        reactions,
        userReactionsByType,
        toggleReaction
    }
}

function ReactionsCont({reactions}) {
    if(!reactions.length) return <></>
    return (<div>
        {reactions?.map(reaction => 
            // <Reaction key={Reaction.id} Reaction={Reaction}/>
            <p key={reaction.id} > {reaction.toString()} </p>
        )}
    </div>)
}
