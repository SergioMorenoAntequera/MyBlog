import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { AiOutlineDislike, AiFillDislike } from "react-icons/ai";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import Model from "./Model";

export class Reaction extends Model {
    

    attachedToType = ATTACHED_TO_TYPES.disabled
    constructor(type, attachedToId, userUid) {
        super()
        this.type = type;
        this.attachedTo = attachedToId;
        this.userUid =  userUid;
    }

    toFirebase() {
        return {...this,
            type: this.type.type
        }
    }
}

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
    "comment": "ReactionAttachedToType.COMMENT",
    "disabled": "ReactionAttachedToType.DISABLED"
})

const ReactionsTypes = {TYPES, ATTACHED_TO_TYPES}
export default ReactionsTypes