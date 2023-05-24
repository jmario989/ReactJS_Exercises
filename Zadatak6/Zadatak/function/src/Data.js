import { useEffect, useState } from "react";
import loader from "./preloader.svg";

function Data(){
    const [podaci, postaviPodatke] = useState({
        url: "",
        title: "",
        explanation: ""
    });
    const [ucitano, postaviUcitano] = useState(false);
    const [error, postaviError] = useState(false);

    useEffect(() => {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = () => {
        if (xhttp.readyState === 4  &&  xhttp.status === 200) {
                var data = JSON.parse(xhttp.responseText);
                postaviPodatke({
                    url: data.url,
                    title: data.title,
                    explanation: data.explanation
                    });
                
                    postaviUcitano(true);
            }
        };

        xhttp.onerror = () => {
            postaviError(true);
          };

        xhttp.open("GET", "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY", true);
        //xhttp.open("GET", "https://frodo.ess.hr/api/nasa-planetary.php", true);
        xhttp.send();
    }, []);


    if(error){
        return (
            <div>
                <p>Greška kod učitavanja podataka</p>
            </div>
        );
    }
    else if(!ucitano){
        return (
            <div>
                <img src={loader} alt="loader" />
            </div>
        );
    }
    else{
        return (
            <div>
                <h1>{podaci.title}</h1>
                <img src={podaci.url} alt={podaci.title} />
                <p>{podaci.explanation}</p>
            </div>
        );
    }

}

export default Data;