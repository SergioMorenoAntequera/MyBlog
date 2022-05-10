import Model from "./Model"

export default class Line extends Model {

    post = ""
    type = LineTypes.PARAGRAPH
    content = ""
    
    constructor(postId) {
        super()
        this.post = postId
    }
    
}

export const LineTypes = Object.freeze({
    PARAGRAPH: "LineTypes.paragraph",
    IMAGE: "LineTypes.image"
})
