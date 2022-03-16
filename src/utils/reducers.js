
function addMainRecord(object) {
    let result = {};
    result[object.id] = {}
    Object.keys(object).forEach(k => {
        result[object.id] = {
            ...result[object.id],
            [k]: object[k]
        }
    })
    return result
}

const Positions = Object.freeze({
    "beggining": 0,
    "end": 1,
})
function addUnique(array, el, position = 1) {
    array = array ?? [];
    if(array.includes(el)) {
        return array
    } else {
        if(position === Positions.beggining)
            return [el, ...array]
        if(position === Positions.end)
            return [...array, el]
    }
}

function removeKey(object, key) {
    if(object[key] === undefined) return object
    delete object[key]
    return object
}

export {
    addMainRecord,
    addUnique,
    removeKey,
    Positions
}