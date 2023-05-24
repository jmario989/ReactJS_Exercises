import { useState } from "react";

function Obrazac(){
    // može i ovako, ali tada promijeniti pravilo validacije (if(podaci.korisnickoIme && podaci.godine && ...)) u funkciji rukujPredajomPodataka: const [podaci, postaviPodatke] = useState({});
    const [podaci, postaviPodatke] = useState({
        korisnickoIme: "",
        godine: ""
    });
    const [greska, postaviGresku] = useState({
        greskaKorisnickoIme: "",
        greskaGodine: "",
        greskaPredaja: ""
    });
    const [podaciPredani, postaviPodaciPredani] = useState(false);

    const rukujPromjenomPodataka = event => {
        var { greskaKorisnickoIme, greskaGodine } = greska;

        const { name, value } = event.target;

        switch(name){
            case "korisnickoIme":
                const izrazIme = /^[a-zA-Z0-9]{3,10}$/g;
                greskaKorisnickoIme = value.search(izrazIme) === -1 ? <strong>Udovoljite zadanom formatu: 3-10 alfanumeričkih znakova</strong> : "";
                break;
            case "godine":
                //isNaN("") === false
                greskaGodine = value.trim() === "" || isNaN(value) ? <strong>Upišite numeričku vrijednost.</strong> : "";
                break;
        }

        postaviPodatke(prevState => {
            return {...prevState, [name]: value}
        });

        postaviGresku(prevState => {
            return { greskaKorisnickoIme, greskaGodine, greskaPredaja: "" };
        });
        // postaviGresku({ greskaKorisnickoIme, greskaGodine, greskaPredaja: "" });
    }

    const rukujPredajomPodataka = event => {
        event.preventDefault();

        if(podaci.korisnickoIme !== "" && podaci.godine !== "" && greska.greskaKorisnickoIme === "" && greska.greskaGodine === ""){
            postaviPodaciPredani(true);
        }
        else{
            postaviGresku({...greska,  greskaPredaja: "Za predaju podataka ispravno popunite polja."});
        }
    }

    if(!podaciPredani){
        return (
            <div>
                <h1>Obrazac</h1>
                <form onSubmit={rukujPredajomPodataka}>
                    <label htmlFor="korisnickoIme">Korisničko ime: <strong>{podaci.korisnickoIme}</strong></label><br />
                    <input type="text" id="korisnickoIme" name="korisnickoIme" onChange={rukujPromjenomPodataka} /> {greska.greskaKorisnickoIme}<br /><br />
                    <label htmlFor="godine">Godine: <strong>{podaci.godine}</strong></label><br />
                    <input type="text" id="godine" name="godine" onChange={rukujPromjenomPodataka} /> {greska.greskaGodine}<br /><br />
                    <button type="submit">Predaj</button>
                </form>
                <p><strong>{greska.greskaPredaja}</strong></p>
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