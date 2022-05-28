import Model from "./Model"

export default class Comment extends Model {

    body = ""
    userUid = ""
    attachedTo = ""

    constructor({userUid, body, attachedTo}) {
        super()
        this.body = body
        this.userUid = userUid
        this.attachedTo = attachedTo
    }
}