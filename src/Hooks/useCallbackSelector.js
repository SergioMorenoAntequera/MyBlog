import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

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
