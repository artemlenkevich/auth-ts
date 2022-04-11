import style from './Navbar.module.scss'
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { logOutUser, selectIsAuth } from '../../redux/authSlice';

export const Navbar: React.FC = () => {
    const isAuth = useAppSelector(selectIsAuth);
    const dispatch = useAppDispatch();

    const onLogOutClick = () => {
        dispatch(logOutUser())
    }

    return (
            <ul className={style.nav}>
                <li className={style.nav__btnWrapper}>
                    <Link className={style.nav__btn} to='/'>Home</Link>
                </li>
                <li className={style.nav__btnWrapper}>
                    <Link className={style.nav__btn} to='/news'>News</Link>
                </li>
                <li className={style.nav__btnWrapper}>
                    <Link className={style.nav__btn} to='/profile'>Profile</Link>
                </li>
                <li className={style.nav__btnWrapper}>
                    { isAuth
                    ? <button className={style.nav__btn} onClick={onLogOutClick}>LogOut</button>
                    : <Link className={style.nav__btn} to='/login'>LogIn</Link> }
                </li>
            </ul>
    )
};