import * as authAPI from "api/auth"
import Button from "components/Button"

const SignIn = () => {
    return <Button onClick={authAPI.signInWithGoogle}> Sign in with Google </Button>  
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