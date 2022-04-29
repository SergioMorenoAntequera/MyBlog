

export const get = (keyName) => {
    const item = localStorage.getItem(keyName);
    try {
        return JSON.parse(item)
    } catch (e) {
        return item
    }  
}

export const set = (keyName, value) => {
    if(value.constructor() === ({}).constructor()) {
        value = JSON.stringify(value)
    }
    localStorage.setItem(keyName, value);
}
