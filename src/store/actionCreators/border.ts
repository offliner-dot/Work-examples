import {borderRadiusActions, BorderRadiusActionsType} from "../borderRadiusReducer/borderRadiusReducer";


export const setType = (value: number): BorderRadiusActionsType => {
    return borderRadiusActions.setType(value)
};
export const setRange = (value: number): BorderRadiusActionsType => {
    return borderRadiusActions.setRange(value)
};
export const setTopLeft = (value: number): BorderRadiusActionsType => {
    return borderRadiusActions.setTopLeft(value)
};
export const setTopRight = (value: number): BorderRadiusActionsType => {
    return borderRadiusActions.setTopRight(value)
};
export const setBottomRight = (value: number): BorderRadiusActionsType => {
    return borderRadiusActions.setBottomRight(value)
};
export const setBottomLeft = (value: number): BorderRadiusActionsType => {
    return borderRadiusActions.setBottomLeft(value)
};