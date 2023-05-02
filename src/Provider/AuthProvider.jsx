import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, getRedirectResult, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signInWithRedirect, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';





export const AuthContext = createContext(null);
const auth = getAuth(app)


const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider();
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
        createUser,
        loggedIn,
        user,
        logOut,
        loading,
        handleGoogleLogin,
        handleGoogleSingUp
    }


    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;