import React from 'react';
import style from "./options.module.css";
import Label from "./Label/Label";
import {useTypedSelector} from "../../../../hooks/useTypedSelector";
import {useActions} from "../../../../hooks/useActions";

const Options = () => {
    const {
        type, range, bottomRight,
        topRight, bottomLeft, topLeft
    } = useTypedSelector(state => state.borderRadius);
    const {
        setType, setBottomRight, setTopRight,
        setTopLeft, setBottomLeft, setRange
    } = useActions();

    enum Type {
        all = 0,
        different = 1
    }

    return (
        <div className={style.options}>
            <h2>Options</h2>
            <label className={style.type}>
                Type
                <select name="type" onChange={e => setType(+e.target.value)}>
                    <option value={Type.all}>Same on all sides</option>
                    <option value={Type.different}>Different on all sides</option>
                </select>
            </label>
            {type === Type.all ?
                <Label name={"all"} changeRange={setRange} range={range} title={"Radius"}/>
                :
                <>
                    <Label name={"topLeft"} changeRange={setTopLeft} range={topLeft} title={"Top Left"}/>
                    <Label name={"topRight"} changeRange={setTopRight} range={topRight} title={"Top Right"}/>
                    <Label name={"bottomRight"} changeRange={setBottomRight} range={bottomRight}
                           title={"Bottom Right"}/>
                    <Label name={"bottomLeft"} changeRange={setBottomLeft} range={bottomLeft} title={"Bottom Left"}/>
                </>
            }
        </div>
    );
};

export default Options;