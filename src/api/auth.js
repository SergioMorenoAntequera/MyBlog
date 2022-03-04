import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { useAuthState } from "react-firebase-hooks/auth"

const auth = getAuth()

const useUser = () => {
    return {
        user: useAuthState(auth)[0],
        auth: auth
    }
}

const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
}

const signOut = () => {
    auth.signOut()
}

export {
    useUser,
    signInWithGoogle,
    signOut
}
