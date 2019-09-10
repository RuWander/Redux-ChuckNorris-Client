import C from '../constants';
import { combineReducers } from 'redux';

export const categories_items = (state = [], action) =>
  (action.type === C.FETCH_CATEGORIES_SUCCESS) ?
    action.payload :
    state

export const categories_pending = (state = false, action) =>
  (action.type === C.FETCH_CATEGORIES_PENDING) ?
    action.payload :
    state

export const categories_error = (state = null, action) =>
  (action.type === C.FETCH_CATEGORIES_ERROR) ?
    action.payload :
    state

export const current_quote_item = (state = {}, action) =>
  (action.type === C.FETCH_QUOTE_SUCCESS) ?
    action.payload :
    state

export const current_quote_pending = (state = false, action) =>
  (action.type === C.FETCH_QUOTE_PENDING) ?
    action.payload :
    state

export const current_quote_error = (state = null, action) =>
  (action.type === C.FETCH_QUOTE_ERROR) ?
    action.payload :
    state

export const random_quote_item = (state = {}, action) =>
  (action.type === C.FETCH_RANDOMQUOTE_SUCCESS) ?
    action.payload :
    state

export const random_quote_pending = (state = false, action) =>
  (action.type === C.FETCH_RANDOMQUOTE_PENDING) ?
    action.payload :
    state

export const random_quote_error = (state = null, action) =>
  (action.type === C.FETCH_RANDOMQUOTE_ERROR) ?
    action.payload :
    state


export const search_quote_items = (state = [], action) =>
  (action.type === C.FETCH_SEARCHQUOTE_SUCCESS) ?
    action.payload :
    state

export const search_quote_pending = (state = false, action) =>
  (action.type === C.FETCH_SEARCHQUOTE_PENDING) ?
    action.payload :
    state

export const search_quote_error = (state = null, action) =>
  (action.type === C.FETCH_SEARCHQUOTE_ERROR) ?
    action.payload :
    state

export const errors = (state = [], action) => {
  switch (action.type) {
    case C.ADD_ERROR:
      return [
        ...state,
        action.payload
      ]
    case C.CLEAR_ERROR:
      return state.errors.filter((message, i) => i !== action.payload)
    default:
      return state
  }
}

export default combineReducers({
  categories_items,
  categories_pending,
  categories_error,
  current_quote_item,
  current_quote_pending,
  current_quote_error,
  random_quote_item,
  random_quote_pending,
  random_quote_error,
  search_quote_items,
  search_quote_pending,
  search_quote_error,
  errors
})