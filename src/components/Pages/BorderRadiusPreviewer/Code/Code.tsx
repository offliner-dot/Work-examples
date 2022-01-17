import React from 'react';
import style from "./code.module.css";
import {useTypedSelector} from "../../../../hooks/useTypedSelector";

const Code = () => {
    const {type, range, bottomLeft, bottomRight, topRight, topLeft} = useTypedSelector(state => state.borderRadius)
    const copy = (e: React.MouseEvent<HTMLButtonElement>) => {
        const copyAll = `border-radius: ${range}%;`;
        const copyDiff = `border-radius: ${topLeft}% ${topRight}%  ${bottomRight}%  ${bottomLeft}%;`;
        const target = e.currentTarget;
        if (!type) {
            addInClipboard(copyAll,target)
        } else {
            addInClipboard(copyDiff,target);
        }
    }
    const addInClipboard = (str: string, target: EventTarget & HTMLButtonElement) => {
        navigator.clipboard.writeText(str)
            .then(() => {
                if (target.innerText !== 'Copied!') {
                    const originalText = target.innerText;
                    target.innerText = 'Copied!';
                    setTimeout(() => {
                        target.innerText = originalText;
                    }, 1500);
                }
            })
    }
    return (
        <div className={style.wrapper}>
            <h2>Code</h2>
            <div>Copy this to the element you want to style.</div>
            <button onClick={(e) => copy(e)}>Click to copy</button>
            <div className={style.info}>
                <span className={style.text}>border-radius:</span> <span
                className={style.params}>{!type ? ` ${range}%; ` : ` ${topLeft}% ${topRight}%  ${bottomRight}%  ${bottomLeft}%; `}</span>
            </div>
        </div>
    );
};

export default Code;