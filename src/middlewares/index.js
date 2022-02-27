
export const logAction = store => next => action => {
    console.log(action)
    next(action)
}