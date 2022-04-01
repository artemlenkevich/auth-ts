import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface IAuthState {
    isAuth: boolean
}

const initialState: IAuthState = {
    isAuth: false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setIsAuth: (state, action: PayloadAction<boolean>) => {
            state.isAuth = action.payload
        }
    }
})

export const { setIsAuth } = authSlice.actions

export const authReducer = authSlice.reducer