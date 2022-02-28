import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { useAuthState } from "react-firebase-hooks/auth"

const auth = getAuth()


const useUser = () => {
    return [useAuthState(auth)[0], SignToggle]
}

const SignIn = () => {
    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
    }

    return <button onClick={signInWithGoogle}> Sign in with Google </button>  
}
const SignOut = () => {
    return auth.currentUser && (
        <button onClick={()=>{auth.signOut()}}> Sign Out </button>  
    )
}
const SignToggle = () => {
    if(auth.currentUser)
        return <SignOut/>
    else
        return <SignIn/>
}


export {
    useUser,
    SignIn,
    SignOut,
    SignToggle
}