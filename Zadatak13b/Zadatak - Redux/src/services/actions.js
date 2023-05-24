export const FETCH_ALLDATA_SUCCESS = 'FETCH_ALLDATA_SUCCESS';
export const FETCH_ALLDATA_ERROR = 'FETCH_ALLDATA_ERROR';
export const FETCH_AUTHORSDATA_SUCCESS = 'FETCH_AUTHORSDATA_SUCCESS';
export const FETCH_AUTHORSDATA_ERROR = 'FETCH_AUTHORSDATA_ERROR';

export function fetchAll() {
    return dispatch =>
      fetch("https://frodo.ess.hr/api/sve-knjige.php")
        .then(response => response.json())
        .then(booksData =>
          dispatch({ type: FETCH_ALLDATA_SUCCESS, data: booksData })
        )
        .catch(error =>
          dispatch({ type: FETCH_ALLDATA_ERROR, message: error.toString() })
        );
  }
  
  export function fetchAuthor(author) {
      return dispatch =>
        fetch(`https://frodo.ess.hr/api/knjige-autor.php?autor=${author}`)
          .then(response => response.json())
          .then(booksData =>
            dispatch({ type: FETCH_AUTHORSDATA_SUCCESS, data: booksData })
          )
          .catch(error =>
            dispatch({ type: FETCH_AUTHORSDATA_ERROR, message: error.toString() })
          );
    }