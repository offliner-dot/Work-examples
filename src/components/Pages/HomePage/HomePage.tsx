import React from 'react';
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import style from "./homePage.module.css"

const HomePage = () => {
    const {messageError} = useTypedSelector(state => state.searchBooks);

    if (messageError) return <h1>{messageError}</h1>
    return (
        <>
            <h1>Work examples</h1>
            <section className={style.section}>
                <h2>Border radius previewer</h2>
                <p>The border-radius property can have multiple values changed. Preview how the shape looks while
                    changing these values.</p>
            </section>
            <section className={style.section}>
                <h2>Search books</h2>
                <p>An application that allows users to search for books by entering a query.</p>
            </section>
        </>
    );
};

export default HomePage;