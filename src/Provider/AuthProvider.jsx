import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, getRedirectResult, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signInWithRedirect, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';





export const AuthContext = createContext(null);
const auth = getAuth(app)


const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loggedIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const handleGoogleSingUp = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const handleGithubSignUp = () =>{
        setLoading(true);
        return signInWithPopup(auth, githubProvider)
    }

    const handleGoogleLogin = () =>{
        setLoading(true);
        signInWithRedirect(auth, googleProvider);
        return getRedirectResult(auth);
    }


    const logOut = () =>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            // console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        })
        return () =>{
            return unsubscribe
        }
    } , [])
    
    const authInfo = {
        user,
        createUser,
        handleGoogleSingUp,
        logOut,
        handleGithubSignUp,
        loggedIn,
        loading,
        handleGoogleLogin
    }


    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;