import { getReactionByPost } from "actions/reactionsActions"
import { useSelector } from "react-redux"
import useCallbackSelector from "./useCallbackSelector"


export default function useReactions(attachedToId, user) {

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
    
    const alreadyReacted = !!reactionsData.find(it=>it.userUid === user?.uid)
    return  {
        reactionsData,
        reactions,
        alreadyReacted
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
