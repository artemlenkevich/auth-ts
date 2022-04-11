import React from "react"
import { LoginPage } from "../pages/LoginPage"
import { selectIsAuth } from "../redux/authSlice"
import { useAppSelector } from "../redux/hooks"

export const WithAuthRedirect = <P extends object>(Component: React.ComponentType<P>) => {
    const Wrapper: React.FC<P> = (props) => {
        const isAuth = useAppSelector(selectIsAuth);
        return isAuth ? <Component {...props as P} /> : <LoginPage />;
    }
    return Wrapper
}