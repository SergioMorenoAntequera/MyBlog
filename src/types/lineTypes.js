import Model from "./Model"

export default class Line extends Model {

    constructor(postId) {
        super()
        this.post = postId
    }
    
    post = ""
    type = LineTypes.PARAGRAPH
    content = ""
}

export const LineTypes = Object.freeze({
    PARAGRAPH: "LineTypes.paragraph",
})
