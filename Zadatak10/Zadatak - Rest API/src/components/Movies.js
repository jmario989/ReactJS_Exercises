import { useState, useEffect } from "react";
import { fetchData } from "../services/fetchData";
import ShowMovies from "./ShowMovies";

function Movies(){
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [query, setQuery] = useState(null);

    useEffect(() => {
        // console.log("fetch");
        if(query){
            fetchData("https://frodo.ess.hr/api/filmovi-po-nazivu-json.php", query, setMovies, setError);
        }
        else{
            setMovies([]);
        }
        
    }, [query]);

    const search = event => {
        setQuery(event.target.value);
    }

    return (
        <div>
            <h3>Pretraga filmova</h3>
            <input type="text" onKeyUp={search} />
            {error ? <div>{error}</div> : movies.length > 0 ? <ShowMovies movies={movies} /> : ""}
        </div>
    );

}

export default Movies;