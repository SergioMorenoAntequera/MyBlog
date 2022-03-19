import React from 'react'
import useReactions from 'hooks/useReactions'
import "./style.scss"

export default function Reaction({attachedToId, reactionType}) {

    const { reactionsData, userReactionsByType, toggleReaction } = useReactions(attachedToId, reactionType)

    return (<div className='Reaction'>
        <div onClick={toggleReaction} style={{cursor:"pointer"}}>
            {!userReactionsByType[reactionType.type] && reactionType.unActiveIcon()}
            {userReactionsByType[reactionType.type] && reactionType.activeIcon()}
            {reactionsData.filter(it=>it.type === reactionType.type).length}
        </div>
    </div>)
}
