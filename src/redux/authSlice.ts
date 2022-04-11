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
                    return data.id;
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
        setIsAuth: (state, action: PayloadAction<boolean>) => {
            state.isAuth = action.payload
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

export const { setIsAuth } = authSlice.actions

export const authReducer = authSlice.reducer

export const selectIsAuth = (state: RootState) => state.auth.isAuth