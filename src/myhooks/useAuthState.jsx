import {
    createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword,
    signOut
} from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebase-config";


export function useAuthState() {
    const [user, setUser] = useState(auth.currentUser);
    function SignUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    function SignIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }
    function SignOut() {
        signOut(auth);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        };
    }, [auth]);

    return [user, SignUp, SignIn, SignOut];
}
