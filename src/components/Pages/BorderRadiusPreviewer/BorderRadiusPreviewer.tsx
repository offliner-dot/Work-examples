import React from 'react';
import style from "./borderRadiusPreviewer.module.css"
import Options from "./Options/Options";
import Preview from "./Preview/Preview";
import Code from "./Code/Code";

const BorderRadiusPreviewer = () => {

    return (
        <div className={style.content}>
            <Options/>
            <div className={style.preview}>
                <Preview/>
                <div className={style.code}>
                    <Code/>
                </div>
            </div>
        </div>
    );
};


export default BorderRadiusPreviewer;