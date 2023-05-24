export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_ERROR = "FETCH_DATA_ERROR";

export function fetchNasaData(){
    return dispatch => 
    // fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    fetch("https://frodo.ess.hr/api/nasa-planetary.php")
    .then(response => response.json())
    .then(nasaData => 
        dispatch({ type: FETCH_DATA_SUCCESS, data: nasaData })    
    )
    .catch(error => 
        dispatch({ type: FETCH_DATA_ERROR, message: error.toString() })    
    );
}