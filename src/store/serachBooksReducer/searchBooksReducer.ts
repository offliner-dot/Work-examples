import {ActionCreators} from "../../types/actionCreators";
import {BooksDataType} from "../../types/booksDataType";

const initialState = {
    booksData: [] as BooksDataType[] ,
    isLoading: false,
    messageError:"",
    totalItems: 0
};

type InitialState = typeof initialState;
const searchBooksReducer = (state = initialState, action: SearchBooksActionsType): InitialState => {
    switch (action.type) {
        case "FETCH":
            return {...state, isLoading: true}
        case "FETCH_ERROR":
            return {...state, isLoading: false, messageError: action.error}
        case "FETCH_SUCCESS":
            return {...state, isLoading: false, booksData: [...action.payload]}
        case "SET_TOTAL_ITEM":
            return {...state, totalItems: action.totalItems}
        default:
            return state
    }
};

export const searchBooksActions = {
    fetch: () => ({type: "FETCH"}as const),
    fetchSuccess: (payload: BooksDataType[]) => ({type: "FETCH_SUCCESS", payload} as const),
    fetchError: (error:string) => ({type: "FETCH_ERROR", error} as const),
    setTotalItems: (totalItems: number) => ({type: "SET_TOTAL_ITEM", totalItems} as const),
};
export type SearchBooksActionsType = ActionCreators<typeof searchBooksActions>;

export default searchBooksReducer;