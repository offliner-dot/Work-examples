import {ActionCreators} from "../../types/actionCreators";

const initialState = {
    type: 0,
    range: 50,
    topLeft: 50,
    topRight: 50,
    bottomRight: 50,
    bottomLeft: 50,
};

type InitialState = typeof initialState;
const borderRadiusReducer = (state = initialState, action: BorderRadiusActionsType): InitialState => {
    switch (action.type) {
        case "SET_TYPE":
            return {...state, type: action.payload}
        case "SET_RANGE":
            return{...state, range: action.payload}
        case "SET_TOP_LEFT":
            return{...state, topLeft: action.payload}
        case "SET_TOP_RIGHT":
            return{...state, topRight: action.payload}
        case "SET_BOTTOM_RIGHT":
            return{...state, bottomRight: action.payload}
        case "SET_BOTTOM_LEFT":
            return{...state, bottomLeft: action.payload}
        default:
            return state
    }
};

export const borderRadiusActions = {
    setType: (payload: number) => ({type: "SET_TYPE", payload}as const),
    setRange: (payload: number) => ({type: "SET_RANGE", payload} as const),
    setTopLeft: (payload: number) => ({type: "SET_TOP_LEFT", payload} as const),
    setTopRight: (payload: number) => ({type: "SET_TOP_RIGHT", payload} as const),
    setBottomRight: (payload: number) => ({type: "SET_BOTTOM_RIGHT", payload} as const),
    setBottomLeft: (payload: number) => ({type: "SET_BOTTOM_LEFT", payload} as const),
};
export type BorderRadiusActionsType = ActionCreators<typeof borderRadiusActions>;

export default borderRadiusReducer;