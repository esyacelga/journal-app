import {GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {firebaseAuth} from "./config";

const googleProvider = new GoogleAuthProvider();
export const singInWhithGoogle = async () => {
    try {
        const result = await signInWithPopup(firebaseAuth, googleProvider);
        const {displayName, email, photoURL, uid} = result.user;
        return {
            ok: true,
            displayName, email, photoURL, uid
        }

    } catch (e) {
        console.error(e);
        const errorCode= e.code;
        const errorMessage= e.message;

        return {
            ok:false,
            errorMessage, errorCode

        }
    }
}