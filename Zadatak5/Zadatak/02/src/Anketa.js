import {useState} from "react";

import Obrazac from "./Obrazac";
import Odgovor from "./Odgovor";

function Anketa(){
    const [imePrezime, postaviImePrezime] = useState();
    const [godinaRodenja, postaviGodinaRodenja] = useState();
    const [spol, postaviSpol] = useState();
    const [programObrazovanja, postaviProgramObrazovanja] = useState();
    const [ocjena, postaviOcjena] = useState();
    const [odgovor, postaviOdgovor] = useState(0);

    /*
    var upravljajPromjenomImena = event => {
        postaviImePrezime(event.target.value);
    }

    var upravljajPromjenomGodine = event => {
        postaviGodinaRodenja(event.target.value);
    }

    var upravljajPromjenomSpola = event => {
        postaviSpol(event.target.value);
    }

    var upravljajPromjenomPrograma = event => {
        postaviProgramObrazovanja(event.target.value);
    }

    var upravljajPromjenomOcjene = event => {
        postaviOcjena(event.target.value);
    }
    */

    var upravljajPromjenomVrijednost = (event) => {
        var naziv = event.target.name;
        var vrijednost = event.target.value;

        if(naziv === "imePrezime"){
            postaviImePrezime(vrijednost);
        }
        else if(naziv === "godinaRodenja"){
            postaviGodinaRodenja(vrijednost);
        }
        else if(naziv === "spol"){
            postaviSpol(vrijednost);
        }
        else if(naziv === "programObrazovanja"){
            postaviProgramObrazovanja(vrijednost);
        }
        else if(naziv === "ocjena"){
            postaviOcjena(vrijednost);
        }
    }

    var vratiOdgovor = (event) => {
        postaviOdgovor(1);
        event.preventDefault();
    }

    if(odgovor === 0){
        return <Obrazac imePrezime={imePrezime} godinaRodenja={godinaRodenja} spol={spol} programObrazovanja={programObrazovanja} ocjena={ocjena} onFormSubmit={vratiOdgovor} onDataChange={upravljajPromjenomVrijednost} />
    }
    else{
        return <Odgovor imePrezime={imePrezime} godinaRodenja={godinaRodenja} spol={spol} programObrazovanja={programObrazovanja} ocjena={ocjena} />
    }
}

export default Anketa;