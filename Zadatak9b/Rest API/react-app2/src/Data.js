import { useEffect, useState } from "react";

import { fetchData } from "./services/fetchData";

function Data(){
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    // zahtjev se šalje jedanput nakon prvog renderiranja
    useEffect(() => {
		fetchData('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', setData, setError);
    }, []);
    
    if (error) {
        return <div>{error}</div>;
    }
    
      if (!data) {
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