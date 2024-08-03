// src/redux/actions.js
import { FETCH_ITEMS_REQUEST, FETCH_ITEMS_SUCCESS, FETCH_ITEMS_FAILURE, FETCH_ITEM_DETAIL_SUCCESS } from './actionTypes';

// Action creators
const fetchItemsRequest = () => ({
  type: FETCH_ITEMS_REQUEST,
});

const fetchItemsSuccess = (items) => ({
  type: FETCH_ITEMS_SUCCESS,
  payload: items,
});

const fetchItemsFailure = (error) => ({
  type: FETCH_ITEMS_FAILURE,
  payload: error,
});

const fetchItemDetailSuccess = (item) => ({
  type: FETCH_ITEM_DETAIL_SUCCESS,
  payload: item,
});

// Thunk action to fetch items
export const fetchItems = () => {
  return async (dispatch) => {
    dispatch(fetchItemsRequest());
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      dispatch(fetchItemsSuccess(data));
    } catch (error) {
      dispatch(fetchItemsFailure(error.message));
    }
  };
};

// Thunk action to fetch item detail
export const fetchItemDetail = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const data = await response.json();
      dispatch(fetchItemDetailSuccess(data));
    } catch (error) {
      dispatch(fetchItemsFailure(error.message));
    }
  };
};
