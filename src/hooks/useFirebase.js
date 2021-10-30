import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    const signInWithGoogle = () => {
        setIsLoading(true); 
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
        .catch(error => {
            console.log(error.message);
        })
        .finally(() => setIsLoading(false))
    };

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unsubscribed;
    }, []); 

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
        .then( () => {
            setUser({})
        })
        .catch(error => {
            console.log(error.message);
        })
        .finally(() => setIsLoading(false))
    };

    return {
        user,
        signInWithGoogle,
        isLoading,
        logOut
    }
}

export default useFirebase;