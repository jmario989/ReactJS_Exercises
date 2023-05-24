export const ADD_COUNT = "ADD_COUNT";
export const SUBTRACT_COUNT = "SUBTRACT_COUNT";
export const SET_COUNT = "SET_COUNT";


export function addToCount(number = 1){
    return { type: ADD_COUNT, number };
}

export function subtractFromCount(number = 1){
    return { type: SUBTRACT_COUNT, number };
}

export function setCount(count = 0){
    return { type: SET_COUNT, count };
}