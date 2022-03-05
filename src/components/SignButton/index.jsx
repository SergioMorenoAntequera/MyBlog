import { createUser } from "actions/usersActions"
import * as authAPI from "api/auth"
import Button from "components/Button"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

const SignIn = () => {
    return <Button onClick={authAPI.signInWithGoogle}> 
        Sign in with Google 
    </Button>  
}

const SignOut = () => {
    return <Button onClick={authAPI.signOut}> 
        Sign Out 
    </Button>  
}

const SignToggle = () => {
    const { auth } = authAPI.useUser()
    const dispatch = useDispatch()

    useEffect(() => {
        if(auth.currentUser) 
            dispatch(createUser(auth.currentUser))
    }, [auth.currentUser])
    

    if(auth.currentUser) {
        return <SignOut />
    } else {
        return <SignIn />
    }
        
}

export {
    SignToggle
}