import React, { createContext } from 'react';

import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import app from './firebase.config';

let auth = getAuth(app)

export let contex = createContext(null)


const Contex = ({ children }) => {


    let popUp = (provider) => {

        
    }


    let handleLoigin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)


    }



    let Register = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }




    let userInfo = {

        Register,
        handleLoigin,
        popUp,

    }



    return <contex.Provider value={userInfo}>
        {children}
    </contex.Provider>

};

export default Contex;