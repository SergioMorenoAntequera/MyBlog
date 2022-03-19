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
    const userReactionsByType = {}
    reactionsData.filter(it => it.userUid === user?.uid).forEach(it =>  userReactionsByType[it.type] = it )

    const dispatch = useDispatch()

    function toggleReaction() {
        const userReaction = userReactionsByType[reactionType]
        if(!userReaction){
            dispatch(
                createReaction({
                    userUid: user.uid, 
                    type: reactionType, 
                    attachedTo: attachedToId, 
                    attachedToType: ReactionsTypes.ATTACHED_TO_TYPES.comment
                })
            )
        } else {
            dispatch(
                removeReaction({
                    id: userReaction.id,
                    attachedTo: attachedToId,
                })
            )
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
