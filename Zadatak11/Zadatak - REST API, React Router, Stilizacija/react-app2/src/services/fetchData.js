export function fetchData(url, setData, setError, signal) {
    return fetch(url, {signal})
    .then(response =>response.json())
    .then(data => {
        setData(data);
        console.log(data);
    })
    .catch(error => {
        if(error.name === "AbortError"){
            console.log("Request aborted");
        }
        else{
            setError(error.toString());
        }
    });
}