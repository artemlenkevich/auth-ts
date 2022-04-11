import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { authApi, AuthApi } from "../api"

import { RootState } from "./store"

interface IAuthState {
    isAuth: boolean
    id: number | null
}

const initialState: IAuthState = {
    isAuth: false,
    id: null
}

export const logInUser = createAsyncThunk(
    'auth/logInUser',
    async (logInData: AuthApi.LogInParams) => {        
        try {
            const data = await authApi.logIn(logInData)  
            switch(data.status) {
                case 'ok':
                    return data.data.id;
                case 'err':
                    // return data.message;
                    console.log(data.message);      
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
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(logInUser.fulfilled, (state, { payload }) => {
                state.isAuth = true
                state.id = payload
            })
    }
})

export const { logOutUser } = authSlice.actions

export const authReducer = authSlice.reducer

/* Selectors */
export const selectIsAuth = (state: RootState) => state.auth.isAuth