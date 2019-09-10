import C from "./constants";

export const fetchQuoteCategories = () => dispatch => {
  dispatch({
    type: C.FETCH_CATEGORIES_PENDING,
    payload: true
  })
  fetch("https://api.chucknorris.io/jokes/categories")
    .then(response => response.json())
    .then(categories => {
      console.log(categories)
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
          type: C.FETCH_CATEGORIES_SUCCESS,
          payload: [...categories]
        })
        dispatch({
          type: C.FETCH_CATEGORIES_PENDING,
          payload: false
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
  dispatch({
    type: C.FETCH_QUOTE_PENDING,
    payload: true
  }) 
  fetch("https://api.chucknorris.io/jokes/random?category=" + quoteType)
    .then(response => response.json())
    .then(currentQuote => {
      if (currentQuote.error) {
        dispatch({
          type: C.FETCH_QUOTE_ERROR,
          payload: currentQuote
        }) 
        dispatch({
          type: C.FETCH_QUOTE_PENDING,
          payload: false
        }) 
        dispatch(
          addError(currentQuote.error)
        ) 
      } else {
        dispatch({
          type: C.FETCH_QUOTE_SUCCESS,
          payload: currentQuote
        })
        dispatch({
          type: C.FETCH_QUOTE_PENDING,
          payload: false
        })    
      }
    })
    .catch(error => {
      dispatch(
        addError(error.message)
      )

    })
}

export const fetchRandomQuote = () => dispatch => {
  dispatch({
    type: C.FETCH_RANDOMQUOTE_PENDING,
    payload: true
  }) 
  fetch("https://api.chucknorris.io/jokes/random")
    .then(response => response.json())
    .then(currentQuote => {
      if (currentQuote.error) {
        dispatch({
          type: C.FETCH_RANDOMQUOTE_ERROR,
          payload: currentQuote
        }) 
        dispatch({
          type: C.FETCH_RANDOMQUOTE_PENDING,
          payload: false
        }) 
        dispatch(
          addError(currentQuote.error)
        ) 
      } else {
        dispatch({
          type: C.FETCH_RANDOMQUOTE_SUCCESS,
          payload: currentQuote
        })
        dispatch({
          type: C.FETCH_RANDOMQUOTE_PENDING,
          payload: false
        })    
      }
    })
    .catch(error => {
      dispatch(
        addError(error.message)
      )

    })
}

export const fetchSearchQuote = (searchString) => dispatch => {
  dispatch({
    type: C.FETCH_SEARCHQUOTE_PENDING,
    payload: true
  }) 
  fetch("https://api.chucknorris.io/jokes/search?query=" + searchString)
    .then(response => response.json())
    .then(currentQuote => {
      if (currentQuote.error) {
        dispatch({
          type: C.FETCH_QUOTE_ERROR,
          payload: currentQuote
        }) 
        dispatch({
          type: C.FETCH_SEARCHQUOTE_PENDING,
          payload: false
        }) 
        dispatch(
          addError(currentQuote.error)
        ) 
      } else {
        dispatch({
          type: C.FETCH_SEARCHQUOTE_SUCCESS,
          payload: currentQuote
        })
        dispatch({
          type: C.FETCH_SEARCHQUOTE_PENDING,
          payload: false
        })    
      }
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