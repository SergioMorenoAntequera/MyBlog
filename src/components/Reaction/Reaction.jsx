import React from 'react'
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import useReactions from 'hooks/useReactions'
import "./style.scss"

export default function Reaction({attachedToId, reactionType}) {

    const { reactionsData, userReactionsByType, toggleReaction } = useReactions(attachedToId, reactionType)

    return (<div className='Reaction'>
        <div onClick={toggleReaction} style={{cursor:"pointer"}}>
            {!userReactionsByType[reactionType] && <AiOutlineHeart />}
            {userReactionsByType[reactionType] && <AiFillHeart />}
            {reactionsData.filter(it=>it.type === reactionType).length}
        </div>
    </div>)
}
