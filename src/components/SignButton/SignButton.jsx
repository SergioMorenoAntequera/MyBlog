import { clearUserFeed } from "actions/postsActions"
import * as authAPI from "api/auth"
import Button from "components/Button"
import UsersThunks from "features/usersThunks"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

const SignIn = () => {
    return <Button variant="contained" onClick={authAPI.signInWithGoogle}> 
        Sign in with Google 
    </Button>  
}

const SignOut = () => {
    const dispatch = useDispatch()

    return <>
        <Button variant="contained" onClick={()=>{
            authAPI.signOut()   
            dispatch(clearUserFeed())
        }}> 
            Sign Out 
        </Button>
    </>
}

const SignToggle = () => {
    const { auth } = authAPI.useUser()
    const dispatch = useDispatch()

    useEffect(() => {
        if(auth.currentUser) 
            dispatch(UsersThunks.createUser(auth.currentUser))
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