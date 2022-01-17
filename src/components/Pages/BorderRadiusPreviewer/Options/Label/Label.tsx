import React, {FC} from "react";
import style from "./label.module.css";


type PropsTypeLabel = {
    name: string
    changeRange: (payload: number) => void
    range: number
    title: string
}
const Label: FC<PropsTypeLabel> = ({name, changeRange, range, title}) => {

    return (
        <label className={style.label}>
            {title}
            <span className={style.slider}>{range}</span>
            <input type="range" name={name} max={100} defaultValue={range}
                   onChange={(e) => changeRange(+e.target.value)}/>
        </label>
    );
};

export default Label;