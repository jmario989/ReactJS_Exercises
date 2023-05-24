import { useEffect, useState } from "react";

function Data(){
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    // zahtjev se šalje samo jednaput (kod prvog renderiranja)
    useEffect(() => {
        // console.log("fetch");
        fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
        .then(response => response.json())
        .then(nasaData => setData(nasaData))
        .catch(error => setError(error.toString()));
    }, []);

    if(error){
        return <div>{error}</div>;
    }

    if(!data){
        return <div>Loading NASA data</div>;
    }

    const { title, url, explanation } = data;

    return (
        <div>
            <h1>{title}</h1>
            <img src={url} alt={title} width="500" />
            <p>{explanation}</p>
        </div>
    );

}

export default Data;