import { H1 } from "components"
import H2 from "components/H2"
import Model from "./Model"

export default class Line extends Model {

    post = ""
    type = LineTypes.PARAGRAPH.id
    content = ""
    position = 0
    
    constructor(postId) {
        super()
        this.post = postId
    }

    render(editingProps = null) {
        renderLine(this, editingProps)
    }
}

function defaultEditField(line, editingProps) {
    return <input value={line.content} {...editingProps}/>
}
export const LineTypes = Object.freeze({
    PARAGRAPH: {
        id: "LineTypes.paragraph",
        name: "Paragraph",
        render(line, editingProps) {
            if(editingProps) return defaultEditField(line, editingProps)
            return <p style={{marginBottom:"2rem"}} key={line.id}> {line.content} </p>
        }
    },
    TITLE: {
        id: "LineTypes.title",
        name: "Title",
        render(line, editingProps) {
            if(editingProps) return defaultEditField(line, editingProps)
            return <H1 key={line.id}> {line.content} </H1>
        }
    },
    SUBTITLE: {
        id: "LineTypes.subtitle",
        name: "Subtitle",
        render(line, editingProps) {
            if(editingProps) return defaultEditField(line, editingProps)
            return <H2 key={line.id}> {line.content} </H2>
        }
    },
    IMAGE: {
        id: "LineTypes.image",
        name: "Image",
        render(line, editingProps) {
            if(editingProps) return defaultEditField(line, editingProps)
            return <img key={line.id} src={line.content} alt={line.content} />
        }
    }
})

export const renderLine = (line, editingProps) => {
    if(!line?.type) return
    return Object.entries(LineTypes).find(lt => lt[1].id === line.type)[1].render(line, editingProps)
}