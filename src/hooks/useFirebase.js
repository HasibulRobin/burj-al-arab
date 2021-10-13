import initializeAuthentication from '../Firebase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from 'react';

initializeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    const handleGoogleSignIn = () => {
        return signInWithPopup(auth, googleProvider)

    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
        })
    }, [])
    const handleSignOut = () => {
        signOut(auth)
            .then(result => setUser({}))
            .catch(error => setError(''))
    }

    return {
        handleGoogleSignIn, handleSignOut, user, error, setUser, setError
    };
};

export default useFirebase;