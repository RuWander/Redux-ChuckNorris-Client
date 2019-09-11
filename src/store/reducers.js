import C from '../constants';
import { combineReducers } from 'redux';

const categoriesState = {
  items: [],
  pending: false,
  error: null
}

export const categories = (state = categoriesState, action) => {
  switch (action.type) {
    case C.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        items: action.payload
      }
    case C.FETCH_CATEGORIES_PENDING:
      return {
        ...state,
        pending: action.payload
      }
    case C.FETCH_CATEGORIES_ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}

const QuoteState = {
  item: {},
  pending: false,
  error: null
}

export const current_quote = (state = QuoteState, action) => {
  switch (action.type) {
    case C.FETCH_QUOTE_SUCCESS:
      return {
        ...state,
        item: action.payload
      }
    case C.FETCH_QUOTE_PENDING:
      return {
        ...state,
        pending: action.payload
      }
    case C.FETCH_QUOTE_ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}

const RandomQuoteState = {
  item: {},
  pending: false,
  error: null
}

export const random_quote = (state = RandomQuoteState, action) => {
  switch (action.type) {
    case C.FETCH_RANDOMQUOTE_SUCCESS:
      return {
        ...state,
        item: action.payload
      }
    case C.FETCH_RANDOMQUOTE_PENDING:
      return {
        ...state,
        pending: action.payload
      }
    case C.FETCH_RANDOMQUOTE_ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}

const SearchQuoteState = {
  items: [],
  pending: false,
  error: null
}

export const search_quote = (state = SearchQuoteState, action) => {
  switch (action.type) {
    case C.FETCH_SEARCHQUOTE_SUCCESS:
      return {
        ...state,
        items: action.payload.result
      }
    case C.FETCH_SEARCHQUOTE_PENDING:
      return {
        ...state,
        pending: action.payload
      }
    case C.FETCH_SEARCHQUOTE_ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}

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
  categories,
  current_quote,
  random_quote,
  search_quote,
  errors
})