function fetchData(url, query, setData, setError){
    return fetch(url + "?pojam=" + query)
    .then(response => response.json())
    .then(data => setData(data))
    .catch(error => setError(error.toString()));
}

export { fetchData };