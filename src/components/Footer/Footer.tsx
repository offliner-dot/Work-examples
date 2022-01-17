import React from 'react';
import react from "../../img/icon/react_32.png";
import google from "../../img/icon/google_32.png";
import js from "../../img/icon/js_32.png";
import ts from "../../img/icon/typeScript_32.png";
import style from "./footer.module.css"

const Footer = () => {
    return (
        <footer className={style.footer}>
            <h3>THE TECHNOLOGIES USED</h3>
            <div>
                <img src={react} alt="react logo"/>
                <img src={google} alt="google logo"/>
                <img src={js} alt="js logo"/>
                <img src={ts} alt="ts logo"/>
            </div>
        </footer>
    );
};

export default Footer;