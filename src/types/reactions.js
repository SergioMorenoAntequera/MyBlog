
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { AiOutlineDislike, AiFillDislike } from "react-icons/ai";

const TYPES = Object.freeze({
    "like": {
        id: "ReactionType.LIKE",
        unActiveIcon: AiOutlineHeart,
        activeIcon: AiFillHeart,
    },
    "disLike": {
        id: "ReactionType.DISLIKE",
        unActiveIcon: AiOutlineDislike,
        activeIcon: AiFillDislike,
    },
})


const ATTACHED_TO_TYPES = Object.freeze({
    "post": "ReactionAttachedToType.POST",
    "comment": "ReactionAttachedToType.COMMENT"
})

const ReactionsTypes = {TYPES, ATTACHED_TO_TYPES}
export default ReactionsTypes