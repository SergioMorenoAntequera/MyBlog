
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

function addUnique(array, el) {
    if(array.includes(el)) {
        return array
    } else {
        return [...array, el]
    }
}

export {
    addMainRecord,
    addUnique
}