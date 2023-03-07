import {
    createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword,
    signOut
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase-config";


const userAuthContext = createContext();

export function UserAuthContextProvider({children}){
    // remove null as default value. in error case.
    const [user,setUser] = useState();

    function SignUp(email,password){
        return createUserWithEmailAndPassword(auth, email, password);        
    }
    function SignIn(email,password){
        return signInWithEmailAndPassword(auth,email,password);
    }
    function SignOut(){
        signOut(auth);        
        console.log("logged out");
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{            
            setUser(currentUser);            
        })
        return () => {
            unsubscribe();
        }
    },[])

    return <userAuthContext.Provider value={{user,SignUp,SignIn,SignOut}} >{children}</userAuthContext.Provider>
}

export function useUserAuth(){
    return useContext(userAuthContext);
}