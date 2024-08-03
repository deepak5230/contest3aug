// src/redux/reducers.js
import { FETCH_ITEMS_REQUEST, FETCH_ITEMS_SUCCESS, FETCH_ITEMS_FAILURE, FETCH_ITEM_DETAIL_SUCCESS } from './actionTypes';

const initialState = {
  loading: false,
  items: [],
  currentItem: null,
  error: null,
};

// Reducer
const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS_REQUEST:
      return { ...state, loading: true };
    case FETCH_ITEMS_SUCCESS:
      return { ...state, loading: false, items: action.payload };
    case FETCH_ITEMS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case FETCH_ITEM_DETAIL_SUCCESS:
      return { ...state, currentItem: action.payload };
    default:
      return state;
  }
};

export default itemsReducer;
