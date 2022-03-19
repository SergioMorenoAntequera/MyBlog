import React from 'react'
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import useReactions from 'hooks/useReactions'
import "./style.scss"

export default function Reaction({attachedToId, reactionType}) {

    const { reactionsData, userReactionsByType, toggleReaction } = useReactions(attachedToId, reactionType)

    return (<div className='Reaction'>
        <div onClick={toggleReaction} style={{cursor:"pointer"}}>
            {!userReactionsByType[reactionType.id] && reactionType.unActiveIcon()}
            {userReactionsByType[reactionType.id] && reactionType.activeIcon()}
            {reactionsData.filter(it=>it.type === reactionType.id).length}
        </div>
    </div>)
}
