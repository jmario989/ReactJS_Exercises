import { useState } from "react";

function Obrazac(){
    // može i ovako, ali tada promijeniti pravilo validacije (if(podaci.korisnickoIme && podaci.godine && ...)) u funkciji rukujPredajomPodataka: const [podaci, postaviPodatke] = useState({});
    const [podaci, postaviPodatke] = useState({
        korisnickoIme: "",
        godine: ""
    });
    const [greskaGodine, postaviGreskaGodine] = useState("");
    const [greskaKorisnickoIme, postaviGreskaKorisnickoIme] = useState("");
    const [greskaPredaja, postaviGreskaPredaja] = useState("");
    const [podaciPredani, postaviPodaciPredani] = useState(false);

    const rukujPromjenomPodataka = event => {
        const vrijednost = event.target.value;
        const naziv = event.target.name;
        const izrazIme = /^[a-zA-Z0-9]{3,10}$/g;

        if (naziv === "korisnickoIme") {
            if (vrijednost.search(izrazIme) === -1) {
                postaviGreskaKorisnickoIme(<strong>Udovoljite zadanom formatu: 3-10 alfanumeričkih znakova</strong>);
            }
            else{
                postaviGreskaKorisnickoIme("");
            }
        }
        else if (naziv === "godine") {
            if (vrijednost.trim() === "" || isNaN(vrijednost)) {
                postaviGreskaGodine(<strong>Upišite numeričku vrijednost.</strong>);
            }
            else{
                postaviGreskaGodine("");
            }
        }

        postaviPodatke(prevState => {
            return {...prevState, [naziv]: vrijednost}
        });
        postaviGreskaPredaja("");
    }

    const rukujPredajomPodataka = event => {
        event.preventDefault();

        if(podaci.korisnickoIme !== "" && podaci.godine !== "" && greskaKorisnickoIme === "" && greskaGodine === ""){
            postaviPodaciPredani(true);
        }
        else{
            postaviGreskaPredaja("Za predaju podataka ispravno popunite polja.");
        }
    }

    if(!podaciPredani){
        return (
            <div>
                <h1>Obrazac</h1>
                <form onSubmit={rukujPredajomPodataka}>
                    <label htmlFor="korisnickoIme">Korisničko ime: <strong>{podaci.korisnickoIme}</strong></label><br />
                    <input type="text" id="korisnickoIme" name="korisnickoIme" onChange={rukujPromjenomPodataka} /> {greskaKorisnickoIme}<br /><br />
                    <label htmlFor="godine">Godine: <strong>{podaci.godine}</strong></label><br />
                    <input type="text" id="godine" name="godine" onChange={rukujPromjenomPodataka} /> {greskaGodine}<br /><br />
                    <button type="submit">Predaj</button>
                </form>
                <p><strong>{greskaPredaja}</strong></p>
            </div>
        );
    }
    else{
        return (
            <div>
                <h1>Vaši podaci</h1>
                <p>Korisničko ime: {podaci.korisnickoIme}</p>
                <p>Godine: {podaci.godine}</p>
            </div>
        );
    }

}

export default Obrazac;