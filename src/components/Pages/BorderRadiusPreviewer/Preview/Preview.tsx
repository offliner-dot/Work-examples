import React from 'react';
import style from "./preview.module.css"
import {useTypedSelector} from "../../../../hooks/useTypedSelector";

const Preview = () => {
    const {type, range, bottomLeft, bottomRight, topRight, topLeft} = useTypedSelector(state => state.borderRadius)
    return (
        <div className={style.wrapper}>
            <h2>Preview</h2>
            <div className={style.preview} style={{
                borderRadius: !type ? `${range}% ` :
                    `${topLeft}% ${topRight}%  ${bottomRight}%  ${bottomLeft}% `
            }}/>
        </div>
    );
};

export default Preview;