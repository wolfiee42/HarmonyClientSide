/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.confiq";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [loading, setloading] = useState(true);
    const [user, setUser] = useState();
    const provider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        setloading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUser = (name, photo) => {
        setloading(true);
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    const socialLogin = () => {
        setloading(true);
        return signInWithPopup(auth, provider);
    }

    const logOut = () => {
        setloading(true);
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentuser => {
            console.log('spying on ', currentuser);
            setUser(currentuser);
            setloading(false)
        })
        return () => {
            () => unsubscribe()
        }
    }, [])


    const authinfo = { createUser, user, loading, login, updateUser, logOut, socialLogin };
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;