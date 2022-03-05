import { createUser } from "actions/usersActions"
import * as authAPI from "api/auth"
import Button from "components/Button"
import { useDispatch } from "react-redux"

const SignIn = () => {

    const dispatch = useDispatch()
    const { auth } = authAPI.useUser()

    const signIn = async () => {
        await authAPI.signInWithGoogle()
        dispatch(createUser(auth.currentUser))
    }

    return <>
        <Button onClick={signIn}> Sign in with Google </Button>  
    </>
}

const SignOut = () => {
    return <Button onClick={authAPI.signOut}> Sign Out </Button>  
}

const SignToggle = () => {
    const { user } = authAPI.useUser()
    if(user)
        return <SignOut/>
    else
        return <SignIn/>
}


export {
    SignIn,
    SignOut,
    SignToggle
}