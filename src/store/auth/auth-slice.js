import {createSlice} from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'not-authenticate',
        ui: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage: null
    },
    reducers: {
        login: (state, {payload}) => {
            state.status= 'authenticated',
                state.ui= payload.uid,
                state.email= payload.email,
                state.displayName= payload.displayName,
                state.photoURL= payload.photoURL,
                state.errorMessage= payload.authenticate
        },
        logout: (state, {payload}) => {
                state.status= 'not-authenticate',
                state.ui= null,
                state.email= null,
                state.displayName= null,
                state.photoURL= null,
                state.errorMessage= payload.authenticate
        },
        checkingCredential: (state, payload) => {
                state.status='checking'
        }
    }
})

export const {login, logout, checkingCredential} = authSlice.actions;