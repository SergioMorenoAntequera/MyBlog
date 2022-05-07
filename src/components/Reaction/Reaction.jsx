import React from 'react'
import useReactions from 'hooks/useReactions'
import * as S from "./Reaction.styled"

export default function Reaction({className, attachedToId, reactionType, onClick}) {

    const { reactionsData, userReactionsByType, toggleReaction } = useReactions(attachedToId, reactionType)

    return (<S.Reaction className={className} onClick={onClick}>
        <div onClick={toggleReaction}>
            {!userReactionsByType[reactionType.type] && reactionType.unActiveIcon()}
            {userReactionsByType[reactionType.type] && reactionType.activeIcon()}
            
            {reactionsData?.filter(it=>it.type === reactionType.type).length ?? 0}
        </div>
    </S.Reaction>)
}
