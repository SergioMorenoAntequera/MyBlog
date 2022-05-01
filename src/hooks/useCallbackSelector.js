import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

/**
 * 
 * @param useSelectorCallBack state that you want to try to recover with selector  
 * @param actionToRecover callback that will execute if state is selector is NOT found in state  
 * @returns 
 */
const useCallbackSelector = (useSelectorCallBack, actionToRecover) => {

    const stateData = useSelector(useSelectorCallBack)
    const dispatch = useDispatch()

    useEffect(() => {
        if(stateData) return
        dispatch(actionToRecover)
    }, [stateData])
    
    return stateData
}

export default useCallbackSelector
