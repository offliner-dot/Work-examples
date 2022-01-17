import {searchBooksActions, SearchBooksActionsType} from "../serachBooksReducer/searchBooksReducer";
import {Dispatch} from "redux";
import axios from "axios";
import {BooksDataType} from "../../types/booksDataType";

export const fetchData = (currentPage: number = 1, perPage: number = 10, term: string = "") => async (dispatch: Dispatch<SearchBooksActionsType>) => {
    try {
        const indexOfLastPost = currentPage * perPage;
        const startIndex = indexOfLastPost - perPage;
        dispatch(searchBooksActions.fetch());
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${term}&startIndex=${startIndex}&maxResults=${perPage}`)
            .then(res => res.data);

        const totalItems = response.totalItems;
        const booksData: BooksDataType[] = response.items.map((bookItem: any) => {
            return {
                id: bookItem.id,
                title: bookItem.volumeInfo.title,
                authors: bookItem.volumeInfo.authors,
                publisher: bookItem.volumeInfo.publisher,
                publishedDate: bookItem.volumeInfo.publishedDate,
                description: bookItem.volumeInfo.description,
                image: bookItem.volumeInfo.imageLinks?.thumbnail ?? "https://via.placeholder.com/200x200?text=Картинка+скоро+будет",
                preview: bookItem.volumeInfo.previewLink
            }
        })
        dispatch(searchBooksActions.setTotalItems(totalItems))
        dispatch(searchBooksActions.fetchSuccess(booksData))
    } catch (err: any) {
        dispatch(searchBooksActions.fetchError(err.message))
    }
};

