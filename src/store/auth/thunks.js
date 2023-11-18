import {checkingCredential} from "./auth-slice";

export const checkingAutentication = (email, password) => {
    return async (dispatch) => {
        dispatch (checkingCredential())
    }
}
export const startGoogleSignIn = (email, password) => {
    return async (dispatch) => {
        dispatch (checkingCredential())
    }
}