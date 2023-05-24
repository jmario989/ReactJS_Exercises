import { FETCH_DATA_SUCCESS, FETCH_DATA_ERROR } from "./actions";

export function reducer(state = { error: null, nasaData: null }, action){
    switch(action.type){
        case FETCH_DATA_SUCCESS:
            return { ...state, nasaData: action.data };
        case FETCH_DATA_ERROR:
            return { ...state, error: action.message };
        default:
            return state;
    }
}