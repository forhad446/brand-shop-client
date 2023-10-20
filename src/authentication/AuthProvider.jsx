import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";


export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState([])

    // create new user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // Sign In user 
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    // current user 
    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser)
            } else {
                console.log('something is wrong');
            }
        });
    }, [])

    const authInfo = {
        user,
        createUser,
        signInUser
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;