import { FETCH_ALLDATA_SUCCESS, FETCH_ALLDATA_ERROR, FETCH_AUTHORSDATA_SUCCESS, FETCH_AUTHORSDATA_ERROR } from "./actions";

export function reducer(state = { errorAllData: null, errorAuthorsData: null, allData: null, authorsData: [] }, action) {
    switch (action.type) {
      case FETCH_ALLDATA_SUCCESS:
        return { ...state, allData: action.data };
      case FETCH_ALLDATA_ERROR:
        return { ...state, errorAllData: action.message };
      case FETCH_AUTHORSDATA_SUCCESS:
        return { ...state, authorsData: action.data };
      case FETCH_AUTHORSDATA_ERROR:
        return { ...state, errorAuthorsData: action.message };
      default:
        return state;
    }
  }