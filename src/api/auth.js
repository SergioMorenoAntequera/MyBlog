import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { useAuthState } from "react-firebase-hooks/auth"

const auth = getAuth()

const useUser = () => {
    return {
        user: useAuthState(auth)[0],
        auth: auth
    }
}

const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider)
}

const signOut = () => {
    auth.signOut()
}
export default useUser
export {
    useUser,
    signInWithGoogle,
    signOut
}
