import C from '../constants';
import { combineReducers } from 'redux';


export const categories = (state = [], action) =>
  (action.type === C.FETCH_CATEGORIES_SUCCESS) ?
    action.payload :
    state

export const currentQuote = (state = {}, action) =>
  (action.type === C.FETCH_QUOTE_TYPE) ?
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
      return state.filter((message, i) => i !== action.payload)
    default:
      return state
  }
}

export default combineReducers({
  categories,
  currentQuote,
  errors
})