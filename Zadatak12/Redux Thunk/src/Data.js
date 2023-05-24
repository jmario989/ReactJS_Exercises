import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { fetchNasaData } from "./services/actions";
import { getNasaData, getError } from "./services/connectFunctions";

function Data(){
    const data = useSelector(getNasaData);
    const error = useSelector(getError);
    const dispatch = useDispatch();

    // zahtjev se šalje samo jednaput (kod prvog renderiranja)
    useEffect(() => {
        // console.log("fetch");
        dispatch(fetchNasaData());
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

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