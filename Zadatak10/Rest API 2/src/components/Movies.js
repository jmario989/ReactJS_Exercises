import { useState } from "react";
import { fetchData } from "../services/fetchData";
import ShowMovies from "./ShowMovies";

function Movies(){
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);

    const fetchMovies = () => {
        fetchData("https://frodo.ess.hr/api/svi-filmovi-json.php", setMovies, setError);
    }

    const deleteMovies = () => {
        setMovies([]);
    }

    return (
        <div>
            <h3>Prikaz filmova</h3>
            <button onClick={fetchMovies}>Prikaži filmove</button>
            <button onClick={deleteMovies}>Briši</button>
            {error ? <h4>{error}</h4> : movies.length > 0 ? <ShowMovies movies={movies} /> : ""}
        </div>
    );

}

export default Movies;