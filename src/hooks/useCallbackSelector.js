import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

/**
 * 
 * @param useSelectorCallBack state that you want to try to recover with selector  
 * @param actionToRecover callback that will execute if state is selector is NOT found in state  
 * @param listWithResults Once the data has been recovered with the action this is the selector 
 * of the list where we foind the info by id
 * 
 * @returns 
 */
const useCallbackSelector = (useSelectorCallBack, actionToRecover, listWithResults) => {

    const dispatch = useDispatch()
    
    const stateData = useSelector(useSelectorCallBack)
    
    listWithResults = listWithResults ?? (state => state.none)
    let results = useSelector(listWithResults)
    const [data, setData] = useState(stateData)


    useEffect(() => {
        if(stateData) {
            setData(stateData)
        } else {
            dispatch(actionToRecover)
        }
    }, [stateData])

    
    useEffect(() => {
        if(stateData && results) {
            setData(stateData.map(s => ({...results[s]})))
            return
        }
    }, [results])
    
    return data
}

export default useCallbackSelector
