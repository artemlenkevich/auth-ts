import style from './Navbar.module.scss'
import {
    Link
  } from "react-router-dom";

export const Navbar: React.FC = () => {
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
            </ul>
    )
};