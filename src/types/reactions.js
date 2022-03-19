import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { AiOutlineDislike, AiFillDislike } from "react-icons/ai";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";

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
    "save": {
        type: "ReactionType.SAVE",
        unActiveIcon: BsBookmark,
        activeIcon: BsBookmarkFill,
        group: 1
    },
})


const ATTACHED_TO_TYPES = Object.freeze({
    "post": "ReactionAttachedToType.POST",
    "comment": "ReactionAttachedToType.COMMENT"
})

const ReactionsTypes = {TYPES, ATTACHED_TO_TYPES}
export default ReactionsTypes