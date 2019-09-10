import C from "./constants";

export const fetchQuoteCategories = () => dispatch => {
  fetch("https://api.chucknorris.io/jokes/categories")
    .then(response => response.json())
    .then(categories => {
      if (categories.error) {
        dispatch({
          type: C.FETCH_CATEGORIES_ERROR,
          payload: categories.error
        })
        dispatch(
          addError(categories.error)
        ) 
      } else {
        dispatch({
          type: C.FETCH_QUOTE_CATEGORIES,
          payload: categories
        })
      }
    })
    .catch(error => {
      dispatch(
        addError(error.message)
      )

    })
}

export const fetchQuote = (quoteType) => dispatch => {
  fetch("https://api.chucknorris.io/jokes/random?category=" + quoteType)
    .then(response => response.json())
    .then(currentQuote => {
      (currentQuote.error) ?
        dispatch(
          addError(currentQuote.error)
        ) :
        dispatch({
          type: C.FETCH_QUOTE_TYPE,
          payload: currentQuote
        })      
    })
    .catch(error => {
      dispatch(
        addError(error.message)
      )

    })
}

export const addError = (message) =>
  ({
    type: C.ADD_ERROR,
    payload: message
  })

export const clearError = index =>
  ({
    type: C.CLEAR_ERROR,
    payload: index
  }) 