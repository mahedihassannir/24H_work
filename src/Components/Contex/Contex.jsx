import React, { createContext } from 'react';

import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import app from './firebase.config';

let auth = getAuth(app)

export let contex = createContext(null)


const Contex = ({ children }) => {




    let handleLoigin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)


    }



    let Register = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }




    let userInfo = {

        Register,
        handleLoigin,


    }



    return <contex.Provider value={userInfo}>
        {children}
    </contex.Provider>

};

export default Contex;