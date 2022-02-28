const { firebase } = require("api/_config")
const { useAuthState } = require("react-firebase-hooks/auth")

const auth = firebase.auth()

const useUser = () => {
    return useAuthState(auth)[0]
}

const SignIn = () => {
    const signInWithGoogle = () => {
        console.log(process.env.REACT_APP_FIREBASE_AUTH_DOMAIN)
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider)
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