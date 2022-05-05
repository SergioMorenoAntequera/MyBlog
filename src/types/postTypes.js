import Model from "./Model"

export default class Post extends Model {

    title = ""
    body = ""
    userId = ""
    status = PostStatus.DRAFT

    constructor(userId) {
        super()
        this.userId = userId
    }
}

export const PostStatus = Object.freeze({
    DRAFT: "PostStatus.DRAFT",
    PUBLIC: "PostStatus.PUBLIC",
})