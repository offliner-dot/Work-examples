import React, {FC} from "react";
import {BooksDataType} from "../../../../types/booksDataType";
import style from "./CardItem.module.css";


type PropsType = {
    book: BooksDataType
};
const CardItem: FC<PropsType> = ({book}) => {
    const {title, image, preview} = book;
    return (
        <div className={style.wrapper}>
            <div className={style.cardItem}>
                <div className={style.image}><img className={style.titleImg}
                                                  src={image}
                                                  alt="Изображение книги"/></div>
                <div className={style.title}>{title}</div>
                <div className={style.preview}><a href={preview} rel="nofollow noopener noreferrer"
                                                  target="_blank">Preview</a></div>
            </div>
        </div>
    );
};

export default CardItem;