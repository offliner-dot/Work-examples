import React from 'react';
import {NavLink} from "react-router-dom";
import style from "./header.module.css"

const Header = () => {
    return (
        <header className={style.header}>
            <nav className={style.headerNav}>
                <NavLink className={style.navLink}  to={"/"} >Home</NavLink>
                <NavLink className={style.navLink} to={"borderRadius"} >Border radius previewer</NavLink>
                <NavLink className={style.navLink} to={"searchBooks"} >Search books</NavLink>
            </nav>
        </header>
    );
};

export default Header;