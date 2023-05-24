import { ADD_COUNT, SUBTRACT_COUNT, SET_COUNT } from "./actions";

export function reducer(state = 0, action){
    switch(action.type){
        case ADD_COUNT:
            return state + action.number;
        case SUBTRACT_COUNT:
            return state - action.number;
        case SET_COUNT:
            return action.count;
        default:
            return state;
    }
}