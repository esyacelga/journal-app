import {createSlice} from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'not-checking',
        ui: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage: null
    },
    reducers: {
        login: (state, action) => {

        },
        logout: (state, payload) => {

        },
        checkingCredential: (state, payload) => {
                state.status='checking'
        }
    }
})

export const {login, logout, checkingCredential} = authSlice.actions;