import React from 'react';
import Footer from '../Footer/Footer';
import {Outlet} from 'react-router-dom';
import Header from "../Header/Header";
import style from "./appLayout.module.css"

const AppLayout = () => {
    return (
        <>
            <Header/>
            <main className={style.container}>
                <Outlet/>
            </main>
            <Footer/>
        </>
    );
};

export default AppLayout;