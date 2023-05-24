import React from "react";

class Obrazac extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            podaci: {
                korisnickoIme: "",
                godine: ""
            },
            greska: {
                greskaKorisnickoIme: "",
                greskaGodine: "",
                greskaPredaja: ""
            },
            podaciPredani: false
        }
    }

    rukujPromjenomPodataka = event => {
        var { greskaKorisnickoIme, greskaGodine } = this.state.greska;
		// var { podaci, greska } = this.state;
       
        const { name, value } = event.target;

        switch(name){
            case "korisnickoIme":
                const izrazIme = /^[a-zA-Z0-9]{3,10}$/g;
                greskaKorisnickoIme = value.search(izrazIme) === -1 ? <strong>Udovoljite zadanom formatu: 3 - 10 alfanumeričkih znakova</strong> : "";
                break;
            case "godine":
                greskaGodine = value.trim() === "" || isNaN(value) ? <strong>Upišite numeričku vrijednost</strong> : "";
                break;
        }

        this.setState(prevState => {
            prevState.podaci[name] = value;
            prevState.greska = { greskaKorisnickoIme, greskaGodine, greskaPredaja: "" };
            return prevState;
        });
		
		/*
        podaci[name] = value;
        greska = { greskaKorisnickoIme, greskaGodine, greskaPredaja: "" };
        this.setState({ podaci, greska });
        */
    }

    rukujPredajomPodataka = event => {
        event.preventDefault();
        const { podaci, greska } = this.state;

        if(podaci.korisnickoIme !== "" && podaci.godine !== "" && greska.greskaKorisnickoIme === "" && greska.greskaGodine === ""){
            this.setState({ podaciPredani: true });
        }
        else{
            greska.greskaPredaja = "Za predaju podataka ispravno popunite polja.";
            this.setState({ greska });
        }
    }

    render(){
        const { podaci, greska, podaciPredani } = this.state;
        if(!podaciPredani){
            return (
                <div>
                    <h1>Obrazac</h1>
                    <form onSubmit={this.rukujPredajomPodataka}>
                        <label htmlFor="korisnickoIme">Korisničko ime: <strong>{podaci.korisnickoIme}</strong></label><br />
                        <input type="text" name="korisnickoIme" id="korisnickoIme" onChange={this.rukujPromjenomPodataka} /> {greska.greskaKorisnickoIme}
                        <br /><br />
                        <label htmlFor="godine">Godine: <strong>{podaci.godine}</strong></label><br />
                        <input type="text" name="godine" id="godine" onChange={this.rukujPromjenomPodataka} /> {greska.greskaGodine}
                        <br /><br />
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

}

export default Obrazac;