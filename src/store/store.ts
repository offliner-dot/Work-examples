import {applyMiddleware, combineReducers, createStore} from "redux";
import borderRadiusReducer from "./borderRadiusReducer/borderRadiusReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import searchBooksReducer from "./serachBooksReducer/searchBooksReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    borderRadius : borderRadiusReducer,
    searchBooks : searchBooksReducer,
})
export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));
export type rootStore = ReturnType<typeof rootReducer>;