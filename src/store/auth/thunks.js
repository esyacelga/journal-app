import {checkingCredential, login, logout} from "./auth-slice";
import {singInWhithGoogle} from "../../firebase/provider";

export const checkingAutentication = (email, password) => {
    return async (dispatch) => {
        dispatch(checkingCredential())
    }
}
export const startGoogleSignIn = (email, password) => {
    return async (dispatch) => {
        dispatch(checkingCredential());
        const result = await singInWhithGoogle();
        if (!result.ok) return dispatch(logout(result.errorMessage));
        console.log(result)
        dispatch(login(result))
    }
}