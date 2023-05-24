import {useState} from "react";

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
        return (
            <div>
                <h1>Anketa</h1>
                <form onSubmit={vratiOdgovor}>
                    <label>Ime i prezime: <strong>{imePrezime}</strong></label><br />
                     {/* <input type="text" name="ime" onChange={upravljajPromjenomImena} /> */}
                    <input type="text" name="imePrezime" onChange={upravljajPromjenomVrijednost} /> 
                    <br /><br />
                    <label>Godina rođenja: <strong>{godinaRodenja}</strong></label><br />
                    <input type="number" name="godinaRodenja" onChange={upravljajPromjenomVrijednost} />
                    <br /><br />
                    <label>Spol: <strong>{spol}</strong></label><br />
                    <label htmlFor="m">Muško</label>
                    <input type="radio" id="m" name="spol" value="M" onChange={upravljajPromjenomVrijednost} />
                    <label htmlFor="z">Žensko</label>
                    <input type="radio" id="z" name="spol" value="Ž" onChange={upravljajPromjenomVrijednost} />
                    <br /><br />
                    <label>Program obrazovanja: <strong>{programObrazovanja}</strong></label><br />
                    <select name="programObrazovanja" onChange={upravljajPromjenomVrijednost}>
                        <option value="">Odaberite program obrazovanja</option>
                        <option value="Web dizajn">Web dizajn</option>
                        <option value="PHP">PHP</option>
                        <option value="Front-End">Front-End</option>
                        <option value="ASP.NET">ASP.NET</option>
                    </select>
                    <br /><br />
                    <label>Ocjena: <strong>{ocjena}</strong></label><br />
                    <label htmlFor="ocjena5">5</label>
                    <input type="radio" id="ocjena5" name="ocjena" value="5" onChange={upravljajPromjenomVrijednost} />
                    <label htmlFor="ocjena4">4</label>
                    <input type="radio" id="ocjena4" name="ocjena" value="4" onChange={upravljajPromjenomVrijednost} />
                    <label htmlFor="ocjena3">3</label>
                    <input type="radio" id="ocjena3" name="ocjena" value="3" onChange={upravljajPromjenomVrijednost} />
                    <label htmlFor="ocjena2">2</label>
                    <input type="radio" id="ocjena2" name="ocjena" value="2" onChange={upravljajPromjenomVrijednost} />
                    <label htmlFor="ocjena1">1</label>
                    <input type="radio" id="ocjena1" name="ocjena" value="1" onChange={upravljajPromjenomVrijednost} />
                    <br /><br />
                    <input type="submit" value="Predaj" />
                </form>
            </div>
        );
    }
    else{
        return (
        <div>
            <h1>Vaši odgovori</h1>
            <table border="1">
                <thead>
                    <tr><th>Ime i prezime</th><th>Godina rođenja</th><th>Spol</th><th>Program obrazovanja</th><th>Ocjena</th></tr>
                </thead>
                <tbody>
                    <tr><td>{imePrezime}</td><td>{godinaRodenja}</td><td>{spol === "M" ? "Muško" : spol === "Ž" ? "Žensko" : ""}</td><td>{programObrazovanja}</td><td>{ocjena}</td></tr>
                </tbody>
            </table>
        </div>
        );
    }
}

export default Anketa;