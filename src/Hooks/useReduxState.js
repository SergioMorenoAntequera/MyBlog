import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

const useReduxState = (useSelectorCallBack, actionToRecover) => {

    const stateData = useSelector(useSelectorCallBack)
    const dispatch = useDispatch()

    useEffect(() => {
        if(stateData) return 
        dispatch(actionToRecover)
    }, [])
    
    return stateData
}

export default useReduxState
