import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from '../firebase/firebse.config';


const auth = getAuth(app)

export const AuthContext = createContext(null)
const provider = new GoogleAuthProvider();






const AuthProvider = ({children}) => {

    const [user, setUser] = useState([])
    const [date, setDate] = useState  (null)



    const googleSignIn = () => {

        return signInWithPopup (auth, provider)



        
    }


    const getDate = (startdate, enddate) => { 

        setDate (startdate, enddate)



    }

    const logOut = () => {


        return signOut (auth)
     }


    const createUser = (email, password) => { 




        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) => {

        return signInWithEmailAndPassword (auth, email, password)
     }

    useEffect (() => { 


        const unsubscribe = onAuthStateChanged (auth, (currentUser) => {


            setUser(currentUser)
        })
        return (  ) => {

            return unsubscribe();
        }
    }, [])


    const authInfo = {

        googleSignIn,
        user,
        createUser,
        logOut,
        logIn,
        getDate
    }








    return (
        <AuthContext.Provider value={authInfo}>

            {children}


            
        </AuthContext.Provider>
    );
};

export default AuthProvider;