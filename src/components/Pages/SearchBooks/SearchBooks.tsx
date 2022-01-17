import React, {useState} from 'react';
import 'antd/dist/antd.css';
import style from "./searchBooks.module.css";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import CardItem from "./CardItem/CardItem";
import {Input, Pagination} from "antd";
import {useActions} from "../../../hooks/useActions";


const SearchBooks = () => {
    const {Search} = Input;
    const {booksData, totalItems} = useTypedSelector(state => state.searchBooks);
    const {fetchData} = useActions();
    const [value, setValue] = useState("")

    const changeHandler = (currentPage: number, perPage: number) => {
        fetchData(currentPage, perPage, value)
    };
    const onSearch = (value: string) => {
        fetchData(1, 10, value)
        setValue(value)
    }
    return (
        <div className={style.content}>
            <h1>Enter a search value:</h1>
            <Search placeholder="input search text" onSearch={onSearch} style={{width: 400}}/>
            <div className={style.cardList}>
                {booksData.map(book => (
                    <CardItem key={book.id} book={book}/>
                ))}
            </div>
            {totalItems > 1 &&
                <Pagination total={totalItems} onChange={changeHandler} pageSizeOptions={["10", "20", "30", "40"]}/>}
        </div>
    );
};

export default SearchBooks;




