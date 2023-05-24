import {useState} from "react";

import Obrazac from "./Obrazac";
import Odgovor from "./Odgovor";

function Anketa(){
    const [podaci, postaviPodatke] = useState({});
    const [odgovor, postaviOdgovor] = useState(0);

    var upravljajPromjenomVrijednost = (event) => {
        var naziv = event.target.name;
        var vrijednost = event.target.value;

        postaviPodatke(prevState => {
            return {...prevState, [naziv]: vrijednost}
        });
    }

    var vratiOdgovor = (event) => {
        postaviOdgovor(1);
        event.preventDefault();
    }

    if(odgovor === 0){
        return <Obrazac podaci={podaci} onFormSubmit={vratiOdgovor} onDataChange={upravljajPromjenomVrijednost} />
    }
    else{
        return <Odgovor podaci={podaci} />
    }
}

export default Anketa;