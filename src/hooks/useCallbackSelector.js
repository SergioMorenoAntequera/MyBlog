import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

/**
 * 
 * @param useSelectorCallBack state that you want to try to recover with selector  
 * @param actionToRecover callback that will execute if state is selector is NOT found in state  
 * @returns 
 */
const useCallbackSelector = (useSelectorCallBack, actionToRecover, listWithResults) => {

    const stateData = useSelector(useSelectorCallBack)
    listWithResults = listWithResults ?? (state => state.none)
    let results = useSelector(listWithResults)

    const [test, setTest] = useState(stateData)
    const [complementaryCompleaded, setComplementaryCompleaded] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        if(stateData) {
            setTest(stateData)
        } else {
            dispatch(actionToRecover)
        }
            
    }, [stateData])

    useEffect(()=>{
        if(stateData && results && !complementaryCompleaded)   {
            setComplementaryCompleaded(true)
            setTest(test.map(s => results[s]))
        }
    }, [test])
    
    
    return test
}

export default useCallbackSelector
