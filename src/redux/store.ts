import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./authSlice";

let preloadedState
const persistedState = localStorage.getItem('state')

if (persistedState) {
  preloadedState = JSON.parse(persistedState)
}

export const store = configureStore({
    reducer: {
        auth: authReducer
    },
    preloadedState
})

window.addEventListener('unload', () => {
    localStorage.setItem('state', JSON.stringify(store.getState()))
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

declare const window: any
window.store = store