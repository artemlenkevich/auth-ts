import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { authApi, AuthApi } from "../api"

import { RootState } from "./store"

interface IAuthState {
    isAuth: boolean
    id: number | null
    errorMessage: string
}

const initialState: IAuthState = {
    isAuth: false,
    id: null,
    errorMessage: ''
}

export const logInUser = createAsyncThunk(
    'auth/logInUser',
    async (logInData: AuthApi.LogInParams, { dispatch }) => {        
        try {
            const data = await authApi.logIn(logInData)  
            switch(data.status) {
                case 'ok':
                    dispatch(setAuthData(data.data.id));
                    localStorage.setItem('id', data.data.id);
                    break;
                case 'err':
                    dispatch(setErrorMessage(data.message));
                    setTimeout(() => dispatch(setErrorMessage('')), 5000);
            }
        } catch (e) {
            console.log(e);
        }
    }
)

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logOutUser: (state) => {
            state.isAuth = false
            state.id = null
        },
        setAuthData: (state, { payload }: PayloadAction<number>) => {
            state.isAuth = true
            state.id = payload
        },
        setErrorMessage: (state, { payload }: PayloadAction<string>) => {
            state.errorMessage = payload
        }
    }
})

export const { logOutUser, setAuthData, setErrorMessage } = authSlice.actions

export const authReducer = authSlice.reducer

/* Selectors */
export const selectIsAuth = (state: RootState) => state.auth.isAuth
export const selectErrorMessage = (state: RootState) => state.auth.errorMessage