import { H1 } from "components"
import H2 from "components/H2"
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
    TITLE: "LineTypes.title",
    SUBTITLE: "LineTypes.subtitle",
    IMAGE: "LineTypes.image"
})

export const renderLine = (line, editingProps) => {
    if(editingProps) return <input value={line.content} {...editingProps}/>

    switch (line.type) {
        case LineTypes.PARAGRAPH: {
            return <p key={line.id}> {line.content} </p>
        }
        case LineTypes.TITLE: {
            return <H1 key={line.id}> {line.content} </H1>
        }
        case LineTypes.SUBTITLE: {
            return <H2 key={line.id}> {line.content} </H2>
        }
        case LineTypes.IMAGE: {
            return <img key={line.id} src={line.content} alt={line.content} />
        }
    }
}