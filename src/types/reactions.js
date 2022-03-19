
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { AiOutlineDislike, AiFillDislike } from "react-icons/ai";

const TYPES = Object.freeze({
    "like": {
        type: "ReactionType.LIKE",
        unActiveIcon: AiOutlineHeart,
        activeIcon: AiFillHeart,
        group: 0
    },
    "disLike": {
        type: "ReactionType.DISLIKE",
        unActiveIcon: AiOutlineDislike,
        activeIcon: AiFillDislike,
        group: 0
    },
})


const ATTACHED_TO_TYPES = Object.freeze({
    "post": "ReactionAttachedToType.POST",
    "comment": "ReactionAttachedToType.COMMENT"
})

const ReactionsTypes = {TYPES, ATTACHED_TO_TYPES}
export default ReactionsTypes