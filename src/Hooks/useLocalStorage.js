import { useEffect, useReducer, useState } from "react";

const initialState = (initialValue) => ({
    storageItem: initialValue,
    loading: true,
    error: false,
    synchronized: false,
})
const actionTypes = {
    showing: "SHOWING",
    loading: "LOADING",
    error: "ERROR",
    synchronized: "SYNCRONIZE",
}
const reducerObject = (state, payload) => ({
    [actionTypes.showing]: {
        ...state,
        storageItem: payload,
        synchronized: true,
        loading: false,
        error: false
    },
    [actionTypes.loading]: {
        ...state,
        loading: true,
        error: false,
    },
    [actionTypes.error]: {
        ...state,
        loading: false,
        error: payload,
    },
    [actionTypes.synchronized]: {
        ...state,
        synchronized:payload,
        error: false,
        loading: true,
    },
})
const reducer = (state, action) => {
    console.log(state)
    if(reducerObject(state, action.payload)[action.type]){
        return reducerObject(state, action.payload)[action.type]
    }
    return state
}

export const useLocalStorage = (name, defaultValue) => {
    const [state, dispatch] = useReducer(reducer, initialState(defaultValue));
    console.log(state.storageItem)
    const onShow = (storageItem) => dispatch({type:actionTypes.showing, payload:storageItem})
    const onLoading = () => dispatch({type:actionTypes.loading})
    const onError = (error) => dispatch({type:actionTypes.error, payload:error})
    const onSyncronize = (sincronize) => dispatch({type:actionTypes.synchronized, payload:sincronize})
 
    try {
        useEffect(() => {
            setTimeout(() => {
                let inLocalStorage = localStorage.getItem(name)
                let parsedLocalStorage;
                
                if(!inLocalStorage) {
                    localStorage.setItem(name, JSON.stringify(defaultValue));
                    parsedLocalStorage = defaultValue;
                } else {
                    parsedLocalStorage = JSON.parse(inLocalStorage);
                }
                
               onShow(parsedLocalStorage)
            }, 1000);
        }, [state.synchronized])
    } catch(error) {
        console.log(error)
        onError(error)
    }
    
    
    const setLocalElement = (newValue) => {
        try {
            localStorage.setItem(name, JSON.stringify(newValue))
            onShow(newValue)
        } catch (error) {
            console.log(error)
            onError(error)
        }
    }

    return {
        storageItem: state.storageItem, 
        setLocalElement: setLocalElement,
        auxSetSynchronized: onSyncronize,
        loading: state.loading, 
        error: state.error
    }
}