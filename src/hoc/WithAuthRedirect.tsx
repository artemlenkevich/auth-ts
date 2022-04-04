import React from "react"
import { Navigate, useLocation } from "react-router-dom"
import { selectIsAuth } from "../redux/authSlice"
import { useAppSelector } from "../redux/hooks"

export const WithAuthRedirect = <P extends object>(Component: React.ComponentType<P>) => {
    const Wrapper: React.FC<P> = (props) => {
        const isAuth = useAppSelector(selectIsAuth)
        const location = useLocation()

        return isAuth ? <Component {...props as P} /> : <Navigate to='/login' state={{from: location.pathname}}/>
    }
    return Wrapper
}